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

//Examples for words
//  1- Extraoedinary
//  2- Professional
//  3- Upscale
//  4- Cutting Edge
//  5- High Tech
//  6- Robust
//  7- Game Changing
//  8- Innovative
//  9- Efficient

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
    hobby.addEventListener('focusout', () => hobbiesContainer.style.justifyContent = "center");
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
    window.open('https://doc-14-4g-docs.googleusercontent.com/docs/securesc/1qrodo552embka0en7srub7be6l2mu18/asgpuljksh9icujumpd8rc3h3os2iish/1645929900000/14950670156323635663/14950670156323635663/1_Ou0qmDgCAZB0ZE7WgMgfunNOA_AmK3a?e=download&ax=ACxEAsZfX0jsCWbtedGgSFSC_nZvgNrwKYU0NYfenBU5FPKcs8iDDMdorGZYVt99uhH5SK98I9UHo7EuXd37_jg9uaEDktwGJCE33DZ6RCEyfbD35CWkgD5r8tv-1LRcwZX83AI3BbT0TIVL_9h6hR5IhTFCShivUer5e_D8dGMbuCsJAky2GCJWgVGPKhE5K9D0NYXmtBz5R2zQCJF-B3iv7Bo1Vg4ug9G4Xm2JoqfDbsPE8YopIUI9xXQSOScsuQxigVJxP3iHbgNfBbz1aMSDZsq8UWSd4JwXL7bPkvQZNPDQIKXA5bGkT5R8CNI3M4jmuc94NTDCxUyHkhE3IPW2Juraah5CXHc8mUG1JsH4Ds849c_bQSuvHKdr14CnZKdeFF-GRutk8-BKbOrgejNmqL4cQGwBC7RYO0-X-jY0EIg-z1vLCIRtRsuurSYoiD4RNrJfhEcItMJ71V0-v3COk-n1GtBIfKSZJWpjrf_cwPiHfYUdwBQapWpBk9CplnKZJEUaVifsSCI4zPKraZId3JIH3IQYV0zNtcMLoJQutMQBjaq1arVLBpG1l2m8ThayhtViOQ4cq5Q4q5yw4I6UxN9fFhnfv_LfW1-oNngR7HUjCAWF2g5a7mwSqfhcD3WOtbbKJ3VkJhfZPjqaY2_04QKo0g0cniKkiW5aqJI&authuser=0', '_blank');
    
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




// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}