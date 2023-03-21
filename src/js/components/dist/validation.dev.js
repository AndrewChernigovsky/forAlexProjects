"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validation = validation;
var formList = document.querySelectorAll('.js-form-block');
var inputInfoError = {
  mesEng: 'Field cannot be blank',
  mesRus: 'Поле должно быть заполнено'
};
var errorInfoUsername = {
  eng1: 'Username not valid',
  rus1: 'Имя введено некорректно'
};
var errorInfoPassword = {
  eng: 'Username cannot be blank',
  eng1: 'Username not valid',
  eng2: 'it have to contains a upper, lower and a number',
  eng3: 'write again your password',
  eng4: 'does not match',
  rus: 'Поле должно быть заполнено',
  rus1: 'Пароль введен некорректно',
  rus2: 'Необходимы заглавные буквы, низкие и цифры',
  rus3: 'Введите снова ваш пароль',
  rus4: 'Нет совпадений',
  rus5: 'Пароль должен быть больше 8 символов'
};

function validation() {
  if (!formList.length) return;
  formList.forEach(function (form) {
    return attachEvents(form);
  });

  function attachEvents(parent) {
    var formInputList = parent.querySelectorAll('input[data-name]');
    var username = parent.querySelector("input[data-name='name']");
    var email = parent.querySelector("input[data-name='email']");
    var password = parent.querySelector("input[data-name='password']");
    var passwordConfirm = parent.querySelector("input[data-name='passwordConfirm']");
    var phone = parent.querySelector("input[data-name='phone']");
    var iconsPasswordList = parent.querySelectorAll("span[data-icon='icon']");
    if (!formInputList.length) return;

    var checkInputs = function checkInputs() {
      var usernameValue;
      var emailValue;
      var passwordValue;
      var passwordConfirmValue;
      var phoneValue;
      var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

      if (username !== null) {
        usernameValue = username.value.trim();

        if (!usernameValue) {
          setErrorFor(username, inputInfoError.mesRus);
        } else {
          setSuccessFor(username);
        }
      }

      if (email !== null) {
        emailValue = email.value.trim();

        if (!emailValue) {
          setErrorFor(email, inputInfoError.mesRus);
        } else if (!isEmail(emailValue)) {
          setErrorFor(email, errorInfoUsername.rus1);
        } else {
          setSuccessFor(email);
        }
      }

      if (password !== null) {
        passwordValue = password.value.trim();

        if (!passwordValue) {
          setErrorFor(password, inputInfoError.mesRus);
        } else if (passwordValue.length < 8) {
          setErrorFor(password, errorInfoPassword.rus5);
        } else if (!passwordValue.match(passwordRegex)) {
          setErrorFor(password, errorInfoPassword.rus2);
        } else {
          setSuccessFor(password);
        }
      }

      if (passwordConfirm !== null) {
        passwordConfirmValue = passwordConfirm.value.trim();

        if (!passwordConfirmValue) {
          setErrorFor(passwordConfirm, inputInfoError.mesRus);
        } else if (passwordValue !== passwordConfirmValue) {
          setErrorFor(passwordConfirm, errorInfoPassword.rus4);
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

    iconsPasswordList.forEach(function (icon) {
      icon.addEventListener('click', function () {
        icon.classList.toggle('show');
        icon.classList.contains('show') ? password.type = 'text' && (passwordConfirm.type = 'text') : password.type = 'password' && (passwordConfirm.type = 'password');
      });
    });
    parent.addEventListener('submit', function (e) {
      e.preventDefault();
      checkInputs();
    });
  }

  var setErrorFor = function setErrorFor(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
  };

  var setSuccessFor = function setSuccessFor(input) {
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
  };

  var isEmail = function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };

  var isPhone = function isPhone(phone) {
    return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(phone);
  };
}