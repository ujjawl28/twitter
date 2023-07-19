

var currentUser = null;

function getUserName(){
  let KeepLoggedIn = localStorage.getItem("keepLoggedIn");

  currentUser = JSON.parse(localStorage.getItem('user'));
}

function SignOut(){
    localStorage.removeItem('user');
    localStorage.removeItem('keepLoggedIn');
    window.location = "/login";
}

export {SignOut};