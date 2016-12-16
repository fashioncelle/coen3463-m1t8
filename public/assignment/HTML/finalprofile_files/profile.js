
function toggle_visibility(id) 
{
	if(document.getElementById(id).style.display == 'block')
		document.getElementById(id).style.display = 'none';
	else
		document.getElementById(id).style.display = 'block';
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