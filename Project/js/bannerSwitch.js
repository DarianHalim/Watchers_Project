
let bannerImages = document.querySelectorAll('.bannerImg');
let bannerButtons = document.querySelectorAll('.bannerButton');

// Hide the banners in beginning
bannerImages.forEach((img, index) => {
    if (index !== 0) {
        
        img.style.display = 'none';
    }

});



// Loop banner each time event listener active
bannerButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      //Hide the image
        bannerImages.forEach(img => img.style.display = 'none');
        //show the image that is selected
        bannerImages[index].style.display = 'block';
    });
});
