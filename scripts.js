<script>
// Letter-by-letter animation for the "Welcome" message
const animatedWelcome = document.getElementById("animated-welcome");
const welcomeText = "Welcome to Njood's ,Rasel ,Nourah Portfolio>";

let index = 0;

function typeLetter() {
    if (index < welcomeText.length) {
        animatedWelcome.textContent += welcomeText[index];
        index++;
        setTimeout(typeLetter, 100); // Adjust speed for letter typing
    }
}

// Run animation only for the first visit
if (!sessionStorage.getItem("welcomeShown")) {
    sessionStorage.setItem("welcomeShown", "true");
    typeLetter();
} else {
    animatedWelcome.textContent = welcomeText; // Show full text if already visited
}

// Contact form handler
document.getElementById("contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for reaching out, Njood ,Rasel ,Nourah will get back to you soon!");
    document.getElementById("contact-form").reset();
});
</script>
