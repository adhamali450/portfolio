import "./sass/index.sass";

import { loadQualities } from "./js/qualities";
import { setHobbiesJustification } from "./js/hobbies";
import { enableBtnNav } from "./js/ham-nav";
import { loadDuties } from "./js/duties";
import { indicateCardClickables } from "./js/card-indication";
import { sumbitForm } from "./js/form"


// window.addEventListener("contextmenu", e => e.preventDefault());


loadQualities('#qualities strong');

setHobbiesJustification();

enableBtnNav();

loadDuties();

indicateCardClickables();

sumbitForm();