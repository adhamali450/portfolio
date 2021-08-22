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

//#region loading animations for page
const stopwatchAnim = bodymovin.loadAnimation({
        container: stopwatchAnimCont,
        path: "../assets/animations/stopwatch.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
        rendererSettings: {
          progressiveLoad: true,
        },
});
//#endregion

//#region Loading qualities

//Examples for words
//  1- Extraoedinary
//  2- Professional
//  3- Upscale
//  4- Cutting Edge
//  5- High Tech
//  6- Robust
//  7- Game Changing


const  normalTypingSpeed = 150,
normalTypingDelay = 1500,
normalDeletingSpeed = 350,
normalDeletingDelay = normalTypingDelay,
moveSpeed = 75,
singleTypingSpeed = moveSpeed,
singleDeletingSpeed = moveSpeed;

const q = ["Cutting Edge", "Upscale" , "Bullet Proof", "Robust"], //qualities
        ntp = {speed: normalTypingSpeed, delay: normalTypingDelay}, //normalTypingProperties
        ndp = {speed: normalDeletingSpeed, delay: normalDeletingDelay}; //normalDeletingProperties


const typeIt = new TypeIt("#qualities", {
    startDelay: 500,
    beforeStep: async (step, instance) => {
        // Will fire before each step in the queue.
    },

    beforeString: async (step, instance) => {
        // // Will fire before each string in the queue.
    },

    afterStep: async (step, instance) => {
        // Will fire after each step in the queue.
    },

    afterString: async (step, instance) => {
        // Will fire after each string in the queue,
        // including those added by the `.type()` instance method.
    },

    afterComplete: async (step, instance) => {
        // Will fire after the entire instance has completed typing.
        // NOTE: If "loop" is enabled, this will never fire.
    }
});

for(i = 0; i < q.length; i++){
    typeIt.type(q[i], ntp)

    if(i + 1 != q.length) //Delete each string afterwards except the last string
        typeIt.delete(q[i].length, ndp);
}
typeIt.go()

//#endregion

//#region hobby handling
const hobbies = document.querySelectorAll('.hobby a');
const hobbiesContainer = document.getElementById('hobbies-container');
hobbies.forEach(hobby => {
    hobby.addEventListener('focus', () => setJustifyContent(hobby, 650));
})

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
    window.open('../assets/resume.pdf', '_blank');
})
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


//#region skills percentages
const skillsPercentage= [90, 90, 85,  70,  80];
const progressBars = document.querySelectorAll(".progress-bar");
const badgePercentages = document.querySelectorAll(".percentage");
for(i = 0; i < progressBars.length; i++){
    progressBars[i].value = skillsPercentage[i];
    badgePercentages[i].innerHTML = skillsPercentage[i] +"%";
}
//#endregion


window.addEventListener("contextmenu", e => e.preventDefault());
