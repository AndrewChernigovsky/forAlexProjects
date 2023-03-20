const formList = document.querySelectorAll(".js-form-block");


export function validation() {

	if (!formList.length) return;

	formList.forEach((form) => attachEvents(form));

	function attachEvents(parent) {
		const formInputList = parent.querySelectorAll('input[data-name]');

		const username = parent.querySelector("input[data-name='name']");
		const email = parent.querySelector("input[data-name='email']");
		const password = parent.querySelector("input[data-name='password']");
		const passwordConfirm = parent.querySelector("input[data-name='passwordConfirm']");

		if (!formInputList.length) return;

		const checkInputs = () => {
			const usernameValue = username.value.trim();
			const emailValue = email.value.trim();
			const passwordValue = password.value.trim();
			const passwordConfirmValue = passwordConfirm.value.trim();

			if (!usernameValue) {
				setErrorFor(username, 'Username cannot be blank');
			} else {
				setSuccessFor(username);
			}

			if (!emailValue) {
				setErrorFor(email, 'Email cannot be blank');
			} else if (!isEmail(emailValue)) {
				setErrorFor(email, 'Email is not valid');
			} else {
				setSuccessFor(email);
			}

			const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
			if (!passwordValue) {
				setErrorFor(password, 'Password cannot be blank');
			} else if (passwordValue.length < 8) {
				setErrorFor(password, 'Password to short');
			} else if (!passwordValue.match(re)) {
				setErrorFor(password, 'it have to contains a upper, lower and a number');
			} else {
				setSuccessFor(password);
			}

			if (!passwordConfirmValue) {
				setErrorFor(passwordConfirm, 'write again your password');
			} else if (passwordValue !== passwordConfirmValue) {
				setErrorFor(passwordConfirm, 'does not match');
			} else {
				setSuccessFor(passwordConfirm);
			}
		};

		parent.addEventListener('submit', (e) => {
			e.preventDefault();
			checkInputs();
		});
	}

	const setErrorFor = (input, message) => {
		const formControl = input.parentElement;
		const small = formControl.querySelector('small');

		small.innerText = message;

		formControl.className = 'form-control error';
	};

	const setSuccessFor = (input) => {
		const formControl = input.parentElement;
		formControl.className = 'form-control success';
	};

	const isEmail = (email) => {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	};
}