import { HTMLObject } from "./portugal.js";
import {useCelebs} from "./celebs/celebDataProvider.js";
import {useCities} from "./cities/cityDataProvider.js";
import {useLandmarks} from "./landmarks/landmarkDataProvider.js";
import {useCountryPortugal} from "./countrydataprovider.js";



const buildHTML = (portArray) => {
    
    let portHTMLRepresentation = ""


    for (const singlePortObject of portArray) {
        portHTMLRepresentation += HTMLObject(singlePortObject)

    }
    return portHTMLRepresentation;

}  


export const navBar = () => {
    const contentElement = document.querySelector("#navigation")


    contentElement.innerHTML += `
    <nav>
    <ul class="countryNavigation">
    <li><a href="index.html">Home</a></li>
    <li><a href="canada.html">Canada</a></li>
    <li><a href="indonesia.html">Indonesia</a></li>
    <li><a " href="kazakhstan.html">Kazakhstan</a></li>
    <li><a class="current href="portugal.html">Portugal</a></li>
</ul>
</nav>
    `
}

export const HTMLObjects = () => {
    const contentElement1 = document.querySelector("#portname")
    const nameObject = useCountryPortugal()

    contentElement1.innerHTML += `
        <article class="" id="portname1">
             <div class="area">${nameObject.name}</div>
        </article>`






        

    const contentElement2 = document.querySelector("#portimg")
    const imageObject = useCountryPortugal()

    contentElement2.innerHTML += `
         <article class="" class="portimg">
         
         <div class="container">
         <img src="${imageObject.Image}" alt="port">

         <div class="overlay">Portugal</div>
       </div>
  
        </article>`

     const contentElement3 = document.querySelector("#portheadline")
        const headlineObject = useCountryPortugal()
    contentElement3.innerHTML += `
        <article class="" id="portheadline1">
             <h3> ${headlineObject.headline}
             </article>`
}




export const HTMLList = () => {
    const contentElement = document.querySelector("#portugalCard")

    const cityArray = useCities()
    const celebArray = useCelebs()
    const landmarkArray = useLandmarks()

    const cityHTML = buildHTML(cityArray)
    const celebHTML = buildHTML(celebArray)
    const landmarkHTML = buildHTML(landmarkArray)

    contentElement.innerHTML += `
        <article class="portugalCard">
            <div><h3>Cities:<br></h3>
            ${cityHTML}</div>

            <div><h3>Landmarks:<br></h3>
            ${landmarkHTML}</div>

            <div><h3>Citizens:<br></h3>
            ${celebHTML}</div>
                
         
                `
}

export const footer = () => {
    const contentElement = document.querySelector("#footer")

    contentElement.innerHTML += `
       <p>© 2021 Barracusa Travel, Inc.</p>
   
    `

}


export const logo = () => {
    const contentElement = document.querySelector("#logo")

    contentElement.innerHTML += `
    <img class="logo" id="logo" src="/images/bluebarracuda.png" alt="logo"></img>
    `
}