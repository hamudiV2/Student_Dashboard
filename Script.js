// Initialize Supabase
const supabaseUrl = 'https://vbowerdxrjpapnyepsvc.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZib3dlcmR4cmpwYXBueWVwc3ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxODA5NzksImV4cCI6MjA1MTc1Njk3OX0.n79mdj_s-fuC_XIJCll03Lne6IJls32i32R012lQY18'; // Replace with your public (anon) key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// DOM Elements
const signupSection = document.getElementById('signupSection');
const loginSection = document.getElementById('loginSection');
const showLogin = document.getElementById('showLogin');
const showSignup = document.getElementById('showSignup');

// Toggle between Sign Up and Login forms
showLogin.addEventListener('click', () => {
    signupSection.style.display = 'none';
    loginSection.style.display = 'block';
});

showSignup.addEventListener('click', () => {
    loginSection.style.display = 'none';
    signupSection.style.display = 'block';
});

// Handle Sign Up
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const phone = document.getElementById('signupPhone').value;
    const schoolId = document.getElementById('signupSchoolId').value;

    // Sign up with Supabase
    const { user, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        alert('Error signing up: ' + error.message);
    } else {
        // Save additional user data to Supabase
        const { data, error: dbError } = await supabase
            .from('students')
            .insert([{ name, email, phone, school_id: schoolId, user_id: user.id }]);

        if (dbError) {
            alert('Error saving user data: ' + dbError.message);
        } else {
            alert('Sign Up Successful! Please login.');
            signupSection.style.display = 'none';
            loginSection.style.display = 'block';
        }
    }
});

// Handle Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Login with Supabase
    const { user, error } = await supabase.auth.signIn({
        email,
        password,
    });

    if (error) {
        alert('Error logging in: ' + error.message);
    } else {
        alert('Login Successful! Redirecting to dashboard...');
        window.location.href = 'dashboard.html';
    }
});
