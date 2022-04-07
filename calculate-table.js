let balanceAfter = document.getElementById('balance-after-payment');
let submitButton = document.getElementById('submit');
let paymentList = document.getElementById('payment-list');

let months = 6;
let newBalance = 0;

let monthlyBalances = {};

function calculateBalance() {
	let initialBalance = document.getElementById('initial-balance').value;
	let monthlyPayment = document.getElementById('monthly-payment').value;

	for (let i = 0; i <= months - 1; i++) {
		newBalance = initialBalance - monthlyPayment;
		initialBalance = newBalance;

		if (newBalance < 0) {
			newBalance = 'Debt Free!'
		}

		monthlyBalances[i] = {
			date: `${i + 5}-2022`,
			paymentAmount: `$${monthlyPayment}`,
			monthlyBalance: `$${newBalance}`,
		};
		event.preventDefault();
	}
	displayPayments();
	console.log(monthlyBalances);
}

function displayPayments() {
	Object.keys(monthlyBalances).forEach((key) => {
		console.log(key);
		let paymentRowContainer = document.createElement('div');
		paymentList.appendChild(paymentRowContainer);

		let dateRowItem = document.createElement('p');
		let paymentRowItem = document.createElement('p');
		let balanceRowItem = document.createElement('p');

		paymentRowContainer.appendChild(dateRowItem);
		paymentRowContainer.appendChild(paymentRowItem);
		paymentRowContainer.appendChild(balanceRowItem);

		dateRowItem.innerHTML = monthlyBalances[key].date;
		paymentRowItem.innerHTML = monthlyBalances[key].paymentAmount;
		balanceRowItem.innerHTML = monthlyBalances[key].monthlyBalance;
	});
}
