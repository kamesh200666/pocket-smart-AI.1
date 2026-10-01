/* =====================================================
   POCKETSMART AI
   LOGIN + REGISTER + LOGOUT
===================================================== */


/* =========================
   GET ELEMENTS
========================= */

const authModal =
    document.getElementById("authModal");

const plannerModal =
    document.getElementById("plannerModal");

const loginBtn =
    document.getElementById("loginBtn");

const getStartedBtn =
    document.getElementById("getStartedBtn");

const startPlanningBtn =
    document.getElementById("startPlanningBtn");

const accountBtn =
    document.getElementById("accountBtn");

const logoutBtn =
    document.getElementById("logoutBtn");

const welcomeUser =
    document.getElementById("welcomeUser");

const closeAuth =
    document.getElementById("closeAuth");

const closePlanner =
    document.getElementById("closePlanner");

const loginForm =
    document.getElementById("loginForm");

const registerForm =
    document.getElementById("registerForm");

const showRegister =
    document.getElementById("showRegister");

const showLogin =
    document.getElementById("showLogin");

const loginMessage =
    document.getElementById("loginMessage");

const registerMessage =
    document.getElementById("registerMessage");

const authTitle =
    document.getElementById("authTitle");

const authSubtitle =
    document.getElementById("authSubtitle");


/* =====================================================
   LOCAL STORAGE
===================================================== */

function getUsers() {

    const data =
        localStorage.getItem("pocketsmart_users");

    if (data) {

        return JSON.parse(data);

    }

    return [];
}


function saveUsers(users) {

    localStorage.setItem(
        "pocketsmart_users",
        JSON.stringify(users)
    );
}


function getLoggedUser() {

    const data =
        localStorage.getItem(
            "pocketsmart_logged_user"
        );

    if (data) {

        return JSON.parse(data);

    }

    return null;
}


function saveLoggedUser(user) {

    localStorage.setItem(
        "pocketsmart_logged_user",
        JSON.stringify(user)
    );
}


function removeLoggedUser() {

    localStorage.removeItem(
        "pocketsmart_logged_user"
    );
}


/* =====================================================
   OPEN LOGIN
===================================================== */

function openLogin() {

    authModal.classList.add("show");

    loginForm.classList.remove("hidden");

    registerForm.classList.add("hidden");

    authTitle.textContent =
        "Welcome Back";

    authSubtitle.textContent =
        "Login to continue to PocketSmart AI";

    clearMessages();
}


/* =====================================================
   OPEN REGISTER
===================================================== */

function openRegister() {

    authModal.classList.add("show");

    loginForm.classList.add("hidden");

    registerForm.classList.remove("hidden");

    authTitle.textContent =
        "Create Account";

    authSubtitle.textContent =
        "Register to start using PocketSmart AI";

    clearMessages();
}


/* =====================================================
   CLOSE AUTH
===================================================== */

function closeAuthModal() {

    authModal.classList.remove("show");

    loginForm.reset();

    registerForm.reset();

    clearMessages();
}


/* =====================================================
   CLEAR MESSAGES
===================================================== */

function clearMessages() {

    loginMessage.textContent = "";

    registerMessage.textContent = "";

    loginMessage.className = "message";

    registerMessage.className = "message";
}


/* =====================================================
   LOGIN
===================================================== */

loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const email =
            document
                .getElementById("loginEmail")
                .value
                .trim()
                .toLowerCase();


        const password =
            document
                .getElementById("loginPassword")
                .value;


        const users = getUsers();


        const user =
            users.find(function(item) {

                return (
                    item.email === email &&
                    item.password === password
                );

            });


        /* USER NOT FOUND */

        if (!user) {

            loginMessage.textContent =
                "Invalid email or password.";

            loginMessage.className =
                "message error";

            return;

        }


        /* LOGIN SUCCESS */

        saveLoggedUser({

            name: user.name,

            email: user.email

        });


        loginMessage.textContent =
            "Login successful!";

        loginMessage.className =
            "message success";


        updateNavbar();


        setTimeout(
            function() {

                closeAuthModal();

                alert(
                    "Welcome back, " +
                    user.name +
                    "!"
                );

            },
            500
        );

    }
);


/* =====================================================
   REGISTER
===================================================== */

registerForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document
                .getElementById("registerName")
                .value
                .trim();


        const email =
            document
                .getElementById("registerEmail")
                .value
                .trim()
                .toLowerCase();


        const password =
            document
                .getElementById("registerPassword")
                .value;


        const confirmPassword =
            document
                .getElementById("confirmPassword")
                .value;


        /* NAME CHECK */

        if (name.length < 2) {

            showRegisterError(
                "Please enter your name."
            );

            return;

        }


        /* PASSWORD CHECK */

        if (password.length < 6) {

            showRegisterError(
                "Password must contain at least 6 characters."
            );

            return;

        }


        /* CONFIRM PASSWORD */

        if (password !== confirmPassword) {

            showRegisterError(
                "Passwords do not match."
            );

            return;

        }


        /* GET OLD USERS */

        const users = getUsers();


        /* CHECK EXISTING EMAIL */

        const existingUser =
            users.find(function(user) {

                return user.email === email;

            });


        if (existingUser) {

            showRegisterError(
                "Email already registered. Please login."
            );

            return;

        }


        /* CREATE USER */

        const newUser = {

            id: Date.now(),

            name: name,

            email: email,

            password: password

        };


        /* SAVE USER */

        users.push(newUser);

        saveUsers(users);


        /* SUCCESS */

        registerMessage.textContent =
            "Registration successful!";

        registerMessage.className =
            "message success";


        /*
           After registration,
           automatically open login.
        */

        setTimeout(
            function() {

                openLogin();

                document
                    .getElementById("loginEmail")
                    .value = email;

                loginMessage.textContent =
                    "Account created. Please login.";

                loginMessage.className =
                    "message success";

            },
            800
        );

    }
);


