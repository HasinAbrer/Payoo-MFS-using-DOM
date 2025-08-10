document.getElementById('button-id').addEventListener('click', function(event){
    event.preventDefault();             // prevent reloading the page
    console.log('login button clicked');

    const phoneNumber = document.getElementById ('phone-number')
    console.log(phoneNumber.value)
})