console.log("App Started: UI Integrated");
 
function displayResult(message) {
    document.getElementById('result').innerText = message;
}

function checkOddOrEven() {
    let num = parseInt(document.getElementById('numberInput').value);
    if (isNaN(num)) {
        displayResult("Please enter a valid number!");
        return;
    }
    if (num % 2 === 0) {
        displayResult(num + " is Even");
    } else {
        displayResult(num + " is Odd");
    }
}
e
function checkPrime() {
    let num = parseInt(document.getElementById('numberInput').value);
    if (isNaN(num)) {
        displayResult("Please enter a valid number!");
        return;
    }
    if (num <= 1) {
        displayResult(num + " is not a Prime Number");
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            displayResult(num + " is not a Prime Number");
            return;
        }
    }
    displayResult(num + " is a Prime Number");
}

function checkPalindrome() {
    let str = document.getElementById('stringInput').value;
    if (!str) {
        displayResult("Please enter a valid string!");
        return;
    }
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i].toLowerCase() !== str[len - 1 - i].toLowerCase()) {
            displayResult(str + " is not a Palindrome");
            return;
        }
    }
    displayResult(str + " is a Palindrome");
}

function zoomIn(container) {
  
    const containers = document.querySelectorAll('.container');
    containers.forEach(c => {
        c.classList.remove('zoomed');
    });
    
    container.classList.add('zoomed');
   
    document.querySelector('.back-button').style.display = 'block';
}

function resetZoom() {
  
    const containers = document.querySelectorAll('.container');
    containers.forEach(c => {
        c.classList.remove('zoomed');
    });
   
    document.querySelector('.back-button').style.display = 'none';
}

function filterGallery() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const gallery = document.getElementById('gallery');
    const containers = gallery.getElementsByClassName('container');

    for (let i = 0; i < containers.length; i++) {
        const title = containers[i].querySelector('h2').textContent;
        if (title.toLowerCase().includes(filter)) {
            containers[i].style.display = "";
        } else {
            containers[i].style.display = "none";
        }
    }
}

function showDetails(imageTitle, description) {
    alert(`${imageTitle}\n\n${description}`);
}
const map = L.map('map').setView([14.5995, 120.9842], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

locations.forEach(location => {
    L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(location.name)
        .openPopup();
});