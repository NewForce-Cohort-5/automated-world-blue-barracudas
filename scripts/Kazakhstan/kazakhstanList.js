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
            
            <div id="countryImage"><img src=${kazInfoArray.image}></div>
            <h1 id="countryName">${kazInfoArray.name}</h1>
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
    <img src="data:image/jpeg;base64,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" alt="logo"></img>
   
    `

}



