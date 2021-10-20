export const HTMLCanada = (singleObject) => {
    return `
    <div class="">
        <ul>
            <li>${singleObject}</li>
        <ul>
    </div>
    `
}



// // title, country image, tagline elements to be called as HTML
// const canada = {
//     name: "Canada",
//     image: "https://tinyurl.com/598s54jn",
//     tagline: "Canada is a hotspot for international tourism year round, motivated by the travel tagline: Keep Exploring."    
//     }

// // calling the above elements
// function buildCanadaCard(canadaObjParam) {
//     let countryName = ""
//     for (let name of canadaObjParam.name) {
//         `<div>${canadaObjParam.name}</div>`
//     }
//     for (let image of canadaObjParam.image) {
//         `<div>${canadaObjParam.image}</div>`
//     }
//     for (let tagline of canadaObjParam.tagline) {
//         `<div>${canadaObjParam.tagline}</div>`
//     }
// }

// // calling HTML representations from imported dataprovider arrays
// const printCelebs = (CelebArray) => {
//     let celebHTMLRepresentations = ""
//     for (const celebObject of CelebArray) {
//         celebHTMLRepresentations += HTMLCelebs(celebObject)
//     }
//     return celebHTMLRepresentations
// }

// const printCities = (CityArray) => {
//     let cityHTMLRepresentations = ""
//     for (const cityObject of CityArray) {
//         cityHTMLRepresentations += HTMLCities(cityObject)
//     }
//     return cityHTMLRepresentations
// }

// const printLandmarks = (LandmarkArray) => {
//     let landmarkHTMLRepresentations = ""
//     for (const landmarkObject of LandmarkArray) {
//         landmarkHTMLRepresentations += HTMLLandmarks(landmarkObject)
//     }
//     return landmarkHTMLRepresentations
// }

// // calling the dataprovider arrays to express as HTML (INCOMPLETE)
// export const HTMLCelebs = (printCelebs) => {
//     return `
//     <div class="#canadaCard">
//         <div class="#subheading">Celebrities</div>
//             <ul>
//                 <li>${printCelebs}</li>
//             </ul>
//     `
// }
// export const HTMLCities = (printCities) => {
//         return `
//         <div class="#canadaCard">
//             <div class="#subheading">Cities</div>
//                 <ul>
//                     <li>${printCities}</li>
//                 </ul>
//         `
// }
// export const HTMLLandmarks = (printLandmarks) => {
//     return `
//     <div class="#canadaCard">
//         <div class="#subheading">Landmarks</div>
//             <ul>
//                 <li>${printLandmarks}</li>
//             </ul>
//     `
// }

// EXAMPLE CODE BELOW

// function buildHtmlString(cohortObjectParameter) {
//     let cohortStringOne = ""
//     for (let i = 0; i < cohortObjectParameter.length; i++) {
//             `<h1>${cohortObjectParameter.name}</h1>
//             <h3>${cohortObjectParameter.startDate}</h3>
//             <h3>${cohortObjectParameter.endDate}</h3>
//             `
//     } 
//     let cohortStringInst = ""
//     for (let instructor of cohortObjectParameter.instructors){
//         cohortStringInst += `<li>${instructor}</li>`
//     }
//     let cohortStringTech = ""
//     for (let tech of cohortObjectParameter.techStack){
//         cohortStringTech += `<li>${tech}</li>`
//     }
//     return `${cohortStringOne}
//     <ul>${cohortStringInst}</ul>
//     <ul>${cohortStringTech}</ul>`
// }

// htmlString += buildHtmlString(cohort1)

//     function printHtmlString(htmlStringParameter, elementIdParameter){
//         document.querySelector(`${elementIdParameter}`).innerHTML = `${htmlStringParameter}`
//     }
// printHtmlString(htmlString, "#cohort1")