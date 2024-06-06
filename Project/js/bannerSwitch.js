//IMG SWITCH
document.addEventListener('DOMContentLoaded', (f) => {
    const bannerImage = document.querySelectorAll('.bannerImg')

    const otherImage = document.querySelector('.large')

    bannerImage.forEach(img => {
        img.addEventListener('click', (event) => {
            largeImage.src = event.target.src
        })
    })

})
















