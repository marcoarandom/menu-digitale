import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://awkawqblqpsjnqgsimoq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3a2F3cWJscXBzam5xZ3NpbW9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNTkxMzIsImV4cCI6MjA5MTkzNTEzMn0.0NzDsJp6E0WqMThKekGJyI--SIsS6x52Yeln7WabVVU'
)