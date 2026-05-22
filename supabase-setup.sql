-- ============================================
-- مشروع China Sourcing - إعداد قاعدة البيانات
-- انسخ كل هذا والصقه في Supabase SQL Editor واضغط Run
-- ============================================

create table if not exists suppliers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact text,
  city text,
  wechat text,
  email text,
  address text,
  specialty text,
  rating text,
  notes text,
  card_photo text,
  created_at timestamptz default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  supplier_id uuid references suppliers(id) on delete set null,
  price_rmb numeric default 0,
  unit text,
  qty_per_villa numeric default 0,
  model text,
  notes text,
  status text default 'considering',
  photo text,
  catalog_key text,
  created_at timestamptz default now()
);

create table if not exists settings (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

alter table suppliers enable row level security;
alter table products enable row level security;
alter table settings enable row level security;

drop policy if exists "allow all suppliers" on suppliers;
create policy "allow all suppliers" on suppliers for all using (true) with check (true);

drop policy if exists "allow all products" on products;
create policy "allow all products" on products for all using (true) with check (true);

drop policy if exists "allow all settings" on settings;
create policy "allow all settings" on settings for all using (true) with check (true);

create index if not exists products_category_idx on products(category);
create index if not exists products_created_idx on products(created_at desc);
create index if not exists suppliers_created_idx on suppliers(created_at desc);
