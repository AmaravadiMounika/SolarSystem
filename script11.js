function calculateWeight() {
    const mass = document.getElementById('mass').value;
    const planet = document.getElementById('planet-names').value;
    const requireElement = document.getElementById('require');
    const resultElement = document.getElementById('result');
    const outputElement = document.getElementById('output');
    const planetImage = document.getElementById('image');
    
    if (mass <= 0) {
        alert("Please enter valid mass");
        requireElement.style.display = 'none';
        resultElement.style.display='none';
    }
    const gravity = {
        mercury: 3.61,
        venus: 8.83,
        earth: 9.81,
        mars: 3.75,
        jupiter: 26.0,
        saturn: 11.2,
        uranus: 10.5,
        neptune: 13.3,
        pluto: 0.61
    };
    const planet_images = {
        mercury: 'mercury.png',
        venus: 'venus.png',
        earth: 'earth.png',
        mars: 'mars.png',
        jupiter: 'jupiter.png',
        saturn: 'saturn.png',
        uranus: 'uranus.png',
        neptune: 'neptune.png',
        pluto: 'pluto.png',

    };
    const weight = mass * gravity[planet];
    requireElement.style.display = 'none';


    if (planet != '') {
        outputElement.innerHTML = `The weight on <span style='color:white'>${planet.toUpperCase()}</span> is <span id='res_weight' style='color:white'>${weight.toFixed(2)} N</span>`;
        outputElement.style.backgroundColor = 'rgba(159, 158, 158, 0.374)';

        planetImage.src = planet_images[planet];
        planetImage.style.display = 'block';

        const span_weight = document.getElementById('res_weight');
        span_weight.style.fontSize = '26px';
    }
    else{
    outputElement.textContent = '🌞🌟Please select planet :)';
    outputElement.style.color = 'white';
    planetImage.alt = '';
    }    
    

}