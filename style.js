document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll(".bottom-nav a");

    links.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }

    });

});
document.addEventListener("DOMContentLoaded", function () {

    // Current page name
    const currentPage = window.location.pathname.split("/").pop();

    // Bottom nav links
    const navLinks = document.querySelectorAll(".bottom-nav a");

    navLinks.forEach(link => {

        // Remove old active class
        link.classList.remove("active");

        // Get href
        const page = link.getAttribute("href");

        // Add active class to current page
        if (page === currentPage) {
            link.classList.add("active");
        }

    });

});