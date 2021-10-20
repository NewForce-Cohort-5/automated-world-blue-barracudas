
import { UseCanadaCelebs } from "./celebs/celebDataProvider.js";
import { UseCanadaCities } from "./cities/cityDataProvider.js";
import { UseCanadaLandmarks } from "./landmarks/landmarkDataProvider.js";

const buildHTML = (canadaArray) => {
    let canadaHTMLRepresentation = ""
    for (const singleCanadaObject of canadaArray) {
        canadaHTMLRepresentation += HTMLCanada(singleCanadaObject)
    }
    return canadaHTMLRepresentation
}

export const HTMLList = () => {
    const contentElement = document.querySelector("#canadaCard")

    const cityArray = UseCanadaCities()
    const celebArray = UseCanadaCelebs()
    const landmarkArray = UseCanadaLandmarks()

    const cityHTML = buildHTML(cityArray)
    const celebHTML = buildHTML(celebArray)
    const landmarkHTML = buildHTML(landmarkArray)

    contentElement.innerHTML += `
        <article class="" id="#canadaCities">
            <h3>Cities:<br></h3>
                ${cityHTML}`
    contentElement.innerHTML += `
        <article class="" id="#canadaLandmarks">
            <h3>Landmarks:<br></h3>
                ${landmarkHTML}`
    contentElement.innerHTML += `
        <article class="" id="#canadaCelebs">
            <h3>Celebrities:<br></h3>
                ${celebHTML}
    `
}