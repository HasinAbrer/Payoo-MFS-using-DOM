document.getElementById('btn-add-money').addEventListener('click', function(event) {
    event.preventDefault()      // prevent reloading the page within the form
    
    const addMoneyInput = document.getElementById('input-add-money').value
    const pinNumberInput = document.getElementById('input-pin-number').value

    if(pinNumberInput === '1234'){
        const balance = document.getElementById('account-balance').innerText

        const addMoneyNumber = parseFloat(addMoneyInput)
        const balanceNumber = parseFloat(balance)

        const newBalance = balanceNumber + addMoneyNumber

        document.getElementById('account-balance').innerText = newBalance
        
    }
    else{
        alert ('Please enter a valid pin number')
    }
})

