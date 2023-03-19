const $form = $("form[name='registration']")
// const $successMsg = $('.alert')

export function validation() {
	const form = document.querySelector("form[name='registration']");

	const username = document.getElementById('username');
	const email = document.getElementById('email');
	const password = document.getElementById('password');
	const password2 = document.getElementById('password2');

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		checkInputs();
	});

	const checkInputs = () => {
		// Get values from the inputs
		const usernameValue = username.value.trim();
		const emailValue = email.value.trim();
		const passwordValue = password.value.trim();
		const password2Value = password2.value.trim();

		if (!usernameValue) {
			//Show error
			//Add error class
			setErrorFor(username, 'Username cannot be blank');
		} else {
			//Add succes class
			setSuccessFor(username);
		}

		if (!emailValue) {
			//Show error
			//Add error class
			setErrorFor(email, 'Email cannot be blank');
		} else if (!isEmail(emailValue)) {
			//Show error
			//Add error class
			setErrorFor(email, 'Email is not valid');
		} else {
			//Add succes class
			setSuccessFor(email);
		}

		const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
		if (!passwordValue) {
			//Show error
			//Add error class
			setErrorFor(password, 'Password cannot be blank');
		} else if (passwordValue.length < 8) {
			//Add succes class
			setErrorFor(password, 'Password to short');
		} else if (!passwordValue.match(re)) {
			//Add succes class
			setErrorFor(password, 'it have to contains a upper, lower and a number');
		} else {
			//Add succes class
			setSuccessFor(password);
		}

		if (!password2Value) {
			//Show error
			//Add error class
			setErrorFor(password2, 'write again your password');
		} else if (passwordValue !== password2Value) {
			//Add succes class
			setErrorFor(password2, 'does not match');
		} else {
			//Add succes class
			setSuccessFor(password2);
		}

		//HomeWork mostrar un mensaje de exito al hacer click y todo este correcto
	};

	const setErrorFor = (input, message) => {
		const formControl = input.parentElement; //this is the .form-control
		const small = formControl.querySelector('small');

		//add error message inside small
		small.innerText = message;

		//add error class
		formControl.className = 'form-control error';
	};

	const setSuccessFor = (input) => {
		const formControl = input.parentElement; //this is the .form-control

		//add success class
		formControl.className = 'form-control success';
	};

	const isEmail = (email) => {
		//this checks if the email is valid
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	};



	password.addEventListener('click',
		function () {
			const psw = document.getElementById('password');
			const show = document.getElementById('show');
			const hide = document.getElementById('hide');

			if (psw.type === 'password') {
				psw.type = 'text';
				show.style.visibility = 'hidden';
				hide.style.visibility = 'visible';
			} else {
				psw.type = 'password';
				show.style.visibility = 'visible';
				hide.style.visibility = 'hidden';
			}
		})

	password2.addEventListener('click',
		function () {
			const confirm = document.getElementById('password2');
			const show2 = document.getElementById('show2');
			const hide2 = document.getElementById('hide2');

			if (confirm.type === 'password') {
				confirm.type = 'text';
				show2.style.visibility = 'hidden';
				hide2.style.visibility = 'visible';
			} else {
				confirm.type = 'password';
				show2.style.visibility = 'visible';
				hide2.style.visibility = 'hidden';
			}
		})
}
