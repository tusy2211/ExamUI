/**
 * API layer to fetch exam data from the JSON file.
 * This helps reduce the initial bundle size by loading data on-demand.
 */

let cachedData = null;

async function fetchData() {
    if (cachedData) return cachedData;

    try {
        const response = await fetch('/exam-data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch exam data');
        }
        cachedData = await response.ok ? await response.json() : null;
        return cachedData;
    } catch (error) {
        console.error('Error loading exam data:', error);
        return { userProfile: { name: 'Học sinh', avatar: null }, examSets: [] };
    }
}

export const getUserProfile = async () => {
    const data = await fetchData();
    return data.userProfile;
};

export const getExamSets = async () => {
    const data = await fetchData();
    return data.examSets;
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
