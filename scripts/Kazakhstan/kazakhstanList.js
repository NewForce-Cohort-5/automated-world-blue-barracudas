import { HTMLObject } from "./kazakhstan.js";
import { useCities } from "./cities/cityDataProvider.js";
import { useCelebs } from "./celebs/celebDataProvider.js";
import { useLandmarks } from "./landmarks/landmarkDataProvider.js";
import { useKazInfo } from "./kazDataProvider.js";

const buildHTML = (kazArray) => {

    let kazHTMLRepresentation = ""
    

    for (const singleKazObject of kazArray) {
        kazHTMLRepresentation += HTMLObject(singleKazObject)

    }
    return kazHTMLRepresentation;

}


export const navBar = () => {
    const contentElement = document.querySelector("#navigation")


    contentElement.innerHTML += `
    <nav>
    <ul class="countryNavigation">
    <li><a href="index.html">Home</a></li>
    <li><a href="canada.html">Canada</a></li>
    <li><a href="indonesia.html">Indonesia</a></li>
    <li><a class="current" href="kazakhstan.html">Kazakhstan</a></li>
    <li><a href="portugal.html">Portugal</a></li>
</ul>
</nav>
    `
}

export const HTMLList = () => {
    const contentElement = document.querySelector("#kazData")

    const cityArray = useCities()
    const celebArray = useCelebs()
    const landmarkArray = useLandmarks()

    const cityHTML = buildHTML(cityArray)
    const celebHTML = buildHTML(celebArray)
    const landmarkHTML = buildHTML(landmarkArray)
    const kazInfoArray = useKazInfo()

    contentElement.innerHTML += `
    

        <article class="kazHTMLData">

            <h1 id="countryName">${kazInfoArray.name}</h1>
            <div id="countryImage"><img src=${kazInfoArray.image}></div>
            <h2 id="countryTag">${kazInfoArray.tagline}</h2>
            
            <div id="countryStuff">
            
            <div>
            <h3>Cities:<br> </h3>
                    ${cityHTML}
                    </div>
            <div>    <h3>Landmarks:<br></h3>
                    ${landmarkHTML}
            </div>
            <div>    <h3>Citizens:<br></h3>
                    ${celebHTML}
                    </div>
            </div>    
        
            `

}

export const footer = () => {
    const contentElement = document.querySelector("#footer")

    contentElement.innerHTML += `
       <p>© 2021 Barracuda Travel, Inc.</p>
   
    `

}


export const logo = () => {
    const contentElement = document.querySelector("#logo")

    contentElement.innerHTML += `
    <img src="/images/bluebarracuda.png"" alt="logo"></img>
   
    `

}



