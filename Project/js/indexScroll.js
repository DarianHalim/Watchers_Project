// Movie Row
let pointerFrom = 0;

let elementFrom = 0;

const scrollable = document.querySelector('.movieRow');

const onDrag = (event) => {
    if (event.pointerType == 'mouse') {
        scrollable.scrollLeft = elementFrom - event.clientX + pointerFrom;
    }
};

scrollable.addEventListener('pointerdown', (event) => {
    if (event.pointerType == 'mouse') {
        pointerDown = true;
        pointerFrom = event.clientX;

        elementFrom = scrollable.scrollLeft;
        document.addEventListener('pointermove', onDrag);
    }
});


document.addEventListener('pointerup', (event) => {

    if (event.pointerType == 'mouse') {
        document.removeEventListener('pointermove', onDrag);
    }
});

// Shows Row

let pointerShow = 0;
let elementShow = 0;

const scrollableShow = document.querySelector('.showRow');

const onDragShow = (event) => {
    if (event.pointerType == 'mouse') {
        scrollableShow.scrollLeft = elementShow - event.clientX + pointerShow;
    }
};

scrollableShow.addEventListener('pointerdown', (event) => {
    if (event.pointerType == 'mouse') {
        pointerDown = true;
        pointerShow = event.clientX;
        elementShow = scrollableShow.scrollLeft;
        document.addEventListener('pointermove', onDragShow);
    }
});

document.addEventListener('pointerup', (event) => {

    if (event.pointerType == 'mouse') {
        document.removeEventListener('pointermove', onDragShow);
    }
});


// Latest Addition
let pointerLatest = 0;

let elementLatest = 0;

const scrollableLatest = document.querySelector('.newRow');

const onDragLatest = (event) => {
    if (event.pointerType == 'mouse') {
        
        scrollableLatest.scrollLeft = elementLatest - event.clientX + pointerLatest;
    }
};

scrollableLatest.addEventListener('pointerdown', (event) => {
    if (event.pointerType == 'mouse') {
        pointerDown = true;

        pointerLatest = event.clientX;

        elementLatest = scrollableLatest.scrollLeft;
        document.addEventListener('pointermove', onDragLatest);
    }
});


document.addEventListener('pointerup', (event) => {
    if (event.pointerType == 'mouse') {

        document.removeEventListener('pointermove', onDragLatest);
    }
});
