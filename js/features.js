// show cashout form when clicking the Cashout button
document.getElementById('btn-show-cash-out').addEventListener('click', function() {
    document.getElementById('cash-out-form').classList.remove('hidden');

    document.getElementById('add-money-form').classList.add('hidden');
})

// show add money form when clicking the Add Money button
document.getElementById('btn-show-add-money').addEventListener('click', function() {
    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');
})