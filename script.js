document.addEventListener('DOMContentLoaded', function() {
    const catImage = document.getElementById('cat-image');
    const catSound = document.getElementById('cat-sound');
    const clickCounter = document.getElementById('click-counter');
    let clickCount = 0;
    let isOpen = false;

    function playSound() {
        // Create a new Audio instance for each play
        const newSound = new Audio('catsound.mp3');
        newSound.play();
    }

    catImage.addEventListener('mousedown', function() {
        // Play sound immediately on every mousedown
        playSound();

        if (!isOpen) {
            catImage.src = 'cat-open.jpg';
            isOpen = true;
        }
        clickCount++;
        clickCounter.textContent = ` ${clickCount}`;
        catImage.style.transform = 'scale(1.1)';
    });

    catImage.addEventListener('mouseup', function() {
        catImage.src = 'cat-closed.jpg';
        isOpen = false;
        catImage.style.transform = 'scale(1)';
    });

    catImage.addEventListener('mouseleave', function() {
        catImage.src = 'cat-closed.jpg';
        isOpen = false;
        catImage.style.transform = 'scale(1)';
    });
});
