const toggleHamMenu = () => 
    document.querySelector('header').classList.toggle('menu-opened');


export const enableBtnNav = () => {
    document.getElementById('btn-ham').addEventListener('click', () => toggleHamMenu());
    document.querySelectorAll('.ham-link').forEach(link => link.addEventListener('click', () => {
        toggleHamMenu();
    }));

    document.getElementById("logo").addEventListener('click', () => {
        if(document.querySelector('header').classList.contains('menu-opened'))
            toggleHamMenu();
    });
}