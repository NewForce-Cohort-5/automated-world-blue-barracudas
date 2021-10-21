import { HTMLObject } from "./kazakhstan.js";
import { useCities } from "./cities/cityDataProvider.js";
import { useCelebs } from "./celebs/celebDataProvider.js";
import { useLandmarks } from "./landmarks/landmarkDataProvider.js";


const buildHTML = (kazArray) => {

    let kazHTMLRepresentation = ""
    

    for (const singleKazObject of kazArray) {
        kazHTMLRepresentation += HTMLObject(singleKazObject)

    }
    return kazHTMLRepresentation;

}

export const HTMLList = () => {
    const contentElement = document.querySelector("#kazData")

    const cityArray = useCities()
    const celebArray = useCelebs()
    const landmarkArray = useLandmarks()

    const cityHTML = buildHTML(cityArray)
    const celebHTML = buildHTML(celebArray)
    const landmarkHTML = buildHTML(landmarkArray)

    contentElement.innerHTML += `
        <article class="kazHTMLData">
            <h3>Cities:<br></h3>
                ${cityHTML}
            <h3>Landmarks:<br></h3>
                ${landmarkHTML}
            <h3>Citizens:<br></h3>
                ${celebHTML}
                
            `

}
