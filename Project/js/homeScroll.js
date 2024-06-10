// HomeScroll
let pointerHome = 0;
let elementHome = 0;

const scrollableHome = document.querySelector('.featuredRow');
const onDragHome = (event) => {
    if (pointerDown && event.pointerType === 'mouse') {
        scrollableHome.scrollLeft = elementHome - event.clientX + pointerHome;
    }
};
scrollableHome.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse') {
        pointerDown = true;
        pointerHome = event.clientX;
        elementHome = scrollableHome.scrollLeft;
        document.addEventListener('pointermove', onDragHome);
    }
});
document.addEventListener('pointerup', (event) => {
    if (event.pointerType === 'mouse') {
        pointerDown = false;
        document.removeEventListener('pointermove', onDragHome);
    }
});