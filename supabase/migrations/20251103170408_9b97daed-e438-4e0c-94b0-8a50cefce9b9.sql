-- Add onboarding fields to profiles table
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS creator_type TEXT[],
ADD COLUMN IF NOT EXISTS brand_type TEXT,
ADD COLUMN IF NOT EXISTS main_goal TEXT,
ADD COLUMN IF NOT EXISTS social_instagram TEXT,
ADD COLUMN IF NOT EXISTS social_tiktok TEXT,
ADD COLUMN IF NOT EXISTS social_youtube TEXT,
ADD COLUMN IF NOT EXISTS website_url TEXT,
ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS user_role TEXT CHECK (user_role IN ('creator', 'brand'));

-- Add comment for documentation
COMMENT ON COLUMN public.profiles.creator_type IS 'Multi-select creator types: content_creator, designer, educator, fitness, ugc, other';
COMMENT ON COLUMN public.profiles.brand_type IS 'Brand type: agency, small_business, corporate, ecommerce';
COMMENT ON COLUMN public.profiles.main_goal IS 'User main goal for using Crevia';
COMMENT ON COLUMN public.profiles.onboarding_completed IS 'Whether user has completed onboarding flow';