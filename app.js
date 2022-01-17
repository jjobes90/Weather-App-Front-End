

// initialize weather object
const weather = new Weather('San Diego');

// initialize paint object
const ui = new UI();

// Get weather DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    weather.changeLocation(city);

    // Get and display weather
    getWeather();

    document.getElementById('city').value = '';

    // Clear and close modal
    const myModal = document.querySelector('#locModal');
    const modal = bootstrap.Modal.getInstance(myModal);
    modal.hide();
});

function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(error => {
        ui.showAlert('Please choose a correct city name or zip code', 'alert alert-danger');
        document.getElementById('city').value = '';
    });
}