let cityName: string="Karachi";

describe_city(cityName);
cityName="Lahore";
describe_city(cityName);
cityName="Peshwar";
describe_city(cityName);

cityName="Quetta";
describe_city(cityName);

cityName="London";
describe_city(cityName);

function describe_city (city : string,  country : string=" Pakistan")  {

    return console.log("\n "+city+ " is in "+country+".");
}