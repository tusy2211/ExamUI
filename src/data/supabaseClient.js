import { createClient } from '@supabase/supabase-js';

// Public anon key — safe to use client-side (RLS protects data)
const supabaseUrl = 'https://ruzlycrtzuduoiwbxcdn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1emx5Y3J0enVkdW9pd2J4Y2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzMzNTEsImV4cCI6MjA4NzY0OTM1MX0.un04O1uTpObyZwvkn63FXFql4nQzovRGAdWGl9xf_8o';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
