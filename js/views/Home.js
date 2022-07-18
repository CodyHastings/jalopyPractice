import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;


export default function Home(props) {
    return `
        <header>
            <h1 style ="text-align: center">HELLO JALOPY</h1>
        </header>
        <main>
            <div>
            <img id="imageJalopy" src="jalopyPractice/assets/jalopy1.jpeg"  alt="jalopy1">
                <p>
                    "Welcome to my Jalopy application!"
                </p>    
                <button id="img-button">Change Image</button>
            </div>
        </main>
    `;
}

export function HomeEvents() {
    // TODO: use an enum for message type
    // const authority = getUserRole();
    // const user = getUser();
    // if(!user) {
    //     showNotification("Welcome visitor", "secondary");
    // } else {
    //     showNotification("Welcome " + user.userName, "info");
    // }
    // i is used to iterate through images.
    let i = 2;
    let imageJalopy = document.getElementById("imageJalopy");
    let imgButton = document.getElementById('img-button');

    imgButton.addEventListener('click', function(e){
        imageJalopy.setAttribute("src", `jalopyPractice/assets/jalopy${i}.jpeg`)
        i+= 1;
        console.log(i);
        if(i > 3){
            i = 1;
        }

    })
}

// let imgButton = document.getElementById('img-button')
//
//     imgButton.addEventListener('click', function(){
//     let i = 1;
//     this.setAttribute("src", `jalopyPractice/assets/jalopy${i}.jpeg`)
//     i+= 1;
//     if(i > 3){
//         i = 0;
//     }
//
// })