let cityName: string="Karachi";
let countryName: string="Pakistan";

city_country(cityName,countryName);
cityName="Lahore";
city_country(cityName,countryName);
cityName="Peshwar";
city_country(cityName,countryName);

cityName="Quetta";
city_country(cityName,countryName);

cityName="London";
countryName="UK"
city_country(cityName,countryName);

cityName="Qabul";
countryName="Afghanistan"
city_country(cityName,countryName);

function city_country (city : string,  country : string)  {

    return console.log("\n \""+city+ ", "+country+"\"");
}