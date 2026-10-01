// ========================================
// POCKETSMART AI
// REGISTER + LOGIN
// ========================================


// ========================================
// REGISTER
// ========================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get values
        const name = document
            .getElementById("registerName")
            .value
            .trim();

        const email = document
            .getElementById("registerEmail")
            .value
            .trim()
            .toLowerCase();

        const password = document
            .getElementById("registerPassword")
            .value;

        const message = document.getElementById("registerMessage");


        // Get existing users
        let users = JSON.parse(
            localStorage.getItem("pocketsmart_users")
        ) || [];


        // Check email already exists
        const existingUser = users.find(function (user) {

            return user.email === email;

        });


        if (existingUser) {

            message.textContent =
                "Email already registered. Please login.";

            message.className = "error-message";

            return;
        }


        // Create new user
        const newUser = {

            name: name,
            email: email,
            password: password

        };


        // Add user
        users.push(newUser);


        // Save users
        localStorage.setItem(
            "pocketsmart_users",
            JSON.stringify(users)
        );


        // Success message
        message.textContent =
            "Account created successfully!";

        message.className = "success-message";


        // Go to login page
        setTimeout(function () {

            window.location.href = "login.html";

        }, 1000);

    });
}



// ========================================
// LOGIN
// ========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get values
        const email = document
            .getElementById("loginEmail")
            .value
            .trim()
            .toLowerCase();

        const password = document
            .getElementById("loginPassword")
            .value;

        const message =
            document.getElementById("loginMessage");


        // Get registered users
        const users = JSON.parse(
            localStorage.getItem("pocketsmart_users")
        ) || [];


        // Find user
        const user = users.find(function (user) {

            return (
                user.email === email &&
                user.password === password
            );

        });


        // User not found
        if (!user) {

            message.textContent =
                "Invalid email or password.";

            message.className = "error-message";

            return;
        }


        // Login successful
        localStorage.setItem(
            "pocketsmart_logged_in",
            "true"
        );


        localStorage.setItem(
            "pocketsmart_current_user",
            JSON.stringify(user)
        );


        message.textContent =
            "Login successful!";

        message.className = "success-message";


        // Go to home page
        setTimeout(function () {

            window.location.href = "index.html";

        }, 1000);

    });
}
