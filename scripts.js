document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.work-item');

    items.forEach(item => {
        const videoUrl = item.getAttribute('data-video-url');

        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1)';
            item.style.transition = 'transform 0.5s ease-in-out';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });

        item.addEventListener('click', () => {
            if (videoUrl) {
                window.open(videoUrl, '_blank'); // Open the URL in a new tab
            }
        });
    });
});
