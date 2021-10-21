//Render html strings
export const HTMLObject = (singleObject) => {
    return `
    <div class="objectCard">
            <ul>
                <li>${singleObject}</li>
            </ul>
        </div>
        `
}





// export const HTMLCities = (citieString) => {
//     return `
//     <div class="citiesCard">
//             <div class="subheading">Cities:</div>
//             <ul>
//                 <li>${citieString}}</li>
//             </ul>
//         </div>
//         `
// }


// export const HTMLCelebs = (celebString) => {
//     return `
//     <div class="celebCard">
//             <div class="subheading">Celeb:</div>
//             <ul>
//                 <li>${celebString}}</li>
//             </ul>
//         </div>
//         `
// }

// export const HTMLCities = (landmarkString) => {
//     return `
//     <div class="landmarkCard">
//             <div class="subheading">Cities:</div>
//             <ul>
//                 <li>${landmarkString}}</li>
//             </ul>
//         </div>
//         `
// }

// const stringArray = ["hi", "Hello", "Whats up?"]

// const objectArray = [ 
//     {
//         name: "Spur",
//         number: 5464198796456
//     },
//     {
//         name: "Earl",
//         number: 74185296356
//     },
//     {
//         name: "Mike",
//         number: 78946533221258
//     }
// ]


// for(let item of stringArray){
//     console.log(item)
// }
// for(let item of objectArray){
//     console.log(item.name)
// }