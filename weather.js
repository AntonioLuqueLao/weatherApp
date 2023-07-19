const form=document.getElementById('weather-form');
const weatherInput=document.getElementById('weather-input');
const temperatureDisplay=document.getElementById('temperature');
const Everything=document.getElementById('main-display');
const temperaturaYOtrasCosas=document.getElementById('temperature-and-extras');
const humedad=document.getElementById('humedad');
const condicion=document.getElementById('condicion');
const viento=document.getElementById('viento');
const localizacion=document.getElementById('location-display');
const app=document.getElementById('app');
const imagen=document.getElementById('imagen');
const body=document.getElementById("body");
const botonGuardado=document.getElementById("boton-guardado");
const displayGuardados=document.getElementById("display-saved");

/* FONDO DÍA-NOCHE */
const hora=new Date().getHours();
window.addEventListener("load",()=> {
        if (20>hora && hora>6) {
            body.style.backgroundImage="url('./icons/cieloDia.avif')";
        }
        else {
            body.style.backgroundImage="url('./icons/cieloNoche.jpg')";
            Everything.style.color="white";
        }
        Everything.style.display="none";
        form.style.marginTop="200px";
    }
);

/* ESCUCHAR INPUT */
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    getWeather(weatherInput.value);
    weatherInput.value='';
    form.style.marginTop="0";
    Everything.style.display="block";
});

/* FETCH */
let guardado;
const getWeather= async (city)=> {

    try {
        const options= {
            headers : {
                'key' : '779c5b6026154d669ce101306230603'
            }
        };
    
        const res= await fetch(`http://api.weatherapi.com/v1/current.json?q=${city}&lang=es`, options)
        const data=await res.json();
        const location=`${data.location.name}, ${data.location.country}`;
        const condition=data.current.condition.text;
        const temperature=`${data.current.temp_c}ºC`;
        const windVelocity=`${data.current.wind_kph} Km/h`;
        const humidity=`${data.current.humidity}% humedad`
    
        condicion.textContent=condition;
        temperatureDisplay.textContent=temperature;
        viento.textContent=windVelocity;
        localizacion.textContent=location;
        humedad.textContent=humidity;

        let conditionLowerCase=condition.toLowerCase();
    

        if (20>hora && hora>6) {
            if (conditionLowerCase.includes("soleado")) {
                imagen.setAttribute("src",'./icons/dom.png');
            }
            else if (conditionLowerCase.includes("nublado")) {
                imagen.setAttribute("src",'./icons/cloudy.png');
            }
            else if (conditionLowerCase.includes("cielo cubierto")) {
                imagen.setAttribute("src",'./icons/cloudy.png');
            }
            else if (conditionLowerCase.includes("despejado")) {
                imagen.setAttribute("src",'./icons/dom.png');
            }
            else if (conditionLowerCase.includes("neblina")) {
                imagen.setAttribute("src",'./icons/fog.png');
            }
            else if (conditionLowerCase.includes("lluvia")) {
                imagen.setAttribute("src",'./icons/rain.png');
            }
            else if (conditionLowerCase.includes("nieve" || "nevadas")) {
                imagen.setAttribute("src",'./icons/copo-de-nieve.png');
            }
            else if (conditionLowerCase.includes("precipitaciones")) {
                imagen.setAttribute("src",'./icons/precipitaciones.png');
            }
            else if (conditionLowerCase.includes("torment")) {
                imagen.setAttribute("src",'./icons/tormenta.png');
            }
            }
        else {
            if (conditionLowerCase.includes("soleado")) {
                imagen.setAttribute("src",'./icons/dom.png');
            }
            else if (conditionLowerCase.includes("nublado")) {
                imagen.setAttribute("src",'./icons/cloudy.png');
            }
            else if (conditionLowerCase.includes("cielo cubierto")) {
                imagen.setAttribute("src",'./icons/cloudy.png');
            }
            else if (conditionLowerCase.includes("despejado")) {
                imagen.setAttribute("src",'./icons/moon.png');                
            }
            else if (conditionLowerCase.includes("neblina")) {
                imagen.setAttribute("src",'./icons/fog.png');
            }
            else if (conditionLowerCase.includes("lluvia")) {
                imagen.setAttribute("src",'./icons/rain.png');
            }
            else if (conditionLowerCase.includes("nieve" || "nevadas")) {
                imagen.setAttribute("src",'./icons/copo-de-nieve.png');
            }
            else if (conditionLowerCase.includes("precipitaciones")) {
                imagen.setAttribute("src",'./icons/precipitaciones.png');
            }
            else if (conditionLowerCase.includes("torment")) {
                imagen.setAttribute("src",'./icons/tormenta.png');
            }
        }

    } catch (error) {
        console.log(error);
    }

};