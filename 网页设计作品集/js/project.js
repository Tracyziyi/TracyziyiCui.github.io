document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.project-nav a');
    const mapBlocks = document.querySelectorAll('.map-block');
    const contentBlocks = document.querySelectorAll('.content-block');

    // Initial state: only the first one is shown
    mapBlocks[0].style.display = 'block';
    contentBlocks[0].style.display = 'block';

    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // delete all categories of active 
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Hide all blocks
            mapBlocks.forEach(block => block.style.display = 'none');
            contentBlocks.forEach(block => block.style.display = 'none');

            // display the corresponding block
            mapBlocks[index].style.display = 'block';
            contentBlocks[index].style.display = 'block';
        });
    });
}); 