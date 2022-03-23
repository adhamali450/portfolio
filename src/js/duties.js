const dutyDescriptions = ["My duty is to ensure fast load times and no issues with rendering and"
                        + " intractions. I'm going to give you the fastest version of your website.",

                    "From 4K screen all the way to foldable devices, my layout will be fluent and eye"
                        + " appealing no matter the user's device form factor or brand.",

                    "Known about me,  I have a strong preference for strong and powerful yet,"
                        + " easy to use UI.",

                    "Ensuring all pages are optimized for search engine results ranking"
                        + " by following SEO best practices and building semantic markup."];

const dutyIcons  = document.querySelectorAll('.duty-icon');

function activateDuty(dutyIcon){
    const allDuties = document.querySelectorAll(".duty"); 
    const currentDuty = dutyIcon.parentNode;

    allDuties.forEach(duty => duty.classList.remove("active-duty"));
    currentDuty.classList.add("active-duty");

    const dutyIndex = currentDuty.dataset.index;
    document.getElementById("duty-description").innerText = dutyDescriptions[dutyIndex];
}


export const loadDuties = () => {
    dutyIcons.forEach(dutyIcon => 
        dutyIcon.addEventListener('click',
            () => activateDuty(dutyIcon)))
}