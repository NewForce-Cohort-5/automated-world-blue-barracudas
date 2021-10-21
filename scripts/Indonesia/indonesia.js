export const HTMLObject = (singleObject) => {
    return `
    <div class="objectCard">
            <ul>
                <li>${singleObject}</li>
            </ul>
        </div>
        `
}


// import { useCelebs } from "./celebs/celebDataProvider";
// import { useLandmarks} from "./landmarks/landmarkDataProvider";
// import { useCities } from "./cities/cityDataProvider";

// const printCelebs = (celebArray) => {
//     let celebHTMLRepresentations = ""
//     for (const celebObject of celebArray) {
//         celebHTMLRepresentations +- HTMLCelebs(celebObject)
//    }
//    return celebHTMLRepresentations
// }
// const printLandmarks = (landmarkArray) => {
//     let landmarkHTMLRepresentations = ""
//     for (const landmarkObject of landmarkArray) {
//         landmarkHTMLRepresentations +- HTMLLandmarks(landmarkObject)
//    }
//    return landmarkHTMLRepresentations

//    const printCities = (cityArray) => {
//     let cityHTMLRepresentations = ""
//     for (const citybObject of cityArray) {
//         cityHTMLRepresentations +- HTMLCities(cityObject)
//    }
//    return cityHTMLRepresentations
// }
// }

// export const HTMLCelebs = (printCelebs) => {
//     return ` 
//     <div class="#indonesiaCard">
//     <div class= "#subheading">Celebrities</div>
//     <ul>
//     <li>$(printCelebs)</li>
//     </ul>
//     `
// }

// export const HTMLCities = (printCities) => {
//     return `
//     <div class="#indonesiaCard">
//     <div class= "#subheading">Cities</div>
//     <ul>
//     <li>$(printCities)</li>
//     </ul>
//     `
// }

// export const HTMLCities = (printLandmarks) => {
//     return `
    
// <div class="#indonesiaCard">
//     <div class= "#subheading">Landmarks</div>
//     <ul>
//     <li>$(printLandmarks)</li>
//     </ul>
//     `
// }




//   for (let i = 0; i < movieSchedule.length; i++) {
//     document.querySelector("#movie-schedule").innerHTML += 
//     `<ul>
//         <li>${movieSchedule[i].title}</li>
//         <li><img class="poster" src="${movieSchedule[i].poster}" </li>
//         <li>${movieSchedule[i].rating}</li>
//         <li>${movieSchedule[i].currentlyPlaying}</li>
        
//         </ul>`
//   }
// let htmlString = ""

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
