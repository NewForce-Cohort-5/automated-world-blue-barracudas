import {useCelebs} from "./celebs/celebDataProvider";
import {useCities} from "./cities/cityDataProvider";
import {useLandmarks} from "./landmarks/landmarkDataProvider";


const portugal = {
    name: "Portugal"
    image: "https://tinyurl.com/mrvt8mdc"
    headline: ""
}


const printCelebs = (celebArray) => {
    let celebHTMLRepresentation = ''
    for (const celebObject of celebArray) {
        celebHTMLRepresentation += HTMLCelebs(celebObject)
    
    }
    return celebHTMLRepresentation
}

const printCities = (cityArray) => {
    let cityHTMLRepresentation = ''
    for (const cityObject of cityArray) {
        cityHTMLRepresentation += HTMLCities(cityObject)
    }
    return cityHTMLRepresentation
}

const printLandmarks = (landmarkArray) => {
    let lanndmarkHTMLRepresentation = ''
    for (const landmarkObject of landmarkArray) {
        lanndmarkHTMLRepresentation += HTMLLandmarks(landmarkObject)
    }
    return lanndmarkHTMLRepresentation
    
}

export const HTMLCelebs = (useCelebs) => {
    return `
    <div class='celebCard'>
        <div class='subheading'> Celebirites: </div>
            <ul>
                <li>${printCelebs}</li>
             <ul>
    `
}
export const HTMLCities = (useCities) => {
    return `
    <div class='cityCard'>
        <div class ='subheading'> Cities: </div>
            <ul>
                <li>${printCities}</li>
            <ul>
    `
}
export const HTMLLandmarks = (useLandmarks) => {
    return `
    <div class='landmarkCard'>
        <div class='subheading'> Landmarks: </div>
            <ul>
                <li>${printLandmarks}</li>
            <ul>
    `
}


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

