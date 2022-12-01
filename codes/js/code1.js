// JavaScript Selectors
document.getElementById()   // return one (1) element
document.getElementsByTagName()     // returns multiples in an array. Accepts p, div, body, or any other valid HTML tag.
document.querySelector()    // Return one (1) element. Only the first element matching the passed-in string will be returned else null is returned.
document.querySelectorAll()   //  returns multiples into another array like structure known as a node list


// Get cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


// Set cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


// Window resize
window.onresize = function(){
   
}