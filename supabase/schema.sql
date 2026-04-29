-- 1. Create tables

CREATE TABLE public.rental_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  desired_date date,
  desired_time text,
  event_type text,
  guest_count integer,
  message text,
  privacy_agreed boolean not null default false,
  created_at timestamptz default now()
);

CREATE TABLE public.programs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  program_date date,
  start_time text,
  end_time text,
  image_url text,
  status text default 'upcoming',
  created_at timestamptz default now()
);

CREATE TABLE public.menu_items (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  name text not null,
  description text,
  price integer,
  image_url text,
  is_active boolean default true,
  sort_order integer default 0,
  created_at timestamptz default now()
);

-- 2. Setup Row Level Security (RLS) policies

-- Enable RLS for all tables
ALTER TABLE public.rental_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;

-- rental_inquiries: Anon users can INSERT, but NO select/update/delete (Write-only form)
CREATE POLICY "Allow anonymous insert to rental_inquiries"
  ON public.rental_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No select policy for inquiries -> meaning anon users cannot read them. Only admin in Supabase Dashboard can read them.

-- programs: Public read access
CREATE POLICY "Allow public read-only access to programs"
  ON public.programs
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- menu_items: Public read access
CREATE POLICY "Allow public read-only access to menu_items"
  ON public.menu_items
  FOR SELECT
  TO anon, authenticated
  USING (true);
