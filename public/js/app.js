console.log('Client side javascript file is loaded!');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     });
// });

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const msg1 = document.querySelector('#message-1');
const msg2 = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault();
    
    const location = searchElement.value;

    msg1.textContent = 'Loading...';
    msg2.textContent = '';
    
    fetch("/weather?address=" + location).then(response => {
        response.json().then(data => {
            if (data.error) {
                // console.log(data.error);
                msg1.textContent = data.error;
            }
            else {
                // console.log(data.location);
                // console.log(data.forecast);
                msg1.textContent = data.location;
                msg2.textContent = data.forecast;
            }
        });
    });
});