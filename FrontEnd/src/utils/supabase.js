import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://azykxlbtovhbvmvymcgr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6eWt4bGJ0b3ZoYnZtdnltY2dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDgxMjgsImV4cCI6MjA0MTU4NDEyOH0.AG2B5BE03OaZ2QQzuZ3McaGkvoHdBJT-c4v5Q4Xmo6E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
        