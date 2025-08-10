document.getElementById('button-id').addEventListener('click', function(event){
    event.preventDefault();             // prevent reloading the page within the form
    console.log('login button clicked');

    const phoneNumber = document.getElementById ('phone-number')
    console.log(phoneNumber.value)
})