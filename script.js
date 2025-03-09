let isOpen = false;

function toggleEnvelope() {
    const lid = document.querySelector('.lid');
    const letter = document.querySelector('.letter');

    if (isOpen) {
        lid.style.transform = 'rotateX(0deg)';
        letter.style.transform = 'translateY(100%)';
    } else {
        lid.style.transform = 'rotateX(180deg)';
        letter.style.transform = 'translateY(-30%)';
    }

    isOpen = !isOpen;
}