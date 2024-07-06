function openImage(src) {
    document.querySelector('.scale img').src = src; 
    document.querySelector('.scale').style.display = 'flex'; 
}

function closeImage() {
    document.querySelector('.scale').style.display = 'none'; 
}


