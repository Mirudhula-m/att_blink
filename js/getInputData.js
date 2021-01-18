// Get task input data from csv file in gist github


var trialData_url = "https://gist.githubusercontent.com/cognition-lab/9060a8c28ea872dca63d4722198660b7/raw/5cdb9f0214a5e6cce3a03c13aa7f9a8384c36eb0/attentional_blink.txt";
var request = new XMLHttpRequest();  
request.open("GET", trialData_url, false);   
request.send(null);  

var trialData = [];

var jsonObject = request.responseText.split(/\r?\n|\r/);
for (i = 0; i < jsonObject.length; i++) 
{
	trialwiseData_obj = {};
	trialwiseData_arr = jsonObject[i].split(',');
	trialwiseData_obj.t1_angle = parseInt(trialwiseData_arr[3]);
	trialwiseData_obj.t2_angle = parseInt(trialwiseData_arr[4]);
	trialData.push(trialwiseData_obj);
}
	//console.log(trialData[0].t1_angle);