function myValidation()
{
	var blankinput = ("Please provide an input!")
	var firstname = joinform.firstname.value;
	var lastname = joinform.lastname.value;
	var birthday = joinform.birthday.value;
	var cnumber = joinform.cnumber.value;
	var email = joinform.email.value;
	var password = joinform.password.value;
	var birthdaypattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
	var cnumberpattern = /^([0-9\+]{1,12})$/;
	var emailpattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (
			(firstname == null || firstname == "") ||
			(lastname == null || lastname == "") ||
			(birthday == null || birthday == "") ||
			(cnumber == null || cnumber == "") ||
			(email == null || email == "") ||
			(password == null || password == "") ||
			(birthdaypattern.test(joinform.birthday.value) == false) ||
			(emailpattern.test(joinform.email.value) == false) ||
			(cnumberpattern.test(joinform.cnumber.value) == false)

		)
	{
		if (firstname == null || firstname == "")
		{
			document.getElementById("firstnamevalidation").innerHTML = blankinput;
			document.getElementById("firstname").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else
		{
			document.getElementById("firstnamevalidation").innerHTML = '';
			document.getElementById("firstname").style.boxShadow = "none";
		}
		if (lastname == null || lastname == "")
		{
			document.getElementById("lastnamevalidation").innerHTML = blankinput;
			document.getElementById("lastname").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else
		{
			document.getElementById("lastnamevalidation").innerHTML = '';
			document.getElementById("lastname").style.boxShadow = "none";
		}
		if (birthday == null || birthday == "")
		{
			document.getElementById("birthdayvalidation").innerHTML = blankinput;
			document.getElementById("birthday").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else if (birthdaypattern.test(joinform.birthday.value) == false)
		{
			document.getElementById("birthdayvalidation").innerHTML = 'Invalid date';
			document.getElementById("birthday").style.boxShadow = "0px 0px 20px #cb061a";	
		}
		else
		{
			document.getElementById("birthdayvalidation").innerHTML = '';
			document.getElementById("birthday").style.boxShadow = "none";
		}
		if (cnumber == null || cnumber == "")
		{
			document.getElementById("cnumbervalidation").innerHTML = blankinput;
			document.getElementById("cnumber").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else if (cnumberpattern.test(joinform.cnumber.value) == false)
		{
			document.getElementById("cnumbervalidation").innerHTML = 'Invalid contact number!';
			document.getElementById("cnumber").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else
		{
			document.getElementById("cnumbervalidation").innerHTML = '';
			document.getElementById("cnumber").style.boxShadow = "none";
		}
		if (email == null || email == "")
		{
			document.getElementById("emailvalidation").innerHTML = blankinput;
			document.getElementById("email").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else if (emailpattern.test(joinform.email.value) == false)
		{
			document.getElementById("emailvalidation").innerHTML = 'Invalid email!';
			document.getElementById("email").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else
		{
			document.getElementById("emailvalidation").innerHTML = '';
			document.getElementById("email").style.boxShadow = "none";
		}
		if (password == null || password == "")
		{
			document.getElementById("passwordvalidation").innerHTML = blankinput;
			document.getElementById("password").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else
		{
			document.getElementById("passwordvalidation").innerHTML = '';
			document.getElementById("password").style.boxShadow = "none";
		}
		return false;
	}
	else
	{
		alert("Success!!!")
		return true;
	}
}
function myValidation2()
{
	var blankinput = ("Please provide an input!")
	var invalidinput = ("Invalid input. Please try again")
	var firstname = messageform.firstname.value;
	var lastname = messageform.lastname.value;
	var email = messageform.email.value;
	var message = messageform.message.value;
	var emailpattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (
			(firstname == null || firstname == "") ||
			(lastname == null || lastname == "") ||
			(email == null || email == "") ||
			(message == null || message == "") ||
			(emailpattern.test(messageform.email.value) == false)
		)
	{
		if (firstname == null || firstname == "")
		{
			document.getElementById("firstnamevalidation").innerHTML = blankinput;
			document.getElementById("firstname").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else
		{
			document.getElementById("firstnamevalidation").innerHTML = '';
			document.getElementById("firstname").style.boxShadow = "none";
		}
		if (lastname == null || lastname == "")
		{
			document.getElementById("lastnamevalidation").innerHTML = blankinput;
			document.getElementById("lastname").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else
		{
			document.getElementById("lastnamevalidation").innerHTML = '';
			document.getElementById("lastname").style.boxShadow = "none";
		}
		if (email == null || email == "")
		{
			document.getElementById("emailvalidation").innerHTML = blankinput;
			document.getElementById("email").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else if (emailpattern.test(messageform.email.value) == false)
		{
			document.getElementById("emailvalidation").innerHTML = 'Invalid email!';
			document.getElementById("email").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else
		{
			document.getElementById("emailvalidation").innerHTML = '';
			document.getElementById("email").style.boxShadow = "none";
		}
		if (message == null || message == "")
		{
			document.getElementById("messagevalidation").innerHTML = blankinput;
			document.getElementById("message").style.boxShadow = "0px 0px 20px #cb061a";
		}
		else
		{
			document.getElementById("messagevalidation").innerHTML = '';
			document.getElementById("message").style.boxShadow = "none";
		}
		return false;
	}
	else
	{
		alert("Success!!!")
		return true;
	}
}
function myFunctionBasicInformation()
{

	document.getElementById("basic_information").style.display = "table";
	document.getElementById("family").style.display = "none";
	document.getElementById("work_education").style.display = "none";
	document.getElementById("contacts").style.display = "none";
	document.getElementById("favorites").style.display = "none";
	document.getElementById("photos").style.display = "none";
	document.getElementById("basic_information_button").style.color = "#FFF";
	document.getElementById("family_button").style.color = "#000";
	document.getElementById("work_education_button").style.color = "#000";
	document.getElementById("contacts_button").style.color = "#000";
	document.getElementById("favorites_button").style.color = "#000";
	document.getElementById("photos_button").style.color = "#000";
	document.getElementById("basic_information_button").style.backgroundColor = "#008B8B";
	document.getElementById("family_button").style.backgroundColor = "transparent";
	document.getElementById("work_education_button").style.backgroundColor = "transparent";
	document.getElementById("contacts_button").style.backgroundColor = "transparent";
	document.getElementById("favorites_button").style.backgroundColor = "transparent";
	document.getElementById("photos_button").style.backgroundColor = "transparent";
	document.getElementById("basic_information_arrow").style.display = "block";
	document.getElementById("family_arrow").style.display = "none";
	document.getElementById("work_education_arrow").style.display = "none";
	document.getElementById("contacts_arrow").style.display = "none";
	document.getElementById("favorites_arrow").style.display = "none";
	document.getElementById("photos_arrow").style.display = "none";
}
function myFunctionFamily()
{
	document.getElementById("basic_information").style.display = "none";
	document.getElementById("family").style.display = "table";
	document.getElementById("work_education").style.display = "none";
	document.getElementById("contacts").style.display = "none";
	document.getElementById("favorites").style.display = "none";
	document.getElementById("photos").style.display = "none";
	document.getElementById("basic_information_button").style.color = "#000";
	document.getElementById("family_button").style.color = "#FFF";
	document.getElementById("work_education_button").style.color = "#000";
	document.getElementById("contacts_button").style.color = "#000";
	document.getElementById("favorites_button").style.color = "#000";
	document.getElementById("photos_button").style.color = "#000";
	document.getElementById("basic_information_button").style.backgroundColor = "transparent";
	document.getElementById("family_button").style.backgroundColor = "#008B8B";
	document.getElementById("work_education_button").style.backgroundColor = "transparent";
	document.getElementById("contacts_button").style.backgroundColor = "transparent";
	document.getElementById("favorites_button").style.backgroundColor = "transparent";
	document.getElementById("photos_button").style.backgroundColor = "transparent";
	document.getElementById("basic_information_arrow").style.display = "none";
	document.getElementById("family_arrow").style.display = "block";
	document.getElementById("work_education_arrow").style.display = "none";
	document.getElementById("contacts_arrow").style.display = "none";
	document.getElementById("favorites_arrow").style.display = "none";
	document.getElementById("photos_arrow").style.display = "none";
}
function myFunctionWorkEducation()
{
	document.getElementById("basic_information").style.display = "none";
	document.getElementById("family").style.display = "none";
	document.getElementById("work_education").style.display = "table";
	document.getElementById("contacts").style.display = "none";
	document.getElementById("favorites").style.display = "none";
	document.getElementById("photos").style.display = "none";
	document.getElementById("basic_information_button").style.color = "#000";
	document.getElementById("family_button").style.color = "#000";
	document.getElementById("work_education_button").style.color = "#FFF";
	document.getElementById("contacts_button").style.color = "#000";
	document.getElementById("favorites_button").style.color = "#000";
	document.getElementById("photos_button").style.color = "#000";
	document.getElementById("basic_information_button").style.backgroundColor = "transparent";
	document.getElementById("family_button").style.backgroundColor = "transparent";
	document.getElementById("work_education_button").style.backgroundColor = "#008B8B";
	document.getElementById("contacts_button").style.backgroundColor = "transparent";
	document.getElementById("favorites_button").style.backgroundColor = "transparent";
	document.getElementById("photos_button").style.backgroundColor = "transparent";
	document.getElementById("basic_information_arrow").style.display = "none";
	document.getElementById("family_arrow").style.display = "none";
	document.getElementById("work_education_arrow").style.display = "block";
	document.getElementById("contacts_arrow").style.display = "none";
	document.getElementById("favorites_arrow").style.display = "none";
	document.getElementById("photos_arrow").style.display = "none";
}
function myFunctionContacts()
{
	document.getElementById("basic_information").style.display = "none";
	document.getElementById("family").style.display = "none";
	document.getElementById("work_education").style.display = "none";
	document.getElementById("contacts").style.display = "table";
	document.getElementById("favorites").style.display = "none";
	document.getElementById("photos").style.display = "none";
	document.getElementById("basic_information_button").style.color = "#000";
	document.getElementById("family_button").style.color = "#000";
	document.getElementById("work_education_button").style.color = "#000";
	document.getElementById("contacts_button").style.color = "#FFF";
	document.getElementById("favorites_button").style.color = "#000";
	document.getElementById("photos_button").style.color = "#000";
	document.getElementById("basic_information_button").style.backgroundColor = "transparent";
	document.getElementById("family_button").style.backgroundColor = "transparent";
	document.getElementById("work_education_button").style.backgroundColor = "transparent";
	document.getElementById("contacts_button").style.backgroundColor = "#008B8B";
	document.getElementById("favorites_button").style.backgroundColor = "transparent";
	document.getElementById("photos_button").style.backgroundColor = "transparent";
	document.getElementById("basic_information_arrow").style.display = "none";
	document.getElementById("family_arrow").style.display = "none";
	document.getElementById("work_education_arrow").style.display = "none";
	document.getElementById("contacts_arrow").style.display = "block";
	document.getElementById("favorites_arrow").style.display = "none";
	document.getElementById("photos_arrow").style.display = "none";
}
function myFunctionFavorites()
{
	document.getElementById("basic_information").style.display = "none";
	document.getElementById("family").style.display = "none";
	document.getElementById("work_education").style.display = "none";
	document.getElementById("contacts").style.display = "none";
	document.getElementById("favorites").style.display = "table";
	document.getElementById("photos").style.display = "none";
	document.getElementById("basic_information_button").style.color = "#000";
	document.getElementById("family_button").style.color = "#000";
	document.getElementById("work_education_button").style.color = "#000";
	document.getElementById("contacts_button").style.color = "#000";
	document.getElementById("favorites_button").style.color = "#FFF";
	document.getElementById("photos_button").style.color = "#000";
	document.getElementById("basic_information_button").style.backgroundColor = "transparent";
	document.getElementById("family_button").style.backgroundColor = "transparent";
	document.getElementById("work_education_button").style.backgroundColor = "transparent";
	document.getElementById("contacts_button").style.backgroundColor = "transparent";
	document.getElementById("favorites_button").style.backgroundColor = "#008B8B";
	document.getElementById("photos_button").style.backgroundColor = "transparent";
	document.getElementById("basic_information_arrow").style.display = "none";
	document.getElementById("family_arrow").style.display = "none";
	document.getElementById("work_education_arrow").style.display = "none";
	document.getElementById("contacts_arrow").style.display = "none";
	document.getElementById("favorites_arrow").style.display = "block";
	document.getElementById("photos_arrow").style.display = "none";
}
function myFunctionPhotos()
{
	document.getElementById("basic_information").style.display = "none";
	document.getElementById("family").style.display = "none";
	document.getElementById("work_education").style.display = "none";
	document.getElementById("contacts").style.display = "none";
	document.getElementById("favorites").style.display = "none";
	document.getElementById("photos").style.display = "table";
	document.getElementById("basic_information_button").style.color = "#000";
	document.getElementById("family_button").style.color = "#000";
	document.getElementById("work_education_button").style.color = "#000";
	document.getElementById("contacts_button").style.color = "#000";
	document.getElementById("favorites_button").style.color = "#000";
	document.getElementById("photos_button").style.color = "#FFF";
	document.getElementById("basic_information_button").style.backgroundColor = "transparent";
	document.getElementById("family_button").style.backgroundColor = "transparent";
	document.getElementById("work_education_button").style.backgroundColor = "transparent";
	document.getElementById("contacts_button").style.backgroundColor = "transparent";
	document.getElementById("favorites_button").style.backgroundColor = "transparent";
	document.getElementById("photos_button").style.backgroundColor = "#008B8B";
	document.getElementById("basic_information_arrow").style.display = "none";
	document.getElementById("family_arrow").style.display = "none";
	document.getElementById("work_education_arrow").style.display = "none";
	document.getElementById("contacts_arrow").style.display = "none";
	document.getElementById("favorites_arrow").style.display = "none";
	document.getElementById("photos_arrow").style.display = "block";
}