/* =====================================================
   REGISTER ERROR
===================================================== */

function showRegisterError(message) {

    registerMessage.textContent =
        message;

    registerMessage.className =
        "message error";
}


/* =====================================================
   SWITCH TO REGISTER
===================================================== */

showRegister.addEventListener(
    "click",
    function() {

        openRegister();

    }
);


/* =====================================================
   SWITCH TO LOGIN
===================================================== */

showLogin.addEventListener(
    "click",
    function() {

        openLogin();

    }
);


/* =====================================================
   LOGIN BUTTON
===================================================== */

loginBtn.addEventListener(
    "click",
    function() {

        openLogin();

    }
);


/* =====================================================
   ACCOUNT BUTTON
===================================================== */

accountBtn.addEventListener(
    "click",
    function() {

        openLogin();

    }
);


/* =====================================================
   GET STARTED
===================================================== */

getStartedBtn.addEventListener(
    "click",
    function() {

        document
            .getElementById("planners")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =====================================================
   START PLANNING
===================================================== */

startPlanningBtn.addEventListener(
    "click",
    function() {

        const user = getLoggedUser();


        if (!user) {

            openLogin();

            loginMessage.textContent =
                "Please login or register first.";

            loginMessage.className =
                "message error";

            return;

        }


        openPlanner(
            "Start Planning",
            "Choose a planner to begin.",
            "◇"
        );

    }
);


/* =====================================================
   PLANNER DATA
===================================================== */

const plannerData = {

    home: {

        title: "Home Interior",

        icon: "🏠",

        text:
            "Allocate your budget across furniture, lighting, storage and décor."

    },


    party: {

        title: "Party Planner",

        icon: "🎉",

        text:
            "Plan catering, decoration, entertainment and venue requirements."

    },


    jewelry: {

        title: "Jewelry Match",

        icon: "💎",

        text:
            "Get jewelry suggestions based on occasion, style and budget."

    }

};


/* =====================================================
   OPEN PLANNER
===================================================== */

function openPlanner(
    title,
    text,
    icon
) {

    document
        .getElementById("plannerTitle")
        .textContent = title;


    document
        .getElementById("plannerText")
        .textContent = text;


    document
        .getElementById("plannerIcon")
        .textContent = icon;


    plannerModal.classList.add("show");

}


/* =====================================================
   EXPLORE BUTTONS
===================================================== */

document
    .querySelectorAll(".explore-btn")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const user = getLoggedUser();


                if (!user) {

                    openLogin();

                    loginMessage.textContent =
                        "Please login to use the planner.";

                    loginMessage.className =
                        "message error";

                    return;

                }


                const planner =
                    plannerData[
                        button.dataset.planner
                    ];


                openPlanner(
                    planner.title,
                    planner.text,
                    planner.icon
                );

            }
        );

    });


/* =====================================================
   PLANNER MODAL OPTIONS
===================================================== */

document
    .querySelectorAll(".modal-option")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const planner =
                    plannerData[
                        button.dataset.plannerModal
                    ];


                openPlanner(
                    planner.title,
                    planner.text,
                    planner.icon
                );

            }
        );

    });


/* =====================================================
   LOGOUT
===================================================== */

logoutBtn.addEventListener(
    "click",
    function() {

        removeLoggedUser();

        updateNavbar();

        alert(
            "You have been logged out successfully."
        );

    }
);


/* =====================================================
   UPDATE NAVBAR
===================================================== */

function updateNavbar() {

    const user = getLoggedUser();


    if (user) {

        loginBtn.classList.add("hidden");

        getStartedBtn.classList.add("hidden");

        welcomeUser.classList.remove("hidden");

        logoutBtn.classList.remove("hidden");

        welcomeUser.textContent =
            "Hi, " + user.name;

    }

    else {

        loginBtn.classList.remove("hidden");

        getStartedBtn.classList.remove("hidden");

        welcomeUser.classList.add("hidden");

        logoutBtn.classList.add("hidden");

    }

}


/* =====================================================
   CLOSE BUTTONS
===================================================== */

closeAuth.addEventListener(
    "click",
    closeAuthModal
);


closePlanner.addEventListener(
    "click",
    function() {

        plannerModal.classList.remove("show");

    }
);


/* =====================================================
   CLICK OUTSIDE MODAL
===================================================== */

authModal.addEventListener(
    "click",
    function(event) {

        if (event.target === authModal) {

            closeAuthModal();

        }

    }
);


plannerModal.addEventListener(
    "click",
    function(event) {

        if (event.target === plannerModal) {

            plannerModal.classList.remove("show");

        }

    }
);


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            authModal.classList.remove("show");

            plannerModal.classList.remove("show");

        }

    }
);


/* =====================================================
   INITIAL LOAD
===================================================== */

updateNavbar();
