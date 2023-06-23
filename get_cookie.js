function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  
  return "";
}

// Function to handle button click event
function handleButtonClick() {
  var myCookie = getCookie("JSESSIONID");
  console.log(myCookie);
  // Add your code here to perform the desired action with the cookie value
}

// Get the button element
var button = document.getElementById('my_button');

// Add an event listener to the button
button.addEventListener('click', handleButtonClick);
