class Storge {
    constructor() {
        this.city;
        this.defaultCity = 'San Diego';
    }

    getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        return {
            city: this.city
        }
    }

    setLocationData(city) {
        localStorage.setItem('city', city);
    }
}