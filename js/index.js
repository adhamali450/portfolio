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

//#endregion


//#region Loading qualities

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
  cursorChar: '|',
};

var typed = new Typed('#qualities strong', options);

//#endregion

//#region hobby handling
const hobbies = document.querySelectorAll('.hobby a');
const hobbiesContainer = document.getElementById('hobbies-container');
hobbies.forEach(hobby => {
    hobby.addEventListener('focus', () => setJustifyContent(hobby, 650));
    hobby.addEventListener('focusout', () => hobbiesContainer.style.justifyContent = "space-around");
})

function widthSmallerThan(width){
    const clientWidth = getWidth();  
    if(clientWidth > width)
        return false;
}

//TODO: refactor
function setJustifyContent(hobby, preferedClientWidth){ //650px
    const clientWidth = getWidth();  
    if(clientWidth > preferedClientWidth)
        return;

    const id = hobby.parentNode.id

    if(id ==  "developer") //justify-content: start;
        hobbiesContainer.style.justifyContent = "flex-start";
    else if(id == "designer") //justify-content: center;
        hobbiesContainer.style.justifyContent = "center";
    else if(id == "collector") //justify-content: end;
        hobbiesContainer.style.justifyContent = "flex-end";
}

//#endregion

//#region Download resume
btnDownload.addEventListener("click", function(){
    window.open('https://drive.google.com/file/d/1_Ou0qmDgCAZB0ZE7WgMgfunNOA_AmK3a/view?usp=sharing', '_blank');
    
})
//#endregion


//#region sticky header
window.onscroll = function() {stickHeader()};

var header = document.getElementById("header");
var landingContainer = document.getElementById("hero-container");


function stickHeader() {
    var offset = header.offsetTop;
    if (window.pageYOffset > offset) {
        header.classList.add("sticky");
        landingContainer.style.paddingTop = header.clientHeight + "px"; 
    } else {
        header.classList.remove("sticky");
        landingContainer.style.paddingTop = "0px"; 
    }
}
//#endregion


//#region duties handling
const dutyNames = ["Exceptionally Performant",
            "Fully Responsive",
            "Highly Intuitive",
            "SEO Developer Ready"];

const dutyDescriptions = ["My duty is to ensure fast load times and no any issues with rendering and"
                        + " intractions. I’m going to give you the fastest version of your website.",

                    "From 4K screen all the way to foldable devices, my layout will be fluent and eye"
                        + " appealing no matter the user's device form factor or brand.",

                    "Known about me,  I have a strong preference for strong and powerful yet,"
                        + " easy to use UI.",

                    "Ensuring all pages are optimized for search engine results ranking"
                        + " by following SEO best practices and building semantic markup."];

const dutyIcons  = document.querySelectorAll('.duty-icon');
const activeDutyClass = "active-duty";
dutyIcons.forEach(dutyIcon => {
    dutyIcon.addEventListener('mouseenter', () => hobbyIconHoverControl(dutyIcon));
    dutyIcon.addEventListener('mouseleave', () => dutyIcon.style.backgroundColor = "transparent");
    dutyIcon.addEventListener('click', () => activateDuty(dutyIcon));
})

function hobbyIconHoverControl(dutyIcon){
    if(dutyIcon.parentNode.classList.contains(activeDutyClass)){
        dutyIcon.style.backgroundColor = "transparent";
        console.log("active hover");

    }
    else{
        dutyIcon.style.backgroundColor = "rgba(250, 250, 250, 0.075)";
    }
}

function activateDuty(dutyIcon){

    dutyIcons.forEach(allDuties => allDuties.parentNode.classList.remove(activeDutyClass));
    dutyIcon.parentNode.classList.add(activeDutyClass);


    var dutiesSliced = Array.prototype.slice.call( document.getElementById('duties').children );
    const dutyIndex = dutiesSliced.indexOf(dutyIcon.parentNode);

    document.getElementById("duty-description").innerHTML = dutyDescriptions[dutyIndex];
    document.getElementById("duty-name").innerHTML = dutyNames[dutyIndex];
}
//#endregion


form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    console.log("email sent")
});

window.addEventListener("contextmenu", e => e.preventDefault());


// Form input validation 

function validate(e){
    const inputId = e.target.id;
    const input = document.getElementById(inputId); 
    const errorLabel = document.getElementById(inputId + "-error-label"); 
    const parent = input.parentElement;

    // general case: no empty input
    if(isEmpty(input)){
        errorLabel.innerText = capitalizeFirst(inputId) + " can't be empty.";
        parent.classList.add("invalid-input");

        return;
    }

    // email must be formarted correctly and cannot be mine :"
    if(inputId == "email"){
        const emailPattern = 
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!validateEmail(input.value)){
            errorLabel.innerText = "Invalid email";
            parent.classList.add("invalid-input");

            return;
        }
        else if(input.value == "adhamali_4500@outlook.com"){
            errorLabel.innerText = "Email can't be mine";
            parent.classList.add("invalid-input");
        
            return;
        }
    }    

    // message cannot be less than 18 chars
    if(inputId == "message"){
        if(input.value.length < 18){
            errorLabel.innerText = "Message can't be less than 18 characters";
            parent.classList.add("invalid-input");
        
            return;
        }
    }
}

function clearErrorState(e){ 
    const parent = document.getElementById(e.target.id).parentElement;
    parent.classList.remove("invalid-input");
}


const isEmpty = (input) => {
    return input.value == "" || input.value == null;    
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const capitalizeFirst = (text) => {
    return text[0].toUpperCase() + text.slice(1); 
}