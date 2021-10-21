import { HTMLObject } from "./indonesia.js";
import { useCelebs } from "./celebs/celebDataProvider.js";
import { useLandmarks} from "./landmarks/landmarkDataProvider.js";
import { useCities } from "./cities/cityDataProvider.js";
import { useindoInfo } from "./indoDataProvider.js";

const buildHTML = (indoArray) => {

    let indoHTMLRepresentation = ""
    

    for (const singleIndoObject of indoArray) {
        indoHTMLRepresentation += HTMLObject(singleIndoObject)

    }
    return indoHTMLRepresentation;

}

export const HTMLList = () => {
    const contentElement = document.querySelector("#indoData")

    const cityArray = useCities()
    const celebArray = useCelebs()
    const landmarkArray = useLandmarks()

    const cityHTML = buildHTML(cityArray)
    const celebHTML = buildHTML(celebArray)
    const landmarkHTML = buildHTML(landmarkArray)

    const indoInfoObject = useindoInfo()

    contentElement.innerHTML += `
        <article class="indoHTMLData">

        <div id="countryImage"><img src=${indoInfoObject.image}></div>
            <h1 id="countryName">${indoInfoObject.name}</h1>
            <h2 id="countryTag">${indoInfoObject.tagline}</h2>
            
            <div id="countryStuff">

        <div class="countryimage">
            <h3>Cities:<br></h3>
                ${cityHTML}
            <h3>Landmarks:<br></h3>
                ${landmarkHTML}
            <h3>Celebrities:<br></h3>
                ${celebHTML}
                
            `

}


export const navBar = () => {
    const contentElement = document.querySelector("#navigation")


    contentElement.innerHTML += `
    <nav>
    <ul class="countryNavigation">
    <li><a href="index.html">Home</a></li>
    <li><a href="canada.html">Canada</a></li>
    <li><a class="current" href="indonesia.html">Indonesia</a></li>
    <li><a  href="kazakhstan.html">Kazakhstan</a></li>
    <li><a href="portugal.html">Portugal</a></li>
</ul>
</nav>
    `
}