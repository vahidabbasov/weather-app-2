export const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3923034783d082a2e3ad41fa338dfc3f&units=metric`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
