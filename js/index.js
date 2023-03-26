import { getWeatherData } from "./api.js"
import { createContent } from "./appContent.js";
import { createHeader } from "./appHeader.js";

const app = async ()=>{
    const weather = await getWeatherData('washington')
    const header = createHeader(weather.name)
    const content = createContent(weather)
    document.body.append(header, content)
    console.log(weather);
}

app()