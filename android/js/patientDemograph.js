var BASE_URL = "https://fhir-open-api-dstu2.smarthealthit.org";
var jsonData;
function patientDemograph(patient) {	
	/*Retrieve Patient Details*/
	var xmlhttpPatient = new XMLHttpRequest(); 
	var url = BASE_URL + "/Patient?_id=" + patient;
	xmlhttpPatient.open('GET',url,true);
	xmlhttpPatient.setRequestHeader ("Accept", "application/json");
	xmlhttpPatient.send();
	xmlhttpPatient.onreadystatechange = function() {
		if (xmlhttpPatient.readyState == 4) {
			if ( xmlhttpPatient.status == 200) {
				loadDemograph(xmlhttpPatient.responseText);
			}
			else{
			  	return ("Error ->" + xmlhttpPatient.responseText);
			}
		}
	};
}

function loadDemograph(patient){
	var jsonData = JSON.parse(patient)
	if(jsonData.entry){
		var len=jsonData.entry.length;
		var str;
		var out="";
		document.getElementById("patient").innerHTML="Patient Details";	
			var p_id = jsonData.entry[0].resource.id;
			
			out+="<center><div class='profilePic'><img src='images/profilePic.png' class='img-circle' height='100' width='100'/></div><p style='font-size:16pt;weight:bold;'>";
			if(jsonData.entry[0].resource.name[0].family && jsonData.entry[0].resource.name[0].given)
			{
				out+= jsonData.entry[0].resource.name[0].given+" "+jsonData.entry[0].resource.name[0].family;
				
			}
			else
			{
				out+= jsonData.entry[0].resource.name[0].given;
				
			}
			
			out+="</p><a href='#basicDetails' class='w3-btn-block w3-dark-grey w3-padding-large' data-toggle='collapse' style='font-family:calibri; font-size: 150%;font-weight: bold;'>Basic Details</a>  <div id='basicDetails' class='collapse'><div class='w3-card-4'><header class='w3-container w3-light-grey'></header><table class='w3-table w3-hoverable w3-medium'>";
		
			out+= "<tr><td>MR Number : </td><td>"+jsonData.entry[0].resource.identifier[0].value+"</td></tr>";
			out+= "<tr><td>Gender : </td><td>"+jsonData.entry[0].resource.gender+"</td></tr>";
			out+= "<tr><td>Date of Birth : </td><td>"+jsonData.entry[0].resource.birthDate+"</td></tr>";
			out+= "<tr><td>Contact Number : </td><td>"+jsonData.entry[0].resource.telecom[1].value+"</td></tr>";
			out+= "<tr><td>Address : </td><td>"+jsonData.entry[0].resource.address[0].use+", ";
			out+= jsonData.entry[0].resource.address[0].line+", ";
			out+=jsonData.entry[0].resource.address[0].city+", ";
			out+= jsonData.entry[0].resource.address[0].state+", ";
			out+= jsonData.entry[0].resource.address[0].postalCode+", ";
			out+= jsonData.entry[0].resource.address[0].country+"</td></tr></table></div></div>";
			
			out += "</center>";
		
		document.getElementById("patient").innerHTML = out;
}else{
	document.getElementById("patient").innerHTML = "No Data Found";
}
}
