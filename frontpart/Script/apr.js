var x = 0;
var a = 0;
var j = 0;
var k = 0;
var y = 0;
var n;
var m;
var o;
var empname = Array();
var csvFileData = Array();
var svFileData = Array();
function day()
{

 m = document.getElementById("empNo").value

while(a<m)
{
if(a%3==0)
{
 csvFileData.push([empname[j],'OFF','OFF','1 sh','1 sh','2 Sh','2 sh','1 sh','2 sh','2 sh','1 sh','OFF','OFF','1 sh','2 sh','2 sh','1 sh','OFF','OFF','1 sh','2 sh','1 sh','OFF','OFF','1 sh','1 sh','2 sh','2 sh','1 sh','1 sh','2 sh'])

  var csv = 'Employee Name,1 APR,2 APR,3 APR,4 APR,5 APR,6 APR,7 APR, 8 APR,9 APR,10 APR,11 APR,12 APR,13 APR, 14 APR,15 APR,16 APR,17 APR,18 APR,19 APR,20 APR,21 APR,22 APR,23 APR,24 APR,25 APR,26 APR,27 APR,28 APR,29 APR,30 APR\n';  
      
     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });   
           
}
else if(a%3==1)
{
csvFileData.push([empname[j],'2 sh','1 sh','2 sh','2 sh','OFF','OFF','2 sh','1 sh','1 sh','2 sh','2 sh','1 sh','OFF','OFF','1 sh','2 sh','1 sh','2 sh','2 sh','OFF','OFF','1 sh','2 sh','2 sh','OFF','OFF','1 sh','2 sh','2 sh','1 sh'])  


   var csv = 'Employee Name,1 APR,2 APR,3 APR,4 APR,5 APR,6 APR,7 APR, 8 APR,9 APR,10 APR,11 APR,12 APR,13 APR, 14 APR,15 APR,16 APR,17 APR,18 APR,19 APR,20 APR,21 APR,22 APR,23 APR,24 APR,25 APR,26 APR,27 APR,28 APR,29 APR,30 APR\n'; 
      
     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });  
}
else
{
  csvFileData.push([empname[j],'1 sh','2 SH','OFF','OFF','1 SH','1 SH','2 sh','OFF','OFF','1 sh','2 sh','2 sh','2 SH','1 SH','OFF','OFF','2 sh','1 sh','2 sh','1 SH','2 SH','2 sh','1 sh','1 sh','2 SH','1 SH','OFF','OFF','2 sh','2 sh'])  
  

var csv = 'Employee Name,1 APR,2 APR,3 APR,4 APR,5 APR,6 APR,7 APR, 8 APR,9 APR,10 APR,11 APR,12 APR,13 APR, 14 APR,15 APR,16 APR,17 APR,18 APR,19 APR,20 APR,21 APR,22 APR,23 APR,24 APR,25 APR,26 APR,27 APR,28 APR,29 APR,30 APR\n'; 
      
     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });    
}
a++;
j++;
}

 var hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv); 
    hiddenElement.target = '_blank'; 
hiddenElement.download = 'APR_MonthlyRoster2shifts/day.xls';  
    hiddenElement.click();   
   }

function days()
{
o = document.getElementById("empNo").value

while(y<o)
{
if(y%4==0)
{
 csvFileData.push([empname[k],'2 sh','3 sh','2 sh','2 sh','OFF','OFF','3 sh','1 sh','2 sh','OFF','OFF','3 sh','1 SH','2 SH','2 sh','3 sh','2 sh','1 sh','OFF','OFF','3 SH','2 sh','3 sh','2 sh','2 SH','OFF','OFF','3 sh','3 sh','2 sh'])

 var csv = 'Employee Name,1 APR,2 APR,3 APR,4 APR,5 APR,6 APR,7 APR, 8 APR,9 APR,10 APR,11 APR,12 APR,13 APR, 14 APR,15 APR,16 APR,17 APR,18 APR,19 APR,20 APR,21 APR,22 APR,23 APR,24 APR,25 APR,26 APR,27 APR,28 APR,29 APR,30 APR\n'; 
      
     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });   
           
}
else if(y%4==1)
{
csvFileData.push([empname[k],'OFF','OFF','1 sh','3 sh','2 Sh','2 sh','1 sh','2 sh','3 sh','2 sh','1 SH','OFF','OFF','3 sh','1 sh','2 sh','OFF','OFF','3 sh','1 sh','2 sh','1 SH','2 SH','OFF','OFF','3 sh','1 sh','2 sh','1 sh','2 sh'])  


var csv = 'Employee Name,1 APR,2 APR,3 APR,4 APR,5 APR,6 APR,7 APR, 8 APR,9 APR,10 APR,11 APR,12 APR,13 APR, 14 APR,15 APR,16 APR,17 APR,18 APR,19 APR,20 APR,21 APR,22 APR,23 APR,24 APR,25 APR,26 APR,27 APR,28 APR,29 APR,30 APR\n'; 
      
     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });  
}
else if(y%4==2)
{
   csvFileData.push([empname[k],'1 sh','2 SH','OFF','OFF','3 SH','1 SH','2 sh','OFF','OFF','3 sh','2 sh','1 sh','2 SH','3 SH','OFF','OFF','1 sh','3 sh','2 sh','2 SH','1 SH','OFF','OFF','1 sh','3 SH','2 SH','2 SH','1 SH','2 sh','3 sh'])  

var csv = 'Employee Name,1 APR,2 APR,3 APR,4 APR,5 APR,6 APR,7 APR, 8 APR,9 APR,10 APR,11 APR,12 APR,13 APR, 14 APR,15 APR,16 APR,17 APR,18 APR,19 APR,20 APR,21 APR,22 APR,23 APR,24 APR,25 APR,26 APR,27 APR,28 APR,29 APR,30 APR\n'; 

     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });    
}

else
{

csvFileData.push([empname[k],'3 sh','1 SH','3 SH','1 SH','1 SH','OFF','OFF','3 SH','1 SH','2 sh','3 sh','2 sh','OFF','OFF','3 SH','1 SH','3 sh','2 sh','1 sh','OFF','OFF','3 sh','1 sh','3 sh','1 SH','1 SH','OFF','OFF','3 sh','1 sh'])  

var csv = 'Employee Name,1 APR,2 APR,3 APR,4 APR,5 APR,6 APR,7 APR, 8 APR,9 APR,10 APR,11 APR,12 APR,13 APR, 14 APR,15 APR,16 APR,17 APR,18 APR,19 APR,20 APR,21 APR,22 APR,23 APR,24 APR,25 APR,26 APR,27 APR,28 APR,29 APR,30 APR\n'; 
      
     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });    

}
y++;
k++;
}

 var hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv); 
    hiddenElement.target = '_blank'; 
hiddenElement.download = 'APR_MonthlyRoster3shifts/day.xls';  
    hiddenElement.click();   
   }


function empDetails()
{

var n = document.getElementById("empNo").value
if(x<n)
{
 empname[x] = document.getElementById("empName").value;
 alert("Enter Next Employee name");
 x++;
 document.getElementById("empName").value = "";
 
}
else
{
alert("Choose Shifts/Day")
}
}


