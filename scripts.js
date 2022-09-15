const btn = document.querySelector('#btn-1');

btn.addEventListener('click', () => {
    //process form here

    //text input
    const firstTextInput = document.getElementById('first-text-input');
    const title = document.querySelector('#website-title');
    console.log("here", firstTextInput.value);
    if(firstTextInput.value === ""){
        console.log("in here");
        title.innerHTML = "no title input";
    }
    else{
        title.innerHTML = firstTextInput.value;
    }


    //color input
    const colorInput = document.querySelector('#color-input');
    const form = document.querySelector('form');
    document.body.style.backgroundColor = colorInput.value;

    // radio input
    let selectedShape;
    const radioButtons = document.querySelectorAll('input[name="logo"]');

    radioButtons.forEach((item) => {
        if(item.checked === true){
            selectedShape=item.id;
        }
    })

    console.log(selectedShape);
    const coolerLogo = document.getElementById('cool-logo');

    if(selectedShape === document.getElementById('circle').id){
        coolerLogo.innerHTML = "●";

    }
    else if(selectedShape === document.getElementById('square').id){
        coolerLogo.innerHTML = "■";

    }
    else if(selectedShape === document.getElementById('star').id){
        coolerLogo.innerHTML = "✭";
        
    }
    else if(selectedShape === document.getElementById('heart').id){
        coolerLogo.innerHTML = "♥";
        
    }
    else{
        coolerLogo.innerHTML = "no logo selected";

    }

    //textarea input
    const messageInput = document.getElementById('message');
    const messageSpace = document.getElementById('cool-message');

    console.log(messageInput.value);

    if(messageInput.value === ""){
        messageSpace.innerHTML = "No message entered";
    }
    else{
        messageSpace.innerHTML = messageInput.value;
    }

    form.style.visibility = 'hidden'; 

    const btn2 = document.querySelector('#btn-2');
    btn2.style.visibility = 'visible';

})

const btn2 = document.querySelector('#btn-2');

btn2.addEventListener('click', () => {
    console.log("inside here");
    const form = document.querySelector('form');
    form.reset(); 
    form.style.visibility = "visible";  
    
    document.body.style.backgroundColor = '#FFFFFF';
    const messageSpace = document.getElementById('cool-message');
    const coolerLogo = document.getElementById('cool-logo');
    const title = document.querySelector('#website-title');

    messageSpace.innerHTML = "";
    coolerLogo.innerHTML = "";
    title.innerHTML = "Let's make a website";

    btn2.style.visibility = 'hidden';

})