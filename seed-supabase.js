/**
 * Seed script: Upload exam data from exam-data.json to Supabase.
 * Run once: node seed-supabase.js
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const SUPABASE_URL = 'https://ruzlycrtzuduoiwbxcdn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1emx5Y3J0enVkdW9pd2J4Y2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzMzNTEsImV4cCI6MjA4NzY0OTM1MX0.un04O1uTpObyZwvkn63FXFql4nQzovRGAdWGl9xf_8o';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function seed() {
    console.log('Reading exam-data.json...');
    const raw = fs.readFileSync('./public/exam-data.json', 'utf-8');
    const jsonData = JSON.parse(raw);

    console.log(`Found ${jsonData.examSets.length} exam sets.`);

    for (const set of jsonData.examSets) {
        const row = {
            id: set.id,
            title: set.title,
            image: set.image,
            progress: set.progress,
            last_access_time: set.lastAccessTime,
            data: set, // store the entire exam set object as JSONB
        };

        console.log(`Upserting: ${set.id} - ${set.title}`);
        const { error } = await supabase
            .from('exam_sets')
            .upsert(row, { onConflict: 'id' });

        if (error) {
            console.error(`Error upserting ${set.id}:`, error.message);
        } else {
            console.log(`  ✅ Success!`);
        }
    }

    console.log('\nDone! All exam sets uploaded to Supabase.');
}

seed().catch(console.error);
