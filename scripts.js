const btn = document.querySelector('#btn-1');

btn.addEventListener('click', () => {
    //process form here

    //text input
    const firstTextInput = document.getElementById('first-text-input');
    console.log(firstTextInput.value);

    //color input
    const colorInput = document.querySelector('#color-input');
    const form = document.querySelector('form');
    form.style.backgroundColor = colorInput.value;

    // checkboxes input
    const checkboxesElement = document.querySelector('#checkboxes');
    const checkboxes = checkboxesElement.querySelectorAll('input');

})