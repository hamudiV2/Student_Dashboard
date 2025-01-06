// Initialize Supabase
const supabaseUrl = 'https://vbowerdxrjpapnyepsvc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZib3dlcmR4cmpwYXBueWVwc3ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxODA5NzksImV4cCI6MjA1MTc1Njk3OX0.n79mdj_s-fuC_XIJCll03Lne6IJls32i32R012lQY18';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Fetch and display student data
async function fetchStudentData() {
    const { data, error } = await supabase
        .from('students')
        .select('*');

    if (error) {
        console.error('Error fetching data: ', error);
    } else {
        console.log('Student Data: ', data);
        // Display data on the dashboard (you can customize this part)
    }
}

fetchStudentData();