// Indicated which ios clickable and which is not

const indicationClassName = 'clickables-outlined';
const showIndication = (card) => {
    card.classList.add(indicationClassName);
    setTimeout(() => card.classList.remove(indicationClassName), 100)
};

function isClickibleElement(eventArgs){
    // Max levels of nesting for a card (6 levels from the top-most element)
    const cardSubElements = eventArgs.path.slice(0, 3);

    return cardSubElements.find(element => 
        element.classList.contains('card-title') || 
        element.classList.contains('related-link')) ? true : false;
}

const cards = document.querySelectorAll('.card');

export const indicateCardClickables = () => {
    cards.forEach(card => {
            let clickable = false;
    
            // Mouse interaction
            card.addEventListener('mouseover', 
            (e) => clickable = isClickibleElement(e));
    
            card.addEventListener('mousedown', () => {
                if(!clickable)
                    showIndication(card);
            })
    
            // Touch interaction
            card.addEventListener('touchstart', 
            (e) => clickable = isClickibleElement(e));
    
            card.addEventListener('touchstart', 
            (e) => {
                if(!clickable)
                    showIndication(card);
            });
        }
    );
}