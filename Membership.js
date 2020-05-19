/*
	COMP 125 - Summer 2019
	Client-Side Web Development
	Blessing Ajiboye

    Membership Form - Assignment 4
	Field Validation - JavaScript
	Author: Tiago Franco Finotti #301041366
	Date: Jul 9th 2019

	Filename: Membership.js
*/

"use strict";

var profile = document.getElementById("profile");

function validateFirstName() {
	var fNameInput = document.getElementById("txtFirstName");
	var errorDiv = document.getElementById("fNameError");
	var result = false;
	try {
		if (fNameInput.value === "") {
			throw "Field cannot be blank.";
		}

		fNameInput.style.background = "";
		errorDiv.innerHTML = "";
		errorDiv.style.display = "none";

		profile.username = fNameInput.value;
		result = true;

	}
	catch (msg) {

		errorDiv.innerHTML = msg;
		errorDiv.style.display = "block";

		fNameInput.style.background = "rgb(255,233,233)";
	}

	finally { return result; }
}

function validateLastName() {
	var lNameInput = document.getElementById("txtLastName");
	var errorDiv = document.getElementById("lNameError");
	var result = false;
	try {
		if (lNameInput.value === "") {
			throw "Field cannot be blank.";
		}

		lNameInput.style.background = "";
		errorDiv.innerHTML = "";
		errorDiv.style.display = "none";

		profile.username += " " + lNameInput.value;
		result = true;
	}
	catch (msg) {

		errorDiv.innerHTML = msg;
		errorDiv.style.display = "block";

		lNameInput.style.background = "rgb(255,233,233)";
	}

	finally { return result; }
}

function validateAddress() {
	var addressInput = document.getElementById("txtAddress");
	var errorDiv = document.getElementById("addressError");
	var result = false;
	try {
		if (addressInput.value === "") {
			throw "Field cannot be blank.";
		}

		addressInput.style.background = "";
		errorDiv.innerHTML = "";
		errorDiv.style.display = "none";

		profile.address = addressInput.value;
		result = true;
	}

	catch (msg) {

		errorDiv.innerHTML = msg;
		errorDiv.style.display = "block";

		addressInput.style.background = "rgb(255,233,233)";
	}

	finally { return result; }
}

function validateCity() {
	var cityInput = document.getElementById("txtCity");
	var errorDiv = document.getElementById("cityError");
	var result = false;
	try {
		if (cityInput.value === "") {
			throw "Field cannot be blank.";
		}

		cityInput.style.background = "";
		errorDiv.innerHTML = "";
		errorDiv.style.display = "none";

		profile.city = cityInput.value;
		result = true;
	}
	catch (msg) {

		errorDiv.innerHTML = msg;
		errorDiv.style.display = "block";

		cityInput.style.background = "rgb(255,233,233)";
	}

	finally { return result; }
}

function validatePostal() {
	var postalInput = document.getElementById("txtPostal");
	var errorDiv = document.getElementById("postalError");
	var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
	var result = false;
	try {
		if (!regex.test(postalInput.value)) {
			throw "Invalid format. Please enter postal code in the A0A 0A0 format.";
		}
		else if (postalInput.value === "") {
			throw "Field cannot be blank."
		}

		postalInput.style.background = "";
		errorDiv.innerHTML = "";
		errorDiv.style.display = "none";

		profile.postal = postalInput.value;
		result = true;
	}
	catch (msg) {

		errorDiv.innerHTML = msg;
		errorDiv.style.display = "block";

		postalInput.style.background = "rgb(255,233,233)";
	}

	finally { return result; }
}

function validateAge() {
	var ageInput = document.getElementById("numAge");
	var errorDiv = document.getElementById("ageError");
	var result = false;
	try {
		if (ageInput.value === "") {
			throw "Field cannot be blank.";
		}
		else if (ageInput.value < 18) {
			throw "Age must be at least 18 years old.";
		}

		ageInput.style.background = "";
		errorDiv.innerHTML = "";
		errorDiv.style.display = "none";

		profile.age = ageInput.value;
		result = true;

	}
	catch (msg) {

		errorDiv.innerHTML = msg;
		errorDiv.style.display = "block";

		ageInput.style.background = "rgb(255,233,233)";
	}

	finally { return result; }
}

function validatePassword() {
	var passwordInput = document.getElementById("txtCreatePWD");
	var confirmInput = document.getElementById("txtConfirmPWD");
	var errorDiv = document.getElementById("passwordError");
	var result = false;
	try {

		if (/.{6,}/.test(passwordInput.value) === false) {
			throw "Password must be at least 6 characters.";
		} else if (passwordInput.value.localeCompare(confirmInput.value) !== 0) {
			throw "Passwords must match.";
		} else if (passwordInput.value === "") {
			throw "Field cannot be blank.";
		}

		passwordInput.style.background = "";
		confirmInput.style.background = "";
		errorDiv.style.display = "none";
		errorDiv.innerHTML = "";

		profile.password = passwordInput.value;
		result = true;

	}
	catch (msg) {

		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;

		passwordInput.style.background = "rgb(255,233,233)";
		confirmInput.style.background = "rgb(255,233,233)";
	}

	finally { return result; }
}

function validateEmail() {
	var emailInput = document.getElementById("txtEmail");
	var errorDiv = document.getElementById("emailError");
	var result = false;
	try {

		if (emailInput.value.search("@") === -1 ||
			emailInput.value.lastIndexOf(".") === -1) {
			throw "Please provide a valid email address";
		}
		else if (emailInput.value === "") {
			throw "Field cannot be blank.";
		}

		emailInput.style.background = "";
		errorDiv.innerHTML = "";
		errorDiv.style.display = "none";

		emailInput.value = emailInput.value.toLowerCase();

		profile.email = emailInput.value;
		result = true;
	}
	catch (msg) {

		errorDiv.innerHTML = msg;
		errorDiv.style.display = "block";

		emailInput.style.background = "rgb(255,233,233)";
	}

	finally { return result; }
}

function createProfile() {
	if (validateFirstName() && validateLastName() && validateAddress() && validateCity() && validatePostal() && validateAge() && validatePassword() && validateEmail()) {
		alert("Thanks for registering with our website, your customer record was created successfully.")

		document.getElementById("profileUsername").innerHTML = profile.username;
		document.getElementById("profileEmail").innerHTML = profile.email;

		profile.style.display = "block";
		document.getElementById("usernameSection").style.display = "block";
		document.getElementById("emailSection").style.display = "block";

		document.getElementById("registration").reset();
	}
}

if (window.addEventListener) {
	document.getElementById("btnSubmit").addEventListener("click", createProfile, false);
} else if (window.attachEvent) {
	document.getElementById("btnSubmit").attachEvent("onclick", createProfile);
}