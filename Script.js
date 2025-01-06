// Initialize Supabase
const supabaseUrl = 'https://vbowerdxrjpapnyepsvc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZib3dlcmR4cmpwYXBueWVwc3ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxODA5NzksImV4cCI6MjA1MTc1Njk3OX0.n79mdj_s-fuC_XIJCll03Lne6IJls32i32R012lQY18';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('signInForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const schoolId = document.getElementById('schoolId').value;

    // Save data to Supabase
    const { data, error } = await supabase
        .from('students')
        .insert([{ name, phone, school_id: schoolId }]);

    if (error) {
        console.error('Error saving data: ', error);
        alert('An error occurred. Please try again.');
    } else {
        alert('Sign-In Successful!');
        window.location.href = 'dashboard.html';
    }
});