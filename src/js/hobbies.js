// Deals with how hobbies are justifies horizontally
// when expaned and collapsed on small screens

const hobbies = document.querySelectorAll('.hobby');
const hobbiesContainer = document.querySelector('.hobbies');

export function setJustifyContent(hobby){ 
    //650px
    if(!window.matchMedia("(max-width: 700px)").matches) return;

    const id = hobby.id;
    if(id ==  "developer")
        hobbiesContainer.style.justifyContent = "flex-start";
    else if(id == "designer")
        hobbiesContainer.style.justifyContent = "center";
    else if(id == "collector")
        hobbiesContainer.style.justifyContent = "flex-end";
}

export function setHobbiesJustification(){
    hobbies.forEach(hobby => {
        hobby.addEventListener('focus', () => setJustifyContent(hobby));

        hobby.addEventListener('focusout', () =>         
            hobbiesContainer.style.justifyContent = "space-around");
    })
}