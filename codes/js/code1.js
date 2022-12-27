// npm i http-server    usage command: http-server


// JavaScript Selectors
document.getElementById()   // return one (1) element
document.getElementsByTagName()     // returns multiples in an array. Accepts p, div, body, or any other valid HTML tag.
document.querySelector()    // Return one (1) element. Only the first element matching the passed-in string will be returned else null is returned.
document.querySelectorAll()   //  returns multiples into another array like structure known as a node list


// Scroll to top on page load
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


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

// addEventListener
document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});





/**
 * Checking viewport width and height and executing a function on windows load and resize
 */
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

window.addEventListener("load", (event) => {
    checkViewPortWidth(vw, vh);
});

window.addEventListener("resize", (event) => {
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    checkViewPortWidth(vw, vh);
});

const checkViewPortWidth = ( vw, vh ) => {
  // Execute anything here
}