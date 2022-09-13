const btn = document.getElementById('btn-1');

btn.addEventListener('click', () => {
    //process form here

    //text input
    const firstTextInput = document.getElementById('first-text-input');
    console.log(firstTextInput.value);

    //color input
    // const colorInput = document.querySelector('#color-input');

    // COLOR INPUT NOT WORKING
    const colorInput = document.getElementById('color-input');
    console.log(document.getElementById('color-input').value);
    console.log('here', colorInput.value);
    const form = document.querySelector('form');
    form.style.backgroundColor = colorInput.value;

    //checkboxes input
    // const checkboxesElement = document.querySelector('#checkboxes');
    // const checkboxes = checkboxesElement.querySelectorAll('input');

})