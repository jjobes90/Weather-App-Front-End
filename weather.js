class Weather {
    // constructor(city) {
    //     this.apiKey = '0ad11325594749aeacb25232220601';
    //     this.city = city;
    // }

    // fetch weather from nutrition api
    async getNutrition() {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=no`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}