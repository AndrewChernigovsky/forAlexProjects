const $form = $("form[name='registration']");
// const $successMsg = $('.alert')

export function validation() {
	const form = document.querySelectorAll("form");

	const username = document.querySelector("input[data-name='name']");
	const email = document.querySelector("input[data-name='email']");
	const password = document.querySelector("input[data-name='password']");
	const passwordConfirm = document.querySelector("input[data-name='passwordConfirm']");


	form.forEach((el) => {
		el.addEventListener('submit', (e) => {
			e.preventDefault();
			checkInputs();
		});
	})

	const checkInputs = () => {
		// Get values from the inputs
		const usernameValue = username.value.trim();
		const emailValue = email.value.trim();
		const passwordValue = password.value.trim();
		const passwordConfirmValue = passwordConfirm.value.trim();

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

		if (!passwordConfirmValue) {
			//Show error
			//Add error class
			setErrorFor(passwordConfirm, 'write again your password');
		} else if (passwordValue !== passwordConfirmValue) {
			//Add succes class
			setErrorFor(passwordConfirm, 'does not match');
		} else {
			//Add succes class
			setSuccessFor(passwordConfirm);
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
}

// const togglePassword = () => {
// 	const psw = document.getElementById('password');

// 	if (psw.type === 'password') {
// 		psw.type = 'text';
// 		show.style.visibility = 'hidden';
// 		hide.style.visibility = 'visible';
// 	} else {
// 		psw.type = 'password';
// 		show.style.visibility = 'visible';
// 		hide.style.visibility = 'hidden';
// 	}
// };

// const toggleConfirm = () => {
// 	const confirm = document.getElementById('passwordConfirm');

// 	if (confirm.type === 'password') {
// 		confirm.type = 'text';
// 		show2.style.visibility = 'hidden';
// 		hide2.style.visibility = 'visible';
// 	} else {
// 		confirm.type = 'password';
// 		show2.style.visibility = 'visible';
// 		hide2.style.visibility = 'hidden';
// 	}
// };

// export default {togglePassword, toggleConfirm}