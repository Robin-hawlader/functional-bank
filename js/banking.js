function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return inputAmount;

}

function updateTotalField(totalFieldId, amount) {
    const totalAmountField = document.getElementById(totalFieldId);
    const totalAmountText = totalAmountField.innerText;
    const totalAmount = parseFloat(totalAmountText);

    totalAmountField.innerText = totalAmount + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
    return previousBalanceAmount;
}
function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceAmount = parseFloat(balanceTotalText);
    const previousBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceAmount + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceAmount - depositAmount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // get input value
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);



    // get current deposit
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDeposittotal = parseFloat(depositTotalText);

    // depositTotal.innerText = previousDeposittotal + depositAmount;



    // get current balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceAmount = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceAmount + depositAmount;

    // // clear input field
    // depositInput.value = '';
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount)
        updateBalance(depositAmount, true);
    }


})
// withdrw button handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withDrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withDrawInput.value;
    // const withdrawAmount = parseFloat(withdrawInputText);



    // get withdrw current amount

    // const currentWithdrawAmount = document.getElementById('withdraw-amount');
    // const previousWithdrawText = currentWithdrawAmount.innerText;
    // const previousWithdrawAmount = parseFloat(previousWithdrawText);

    // currentWithdrawAmount.innerText = previousWithdrawAmount + withdrawAmount;



    // update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceAmount = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceAmount - withdrawAmount;
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-amount', withdrawAmount)
        updateBalance(withdrawAmount, false);
    }


    // withDrawInput.value = '';

})