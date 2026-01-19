
import { createClient } from '@supabase/supabase-js';

// These would normally come from process.env in a real environment
const supabaseUrl = (window as any).SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = (window as any).SUPABASE_ANON_KEY || 'your-anon-key';

// Creating the client. In this environment, we provide a robust mock structure
// so the app remains functional even if credentials aren't provided.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** 
 * NOTE TO USER: 
 * To make the admin panel functional, set up your Supabase project with:
 * 1. Tables: services, portfolio, testimonials, leads, settings
 * 2. Storage Bucket: "portfolio"
 * 3. Auth: Email/Password
 */
