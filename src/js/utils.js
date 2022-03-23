export function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

export const isInputEmpty = (textBox) => {
    return textBox.value == "" || textBox.value == null;
}

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const capitalizeFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1); 
}

export const dateTimeNow = () => {
  const currentdate = new Date();
    let hours = currentdate.getHours(),
        suffix = hours >= 12 ? "PM":"AM";
    hours = ((hours + 11) % 12 + 1);
    
    return currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + hours + ':'
                    + currentdate.getMinutes() + ' '
                    + suffix;
}