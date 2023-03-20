const formList = document.querySelectorAll('.js-form-block');

export function validation() {
	if (!formList.length) return;

	formList.forEach((form) => attachEvents(form));

	function attachEvents(parent) {
		const formInputList = parent.querySelectorAll('input[data-name]');

		const username = parent.querySelector("input[data-name='name']");
		const email = parent.querySelector("input[data-name='email']");
		const password = parent.querySelector("input[data-name='password']");
		const passwordConfirm = parent.querySelector("input[data-name='passwordConfirm']");
		const phone = parent.querySelector("input[data-name='phone']");

		if (!formInputList.length) return;

		const checkInputs = () => {
			let usernameValue;
			let emailValue;
			let passwordValue;
			let passwordConfirmValue;
			let phoneValue;
			const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

			if (username !== null) {
				usernameValue = username.value.trim();

				if (!usernameValue) {
					setErrorFor(username, 'Username cannot be blank');
				} else {
					setSuccessFor(username);
				}
			}
			if (email !== null) {
				emailValue = email.value.trim();

				if (!emailValue) {
					setErrorFor(email, 'Email cannot be blank');
				} else if (!isEmail(emailValue)) {
					setErrorFor(email, 'Email is not valid');
				} else {
					setSuccessFor(email);
				}
			}
			if (password !== null) {
				passwordValue = password.value.trim();

				if (!passwordValue) {
					setErrorFor(password, 'Password cannot be blank');
				} else if (passwordValue.length < 8) {
					setErrorFor(password, 'Password to short');
				} else if (!passwordValue.match(passwordRegex)) {
					setErrorFor(password, 'it have to contains a upper, lower and a number');
				} else {
					setSuccessFor(password);
				}
			}
			if (passwordConfirm !== null) {
				passwordConfirmValue = passwordConfirm.value.trim();

				if (!passwordConfirmValue) {
					setErrorFor(passwordConfirm, 'write again your password');
				} else if (passwordValue !== passwordConfirmValue) {
					setErrorFor(passwordConfirm, 'does not match');
				} else {
					setSuccessFor(passwordConfirm);
				}
			}
			if (phone !== null) {
				phoneValue = phone.value.trim();

				if (!phoneValue) {
					setErrorFor(phone, 'phone cannot be blank');
				} else if (!isPhone(phoneValue)) {
					setErrorFor(phone, 'phone is not valid');
				} else {
					setSuccessFor(phone);
				}
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
	const isPhone = (phone) => {
		return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(phone);
	};
}
