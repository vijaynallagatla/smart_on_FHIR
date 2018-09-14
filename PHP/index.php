<?php


?>
<!DOCTYPE HTML>
<html>
<head>
	
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body>
	<?php
	$patientName=$_REQUEST['name'];
	
	//$URL=$URL.$patientName;
	$data=file_get_contents("https://fhir-open-api-dstu2.smarthealthit.org/Patient?name=".$patientName);
	$jsonData=json_encode($data);
	
	echo $jsonData;
	?>
</body>
</html>
