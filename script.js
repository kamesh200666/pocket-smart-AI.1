// REGISTER
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;

        const message = document.getElementById("registerMessage");

        // Check existing user
        const existingUser = localStorage.getItem("pocketsmart_user");

        if (existingUser) {
            const user = JSON.parse(existingUser);

            if (user.email === email) {
                message.textContent = "Email already registered. Please login.";
                message.style.color = "red";
                return;
            }
        }

        // Save user
        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("pocketsmart_user", JSON.stringify(user));

        message.textContent = "Account created successfully!";
        message.style.color = "green";

        // Go to login
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    });
}


// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document
            .getElementById("loginEmail")
            .value
            .trim()
            .toLowerCase();

        const password = document.getElementById("loginPassword").value;

        const message = document.getElementById("loginMessage");

        // Get registered user
        const savedUser = localStorage.getItem("pocketsmart_user");

        if (!savedUser) {
            message.textContent = "No account found. Please register first.";
            message.style.color = "red";
            return;
        }

        const user = JSON.parse(savedUser);

        // Check login
        if (user.email === email && user.password === password) {

            localStorage.setItem("pocketsmart_logged_in", "true");

            message.textContent = "Login successful!";
            message.style.color = "green";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 800);

        } else {
            message.textContent = "Invalid email or password.";
            message.style.color = "red";
        }
    });
}
