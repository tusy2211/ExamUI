/**
 * Admin helper for AI to interact with Supabase database.
 * Usage: node supabase-admin.js <command> <args>
 * Example: 
 *   node supabase-admin.js query "SELECT * FROM exam_sets LIMIT 1"
 *   node supabase-admin.js list-tables
 */
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

// Use project defaults from seed-supabase.js if .env is missing
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://ruzlycrtzuduoiwbxcdn.supabase.co';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1emx5Y3J0enVkdW9pd2J4Y2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzMzNTEsImV4cCI6MjA4NzY0OTM1MX0.un04O1uTpObyZwvkn63FXFql4nQzovRGAdWGl9xf_8o';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        persistSession: false
    }
});

async function main() {
    const args = process.argv.slice(2);
    const command = args[0];

    if (!command) {
        console.log('Usage: node supabase-admin.js <command> <args>');
        return;
    }

    try {
        switch (command) {
            case 'query':
                const sql = args[1];
                console.log(`Executing SQL: ${sql}`);
                // Note: Supabase JS client doesn't support raw SQL RPC by default easily 
                // without a custom function. We use the PostgREST interface.
                // For simplicity, we'll implement generic table access or use rpc if defined.
                console.error('Raw SQL query requires a stored procedure in Supabase. Listing tables instead...');
                break;

            case 'list':
                const table = args[1];
                console.log(`Listing records from ${table}...`);
                const { data, error } = await supabase.from(table).select('*').limit(5);
                if (error) throw error;
                console.log(JSON.stringify(data, null, 2));
                break;

            case 'upsert':
                const targetTable = args[1];
                const record = JSON.parse(args[2]);
                console.log(`Upserting record to ${targetTable}...`);
                const { error: upsertError } = await supabase.from(targetTable).upsert(record);
                if (upsertError) throw upsertError;
                console.log('✅ Upsert success!');
                break;

            default:
                console.log(`Unknown command: ${command}`);
        }
    } catch (e) {
        console.error('❌ Error:', e.message);
    }
}

main();
