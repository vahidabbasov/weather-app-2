import { getWeatherData } from "./api.js";
import { resetWeatherContent } from "./helper.js";
//55a3d0ca210644cf944965905e836315

export const handleWeatherByLocation =()=>{
    const options={
        enableHighAccuracy: true, 
        timeout: 5000, 
        maximumAge: 0
    }

    const success = async (pos) => {
        const crd = pos.coords;

        const response = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&lang=ru&apiKey=4ada1ed8a6694bbb816a6614162f9cb0`
        )

        const result = await response.json();
        
        resetWeatherContent(result.features[0].properties.city, weather);
    }

    const error = (err) => {
        console.log(err.code + ' ' + err.message);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
    }




