/* =========================================
   GET HTML ELEMENTS
========================================= */

const modalOverlay =
    document.getElementById("modalOverlay");

const closeModal =
    document.getElementById("closeModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalIcon =
    document.getElementById("modalIcon");


/* =========================================
   PLANNER DATA
========================================= */

const plannerData = {

    home: {

        title: "Home Interior",

        icon: "🏠",

        text:
            "Plan your home interior by dividing your available budget across furniture, lighting, storage, and décor."

    },


    party: {

        title: "Party Planner",

        icon: "🎉",

        text:
            "Create a party budget for catering, decoration, entertainment, and venue requirements."

    },


    jewelry: {

        title: "Jewelry Match",

        icon: "💎",

        text:
            "Get jewelry suggestions based on your occasion, style, budget, and optional outfit image analysis."

    }

};


/* =========================================
   OPEN MODAL
========================================= */

function openModal(
    title = "Start Planning",

    text =
        "Choose one of the planners below to begin.",

    icon = "◇"
) {

    modalTitle.textContent = title;

    modalText.textContent = text;

    modalIcon.textContent = icon;

    modalOverlay.classList.add("show");
}


/* =========================================
   CLOSE MODAL
========================================= */

function closeTheModal() {

    modalOverlay.classList.remove("show");
}


/* =========================================
   GET STARTED
========================================= */

document
    .getElementById("getStartedBtn")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById("planners")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================
   START PLANNING
========================================= */

document
    .getElementById("startPlanningBtn")
    .addEventListener(
        "click",
        function () {

            openModal();

        }
    );


/* =========================================
   LOGIN
========================================= */

document
    .getElementById("loginBtn")
    .addEventListener(
        "click",
        function () {

            openModal(

                "Login",

                "This frontend demo is ready for a login page or backend authentication to be connected.",

                "◇"

            );

        }
    );


/* =========================================
   ACCOUNT BUTTON
========================================= */

document
    .getElementById("accountBtn")
    .addEventListener(
        "click",
        function () {

            openModal(

                "Welcome Back",

                "Connect your authentication system here to allow existing users to log in.",

                "◇"

            );

        }
    );


/* =========================================
   EXPLORE BUTTONS
========================================= */

document
    .querySelectorAll(".explore-btn")
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const planner =
                        plannerData[
                            button.dataset.planner
                        ];

                    openModal(

                        planner.title,

                        planner.text,

                        planner.icon

                    );

                }
            );

        }
    );


/* =========================================
   MODAL PLANNER BUTTONS
========================================= */

document
    .querySelectorAll(".modal-option")
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const planner =
                        plannerData[
                            button.dataset.modalPlanner
                        ];

                    openModal(

                        planner.title,

                        planner.text,

                        planner.icon

                    );

                }
            );

        }
    );


/* =========================================
   CLOSE BUTTON
========================================= */

closeModal.addEventListener(
    "click",
    closeTheModal
);


/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

modalOverlay.addEventListener(
    "click",
    function (event) {

        if (
            event.target === modalOverlay
        ) {

            closeTheModal();

        }

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeTheModal();

        }

    }
);
