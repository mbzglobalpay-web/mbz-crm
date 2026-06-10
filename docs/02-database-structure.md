# Структура базы данных CRM МБЗ

Целевая СУБД: PostgreSQL 16+. Ниже описана промышленная логическая модель. В прототипе данные хранятся в браузере, но структура интерфейса соответствует этой модели.

## Основные таблицы

### users

- id uuid primary key
- full_name text not null
- email citext unique not null
- role_id uuid not null references roles(id)
- department text
- is_active boolean default true
- created_at timestamptz
- updated_at timestamptz

### roles

- id uuid primary key
- code text unique not null
- name text not null
- permissions jsonb not null

### companies

- id uuid primary key
- name text not null
- legal_name text
- inn text
- kpp text
- ogrn text
- company_type text not null
- segment text
- region text
- city text
- website text
- source text
- status text not null
- responsible_user_id uuid references users(id)
- rating numeric(3,2)
- notes text
- created_at timestamptz
- updated_at timestamptz

Индексы: inn, lower(name), region, company_type, responsible_user_id.

### contacts

- id uuid primary key
- company_id uuid not null references companies(id)
- full_name text not null
- position text
- decision_role text
- influence_level text
- phone text
- email citext
- messenger text
- preferred_channel text
- is_key_person boolean default false
- created_at timestamptz
- updated_at timestamptz

### deals

- id uuid primary key
- company_id uuid not null references companies(id)
- primary_contact_id uuid references contacts(id)
- title text not null
- stage text not null
- probability int not null
- expected_revenue numeric(14,2)
- expected_tonnage numeric(12,3)
- product_line text
- region text
- close_date date
- responsible_user_id uuid references users(id)
- loss_reason text
- created_at timestamptz
- updated_at timestamptz

Стадии: lead, qualification, sample, testing, proposal, negotiation, contract, won, lost.

### activities

- id uuid primary key
- company_id uuid references companies(id)
- contact_id uuid references contacts(id)
- deal_id uuid references deals(id)
- activity_type text not null
- direction text
- subject text not null
- result text
- next_action text
- due_at timestamptz
- completed_at timestamptz
- owner_user_id uuid references users(id)
- created_at timestamptz

Типы: call, email, meeting, messenger, site_visit, task, note.

### commercial_offers

- id uuid primary key
- deal_id uuid not null references deals(id)
- company_id uuid not null references companies(id)
- offer_number text unique not null
- version int not null
- status text not null
- currency text default 'RUB'
- total_amount numeric(14,2)
- valid_until date
- payment_terms text
- delivery_terms text
- file_document_id uuid references documents(id)
- created_by uuid references users(id)
- created_at timestamptz

### commercial_offer_items

- id uuid primary key
- offer_id uuid not null references commercial_offers(id)
- product_id uuid not null references products(id)
- quantity_tons numeric(12,3) not null
- unit_price numeric(12,2) not null
- discount_percent numeric(5,2) default 0
- vat_rate numeric(5,2)
- amount numeric(14,2) not null

### samples

- id uuid primary key
- company_id uuid not null references companies(id)
- deal_id uuid references deals(id)
- product_id uuid references products(id)
- batch_number text
- quantity_kg numeric(10,3)
- purpose text
- sent_at date
- received_at date
- carrier text
- tracking_number text
- status text not null
- feedback text
- owner_user_id uuid references users(id)
- created_at timestamptz

### tests

- id uuid primary key
- company_id uuid not null references companies(id)
- deal_id uuid references deals(id)
- sample_id uuid references samples(id)
- test_type text not null
- soil_conditions text
- viscosity numeric(10,2)
- fluid_loss numeric(10,2)
- yield_value numeric(10,2)
- swelling_index numeric(10,2)
- density numeric(10,3)
- conclusion text
- recommendation text
- status text not null
- technologist_user_id uuid references users(id)
- started_at date
- completed_at date

### orders

- id uuid primary key
- company_id uuid not null references companies(id)
- deal_id uuid references deals(id)
- order_number text unique not null
- status text not null
- total_amount numeric(14,2)
- total_tonnage numeric(12,3)
- payment_status text
- delivery_status text
- planned_ship_date date
- actual_ship_date date
- warehouse text
- responsible_user_id uuid references users(id)
- created_at timestamptz
- updated_at timestamptz

### order_items

- id uuid primary key
- order_id uuid not null references orders(id)
- product_id uuid not null references products(id)
- package_type text
- quantity_tons numeric(12,3)
- unit_price numeric(12,2)
- vat_rate numeric(5,2)
- amount numeric(14,2)

### suppliers

- id uuid primary key
- name text not null
- supplier_type text not null
- inn text
- region text
- contact_name text
- phone text
- email citext
- reliability_score numeric(3,2)
- quality_score numeric(3,2)
- payment_terms text
- notes text
- is_active boolean default true
- created_at timestamptz

### documents

- id uuid primary key
- entity_type text not null
- entity_id uuid not null
- document_type text not null
- number text
- status text not null
- title text not null
- file_url text
- version int default 1
- valid_from date
- valid_until date
- owner_user_id uuid references users(id)
- created_at timestamptz
- updated_at timestamptz

### products

- id uuid primary key
- sku text unique not null
- name text not null
- product_line text not null
- package_type text
- active boolean default true
- specs jsonb

### audit_log

- id uuid primary key
- user_id uuid references users(id)
- entity_type text not null
- entity_id uuid not null
- action text not null
- before_data jsonb
- after_data jsonb
- created_at timestamptz

## Связи верхнего уровня

- company 1:N contacts
- company 1:N deals
- deal 1:N activities
- deal 1:N commercial_offers
- deal 1:N samples
- sample 1:N tests
- deal 0:N orders
- company 1:N documents
- order 1:N documents
- supplier 1:N documents

## Правила целостности

- Заказ нельзя перевести в "закрыт", пока не загружены закрывающие документы.
- Сделка "won" должна иметь связанный заказ или причину исключения.
- КП всегда создается в версии 1+, новая редакция не перезаписывает старую.
- Испытание должно иметь заключение перед статусом "completed".
- Контакт с is_key_person=true обязан иметь decision_role.

