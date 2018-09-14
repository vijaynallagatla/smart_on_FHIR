var BASE_URL = "https://fhir-open-api-dstu2.smarthealthit.org";
var jsonData;
function getPatientDetailsByName(patient,count) {	
	/*Retrieve Patient Details*/
	var xmlhttpPatient = new XMLHttpRequest(); 
	var url = BASE_URL + "/Patient?name=" + patient +"&_count="+count;
	xmlhttpPatient.open('GET',url,true);
	xmlhttpPatient.setRequestHeader ("Accept", "application/json");
	xmlhttpPatient.send();
	xmlhttpPatient.onreadystatechange = function() {
		if (xmlhttpPatient.readyState == 4) {
			if ( xmlhttpPatient.status == 200) {
				loadData(xmlhttpPatient.responseText);
			}
			else{
			  	return ("Error ->" + xmlhttpPatient.responseText);
			}
		}
	};
}