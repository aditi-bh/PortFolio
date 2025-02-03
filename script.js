document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Example interactive functionality - Highlight section on scroll
    window.addEventListener("scroll", () => {
        let sections = document.querySelectorAll("section");
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && 
                scrollPosition < section.offsetTop + section.offsetHeight) {
                document.querySelectorAll("nav ul li a").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});
