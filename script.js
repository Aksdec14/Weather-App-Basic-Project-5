const citiesWithTemperatures = [
    { city: "New Delhi", temperature: 26.3 },
    { city: "Mumbai", temperature: 30.5 },
    { city: "Chennai", temperature: 31.1 },
    { city: "Kolkata", temperature: 28.7 },
    { city: "Bengaluru", temperature: 22.9 },
    { city: "Hyderabad", temperature: 29.2 },
    { city: "Ahmedabad", temperature: 27.5 },
    { city: "Jaipur", temperature: 25.7 },
    { city: "Pune", temperature: 27.9 },
    { city: "Lucknow", temperature: 24.8 },
    { city: "Thiruvananthapuram", temperature: 28.2 },
    { city: "Chandigarh", temperature: 23.5 },
    { city: "Bhopal", temperature: 26.1 },
    { city: "Patna", temperature: 25.3 },
    { city: "Ranchi", temperature: 24.9 },
    { city: "Raipur", temperature: 27.8 },
    { city: "Shimla", temperature: 18.7 },
    { city: "Goa", temperature: 29.0 },
    { city: "Guwahati", temperature: 25.4 },
    { city: "Agra", temperature: 27.2 },
    { city: "Varanasi", temperature: 26.5 },
    { city: "Surat", temperature: 29.3 },
    { city: "Kanpur", temperature: 28.0 },
    { city: "Madurai", temperature: 30.1 },
    { city: "Coimbatore", temperature: 29.5 },
    { city: "Mysuru", temperature: 25.8 },
    { city: "Vadodara", temperature: 27.6 },
    { city: "Jodhpur", temperature: 28.9 },
    { city: "Amritsar", temperature: 23.7 },
    { city: "Dehradun", temperature: 22.4 },
];

document.getElementById('btn').onclick = function () {
    city = document.getElementById('text').value
    for(i =0;i<citiesWithTemperatures.length;i++){
        if(city == citiesWithTemperatures[i].city){
            document.getElementById('h1').textContent = citiesWithTemperatures[i].temperature
            document.getElementById('h2').textContent = citiesWithTemperatures[i].city
        }
    }
}