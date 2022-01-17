class UI {
    constructor() {
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.feelsLike = document.getElementById('w-feels-like')
        this.wind = document.getElementById('w-wind')
        this.uv = document.getElementById('w-uv')
        this.string = document.getElementById('w-string')
        this.updated = document.getElementById('last-updated')
        this.vis = document.getElementById('w-vis')
    }

    paint(weather) {
        this.location.textContent = `${weather.location.name}, ${weather.location.region}`;
        this.string.textContent = `${weather.current.temp_f} F (${weather.current.temp_c} C)`;
        this.desc.textContent = weather.current.condition.text;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
        this.feelsLike.textContent = `Feels like: ${weather.current.feelslike_f} F (${weather.current.feelslike_c} C)`;
        this.wind.textContent = `Wind from the ${weather.current.wind_dir} at ${weather.current.wind_mph} MPH gusting at ${weather.current.gust_mph} MPH`;
        this.uv.textContent = `UV Index: ${weather.current.uv} / 11`;
        this.updated.textContent = `Last Updated: ${weather.current.last_updated}`
        this.vis.textContent = `Visibility: ${weather.current.vis_miles} miles`

    }

    // show alert message for user not found
    showAlert(message, className) {
        // cleart alert
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.error');
        // Get search box
        const search = document.querySelector('#search');
        // Insert alert
        container.insertBefore(div, search);

        // Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }
}