// Main sass file importing all other subfiles (check ./sass)
import "./sass/index.sass";

window.addEventListener("contextmenu", e => e.preventDefault());

//#region general


function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

//mimicking css max-width in media queries
function maxWidth(preferedClientWidth){
    const clientWidth = getWidth();
    if(clientWidth > preferedClientWidth)
        return true;
}

const isInputEmpty = (textBox) => {
    return textBox.value == "" || textBox.value == null;
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const capitalizeFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1); 
}

//#endregion

//#region Loading qualities

import Typed from 'typed.js';

const qualities = ["Cutting Edge", "Upscale" , "Artistic", "Extraordinary"];

var options = {
  strings: qualities,
  typeSpeed: 150,
  backSpeed: 50,
  shuffle: false,
  backDelay: 1000,
  fadeOut: false,

  //cursor
  showCursor: true,
  cursorChar: '_',
};

new Typed('#qualities strong', options);

//#endregion


//#region hobby handling

const hobbies = document.querySelectorAll('.hobby');
const hobbiesContainer = document.querySelector('.hobbies');

hobbies.forEach(hobby => {
    hobby.addEventListener('focus', () => setJustifyContent(hobby));
    // hobby.addEventListener('focusout', () => hobbiesContainer.style.justifyContent = "space-around");
})


function setJustifyContent(hobby){ //650px
    console.log(hobby);
    if(!maxWidth(650)) return;


    const id = hobby.id;

    if(id ==  "developer") //justify-content: start;
        hobbiesContainer.style.justifyContent = "flex-start";
    else if(id == "designer") //justify-content: center;
        hobbiesContainer.style.justifyContent = "center";
    else if(id == "collector") //justify-content: end;
        hobbiesContainer.style.justifyContent = "flex-end";
}

//#endregion

//#region ham-nav

const toggleHamMenu = () => 
    document.querySelector('header').classList.toggle('menu-opened');

document.getElementById('btn-ham').addEventListener('click', () => toggleHamMenu());
document.querySelectorAll('.ham-link').forEach(link => link.addEventListener('click', () => toggleHamMenu()));

document.getElementById("logo").addEventListener('click', () => {
    if(document.querySelector('header').classList.contains('menu-opened'))
        toggleHamMenu();
});

//#endregion

//#region duties handling
const dutyDescriptions = ["My duty is to ensure fast load times and no issues with rendering and"
                        + " intractions. I'm going to give you the fastest version of your website.",

                    "From 4K screen all the way to foldable devices, my layout will be fluent and eye"
                        + " appealing no matter the user's device form factor or brand.",

                    "Known about me,  I have a strong preference for strong and powerful yet,"
                        + " easy to use UI.",

                    "Ensuring all pages are optimized for search engine results ranking"
                        + " by following SEO best practices and building semantic markup."];

const dutyIcons  = document.querySelectorAll('.duty-icon');

dutyIcons.forEach(dutyIcon => 
    dutyIcon.addEventListener('click',
        () => activateDuty(dutyIcon)))

function activateDuty(dutyIcon){
    const allDuties = document.querySelectorAll(".duty"); 
    const currentDuty = dutyIcon.parentNode;

    allDuties.forEach(duty => duty.classList.remove("active-duty"));
    currentDuty.classList.add("active-duty");

    const dutyIndex = currentDuty.dataset.index;
    document.getElementById("duty-description").innerText = dutyDescriptions[dutyIndex];
}
//#endregion

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
        let isClickibleElement = false;
        card.addEventListener('mouseover', 
        (e) => {
            // Max levels of nesting for a card (6 levels from the top-most element)
            const cardSubElements = e.path.slice(0, 3);

            isClickibleElement = cardSubElements.find(element => 
                element.classList.contains('card-title') || 
                element.classList.contains('related-link')) ? true : false;
        });

        card.addEventListener('mousedown', 
        () => {
            if(!isClickibleElement)
                card.classList.add('outline-clickables');
        })

        card.addEventListener('mouseup', 
        () => {
            card.classList.remove('outline-clickables');
        })
    }
);

// Form input validation 

document.querySelectorAll('.text-box').forEach(textBox => {
    textBox.addEventListener('keyup', validate);
});


// obj may be the event args or the <input/> iteself depending on the caller
// we'll check for that
function validate(obj){
    let textBox;
    try {
        textBox = obj.path[0];    
    } catch {
        textBox = obj;
    }
     
    const boxId = textBox.id;
    const errorLabel = document.getElementById(boxId + "-error-label"); 
    const parent = textBox.parentElement;

    // general case: no empty textBox
    if(isInputEmpty(textBox)){

        console.log("empty");

        errorLabel.innerText = capitalizeFirst(boxId) + " can't be empty.";
        parent.classList.add("invalid-input");

        return false;
    }

    // email must be formarted correctly and cannot be mine :"
    if(boxId == "email"){
        if(!validateEmail(textBox.value)){
            errorLabel.innerText = "Invalid email";
            parent.classList.add("invalid-input");

            return false;
        }
        else if(textBox.value == "adhamali_4500@outlook.com"){
            errorLabel.innerText = "Email can't be mine";
            parent.classList.add("invalid-input");
        
            return false;
        }
    }

    clearErrorState(textBox);
    return true;
}

function clearErrorState(textBox){
    const parent = textBox.parentElement;
    parent.classList.remove("invalid-input");
}

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyD2bmYjXuVEqBKhx_ICIQkVhzwBfyubq3k",
  authDomain: "my-portfolio-5c98d.firebaseapp.com",
  databaseURL: "https://my-portfolio-5c98d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-portfolio-5c98d",
  storageBucket: "my-portfolio-5c98d.appspot.com",
  messagingSenderId: "998620020062",
  appId: "1:998620020062:web:55d8c4c84547e52e0623cf",
  measurementId: "G-M4BPVY0M92"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function storeClientMessage(name, email, message) {
    const db = getDatabase();
    set(ref(db, name+'/'), {
        name: name,
        email: email,
        message : message
    });
}


const form = document.getElementById("form"); 
form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    
    const textBoxes = [document.getElementById("name"), 
    document.getElementById("email"),
    document.getElementById("message")]

    for (let i = 0; i < textBoxes.length; i++) {
        if(!validate(textBoxes[i])) {
            textBoxes[i].focus();
            return;
        }
    }

    storeClientMessage(textBoxes[0].value, textBoxes[1].value, textBoxes[2].value);

    form.reset();
    form.classList.add("show-conf");
    setTimeout(()=>form.classList.remove("show-conf"), 3500);
})