/*
    State Change

    state variable

*/ 

const uiButton = document.querySelector('#button');
const uiWindow = document.querySelector('#window');

//State variable
let userIsLoggedIn = false;

uiButton.addEventListener('click', function(evt){

    if(userIsLoggedIn === false)
    {
        userIsLoggedIn = true;
        
        uiWindow.classList.remove('hidden')
    }
    else
    {
        userIsLoggedIn = false;

        uiWindow.classList.add('hidden')
    }
    

});