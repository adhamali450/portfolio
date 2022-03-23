import { isInputEmpty, validateEmail, capitalizeFirst, dateTimeNow} from './utils'
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

function validate(obj){
    // obj may be the event args or the <input/> iteself depending on the caller
    // we'll check for that
    
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

    // If none of the above cases took place
    clearErrorState(textBox);
    return true;
}

function clearErrorState(textBox){
    const parent = textBox.parentElement;
    parent.classList.remove("invalid-input");
}

function storeClientMessage(name, email, message) {
    
    
    const db = getDatabase();
    set(ref(db, name+'/'), {
        name: name,
        email: email,
        message : message,
        time: dateTimeNow()
    });
}

const textBoxes = [document.getElementById("name"), 
    document.getElementById("email"),
    document.getElementById("message")];
function submitForm(){
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
}




export const sumbitForm = () => {
    // Hitting enter can fire sumbit action if the message input is not focused  
    var enterCanSubmit = false;
    document.getElementById('contact').addEventListener('mousemove', () => enterCanSubmit = true )
    document.addEventListener('keyup', (e) => {
        if(document.getElementById('message') == document.activeElement)
            enterCanSubmit = false;
        
        if(e.key === "Enter" && enterCanSubmit) submitForm(); 
    })

    document.querySelectorAll('.text-box').forEach(textBox => {
        textBox.addEventListener('keyup', validate);
    });

    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();
        submitForm();  
    });

    
}