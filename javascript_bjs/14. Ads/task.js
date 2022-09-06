const rotatorArray = Array.from(document.querySelectorAll('.rotator__case'));

let currentRotator = 0;

setInterval(adChange, 1000);

function getDataSet() {
    let dataSet = rotatorArray[currentRotator].dataset;

    rotatorArray[currentRotator].style.color = dataSet.color;
    rotatorArray[currentRotator].style.speed = dataSet.speed;
}

function adChange() {
    rotatorArray[currentRotator].classList.remove('rotator__case_active');

    currentRotator++;

    if (currentRotator >= rotatorArray.length) {
        currentRotator = 0;
        rotatorArray[currentRotator].classList.add('rotator__case_active');
        getDataSet();
    } else {
        rotatorArray[currentRotator].classList.add('rotator__case_active');
        getDataSet();   
    }
}


