document.addEventListener('DOMContentLoaded', () => {
    // 1. Find the button using the ID we set in HTML
    const btn = document.getElementById('darkModeBtn');

    // 2. Add a click event listener
    if (btn) {
        btn.addEventListener('click', () => {
            // 3. Toggle the class 'dark-mode' on the body element
            document.body.classList.toggle('dark-mode');
        });
    } else {
        console.error("Button not found! Check IDs in HTML.");
    }
});