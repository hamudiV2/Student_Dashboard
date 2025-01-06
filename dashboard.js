// Initialize Supabase
const supabaseUrl = 'https://vbowerdxrjpapnyepsvc.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZib3dlcmR4cmpwYXBueWVwc3ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxODA5NzksImV4cCI6MjA1MTc1Njk3OX0.n79mdj_s-fuC_XIJCll03Lne6IJls32i32R012lQY18'; // Replace with your public (anon) key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Handle Logout
document.getElementById('logoutButton').addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        alert('Error logging out: ' + error.message);
    } else {
        alert('Logged out successfully!');
        window.location.href = 'index.html';
    }
});
