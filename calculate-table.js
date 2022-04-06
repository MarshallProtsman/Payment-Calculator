let balanceAfter = document.getElementById("balance-after-payment");
let submitButton = document.getElementById("submit");
let paymentList = document.getElementById("payment-list");

let months = 6;
let newBalance = 0;

let monthlyBalances = {};

function calculateBalance() {
	let initialBalance = document.getElementById("initial-balance").value;
	let monthlyPayment = document.getElementById("monthly-payment").value;

	for (let i = 0; i <= months - 1; i++) {
		newBalance = initialBalance - monthlyPayment;
		initialBalance = newBalance;

		if (newBalance < 0) {
			newBalance = "🎉 Debt Free"
		}

		monthlyBalances[i] = {
			date: `${i + 5}-2022`,
			paymentAmount: `$${monthlyPayment}`,
			monthlyBalance: `${newBalance}`,
		};
		event.preventDefault();
	}
	displayPayments();
	console.log(monthlyBalances);
}

let dateUl = document.createElement("ul");
let amountUl = document.createElement("ul");
let balanceUl = document.createElement("ul");

dateUl.innerHTML = "<b>Payment Date:</b>";
amountUl.innerHTML = "<b>Payment Amount:</b>";
balanceUl.innerHTML = "<b>Remaining Balance:</b>";

// ul.classList.add("result-list");
document.getElementById("payment-list").appendChild(dateUl);
document.getElementById("payment-list").appendChild(amountUl);
document.getElementById("payment-list").appendChild(balanceUl);

function displayPayments() {
	Object.keys(monthlyBalances).forEach((key) => {
		console.log(key);
		let dateLi = document.createElement("li");
		let amountLi = document.createElement("li");
		let balanceLi = document.createElement("li");
		dateUl.appendChild(dateLi);
		amountUl.appendChild(amountLi);
		balanceUl.appendChild(balanceLi);

		dateLi.innerHTML = monthlyBalances[key].date;
		amountLi.innerHTML = monthlyBalances[key].paymentAmount;
		balanceLi.innerHTML = monthlyBalances[key].monthlyBalance;
	});
}
