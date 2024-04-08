var cityName = "Karachi";
describe_city(cityName);
cityName = "Lahore";
describe_city(cityName);
cityName = "Peshwar";
describe_city(cityName);
cityName = "Quetta";
describe_city(cityName);
cityName = "London";
describe_city(cityName);
function describe_city(city, country) {
    if (country === void 0) { country = " Pakistan"; }
    return console.log("\n " + city + " is in " + country + ".");
}
