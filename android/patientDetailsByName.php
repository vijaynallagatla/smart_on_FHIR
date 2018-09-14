

<!DOCTYPE HTML>
<html>
<head>
	
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script src="js/patientByName.js"></script>
	<script src="js/patientDemograph.js"></script>
	<link rel="stylesheet" href="css/w3.css">
	<style>
		div.card{
			padding:10px;
			margin: 5px 5px 0px 5px;
			height: 60px;
			box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
			text-align:center;
		}

	</style>
</head>
<body>
<script>
var pat="<?php echo $_REQUEST['name']; ?>";
getPatientDetailsByName(pat,20);
function loadData(patient){
	var jsonData = JSON.parse(patient)
	if(jsonData.entry){
		var len=jsonData.entry.length;
		var str;
		var out="";
		document.getElementById("patient").innerHTML="Patient Details";
		for(i = 0;i < len; i++)
		{	
			var p_id = jsonData.entry[i].resource.id;
			
			out+="<div class='card' onclick = 'patientDemograph("+p_id+")' ><a class='patientNames' id='"+i+"' ><i class='fa fa-ul'></i><span style='font-size: 16pt'>";
			if(jsonData.entry[i].resource.name[0].family && jsonData.entry[i].resource.name[0].given)
			{
				out+= jsonData.entry[i].resource.name[0].given+" "+jsonData.entry[i].resource.name[0].family;
			}
			else
			{
				out+= jsonData.entry[i].resource.name[0].given;
			}
			
			if(p_id % 2 === 0)
			{
				   out+="<span style='color:red'>*</span>" ;
			}
			
			out += "</span></p></a></div>";
		}
		document.getElementById("patient").innerHTML = out;
}else{
	document.getElementById("patient").innerHTML = "No Data Found";
}
}
</script>

<div id="patient">

</div>
<div id="count">

</div>
<p id="patientName" style="visibility:hidden">
<?php echo $_REQUEST["name"]; ?>
</p>
</body>

</html>