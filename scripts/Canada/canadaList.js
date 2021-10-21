import { HTMLCanada } from "./canada.js";
import { UseCanadaCountry } from "./country/countrydataprovider.js";
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

export const navBar = () => {
    const contentElement = document.querySelector("#navigation")

    contentElement.innerHTML += `
    <nav>
    <ul class="countryNavigation">
    <li><a href="index.html">Home</a></li>
    <li><a class="current" href="canada.html">Canada</a></li>
    <li><a href="indonesia.html">Indonesia</a></li>
    <li><a href="kazakhstan.html">Kazakhstan</a></li>
    <li><a href="portugal.html">Portugal</a></li>
</ul>
</nav>
    `
}

export const HTMLCaObjects = () => {
    const contentElement1 = document.querySelector("#canadaName")
    const nameObject = UseCanadaCountry()

    contentElement1.innerHTML += `
        <article class="title" id="canadaName">
            ${nameObject.name}
        </article>`

    const contentElement2 = document.querySelector("#canadaImage")
    const imageObject = UseCanadaCountry()

    contentElement2.innerHTML += `
        <article class="image" id="canadaImg">
            <img class="img" src="${imageObject.image}" alt="Banff">
        </article>`

    const contentElement3 = document.querySelector("#canadaTagline")
    const taglineObject = UseCanadaCountry()

    contentElement3.innerHTML += `
        <article class="tagline" id="canadaTagline">
            ${taglineObject.tagline}
        </article>`
}

export const HTMLCaList = () => {
    const contentElement = document.querySelector("#canadaCard")

    const cityArray = UseCanadaCities()
    const celebArray = UseCanadaCelebs()
    const landmarkArray = UseCanadaLandmarks()

    const cityHTML = buildHTML(cityArray)
    const celebHTML = buildHTML(celebArray)
    const landmarkHTML = buildHTML(landmarkArray)

    contentElement.innerHTML += `
        <article class="cities" id="#canadaCities">
            <h3>Cities:<br></h3>
                ${cityHTML}
            </article>`
    contentElement.innerHTML += `
        <article class="landmarks" id="#canadaLandmarks">
            <h3>Landmarks:<br></h3>
                ${landmarkHTML}
            </article>`
    contentElement.innerHTML += `
        <article class="celebrities" id="#canadaCelebs">
            <h3>Celebrities:<br></h3>
                ${celebHTML}
        </article>`
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
    <img class="logo" id="logo" src="/images/bluebarracuda.png" alt="logo"></img>
    `
}