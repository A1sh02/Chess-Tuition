document.addEventListener("DOMContentLoaded", () => 
    // Smooth Scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    })
)
    // Back to Top Button functionality
    const backToTopButton = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Animated Text Typing Effect in Hero Section
    const heroText = document.getElementById("heroText");
    const textArray = ["Unlock the World of Chess", "Unleash your Maximum Potential", "For All Skill Levels"];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < textArray[textIndex].length) {
            heroText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 150);
        } else {
            setTimeout(deleteText, 2000);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            heroText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, 100);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeText, 1000);
        }
    }

    typeText();

    // FAQ Toggle functionality
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const questionButton = item.querySelector(".faq-question");
        questionButton.addEventListener("click", () => {
            item.classList.toggle("open");
            const answer = questionButton.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });

    // Form Validation for Contact Section
            sendForm(serviceID, templateID, this)
            .then(() => {
                feedback.textContent = "Your message has been sent successfully!";
                feedback.style.color = "green";
                contactForm.reset(); // Clear the form
            })
            .catch((error) => {
                feedback.textContent = "Failed to send your message. Please try again.";
                feedback.style.color = "red";
                console.error("EmailJS Error:", error);
            });
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (validateEmail(email) && message.trim() !== "") {
            feedback.textContent = "Thank you! Your message has been sent.";
            feedback.style.color = "green";
            contactForm.reset();
        } else {
            feedback.textContent = "Please enter a valid email and message.";
            feedback.style.color = "red";
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    function redirectToWhatsApp(event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Get the input values
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
    
        // Construct the WhatsApp pre-filled message URL
        const phoneNumber = "0139673688"; // Replace with your WhatsApp number (include country code, e.g., 1234567890)
        const whatsappURL = `https://wa.me/${"0139673688"}?text=Hello!%0A%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
    
        // Redirect to WhatsApp
        window.open(whatsappURL, "_blank");
    }
    
    function redirectToWhatsApp(event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Get the input values
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
    
        // Validate form fields
        if (!email || !message) {
            showModal("Please fill out all the fields before sending.");
            return;
        }
    
        try {
            // Construct the WhatsApp pre-filled message URL
            const phoneNumber = "+60139673688"; // Replace with your WhatsApp number
            const whatsappURL = `https://wa.me/${phoneNumber}?text=Hello!%0A%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
    
            // Open WhatsApp in a new tab
            window.open(whatsappURL, "_blank");
    
            // Show success feedback
            showModal("Your message has been sent successfully!");
        } catch (error) {
            // Show error feedback
            showModal("An error occurred while sending your message. Please try again.");
        }
    }
    
