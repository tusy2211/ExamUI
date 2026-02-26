/**
 * API layer to fetch exam data from Supabase.
 * Data is cached in memory after the first fetch.
 */
import { supabase } from './supabaseClient';

let cachedExamSets = null;

async function fetchExamSets() {
    if (cachedExamSets) return cachedExamSets;

    try {
        const { data, error } = await supabase
            .from('exam_sets')
            .select('*');

        if (error) throw error;

        // Extract the full exam set objects from the 'data' JSONB column
        cachedExamSets = data.map((row) => row.data);
        return cachedExamSets;
    } catch (error) {
        console.error('Error loading exam data from Supabase:', error);
        // Fallback: try local JSON file
        try {
            const response = await fetch('/exam-data.json');
            if (response.ok) {
                const json = await response.json();
                cachedExamSets = json.examSets;
                return cachedExamSets;
            }
        } catch (fallbackError) {
            console.error('Fallback also failed:', fallbackError);
        }
        return [];
    }
}

export const getExamSets = async () => {
    return await fetchExamSets();
};

export const getExamSet = async (id) => {
    const examSets = await getExamSets();
    return examSets.find((set) => set.id === id);
};

export const getExam = async (setId, examId) => {
    const set = await getExamSet(setId);
    if (!set) return null;
    return set.exams.find((exam) => exam.id === examId);
};

export const getTotalQuestions = (exam) => {
    if (!exam || !exam.sections) return 0;
    return exam.sections.reduce((total, section) => total + section.questions.length, 0);
};
