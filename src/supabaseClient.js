// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ktpoodufzfbxmtuafdsy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0cG9vZHVmemZieG10dWFmZHN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODIyMjAsImV4cCI6MjA5Njc1ODIyMH0.lTqEnDXzNuILZqFNfR598cdelsnaRm2k_MNDkYPTRXs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);