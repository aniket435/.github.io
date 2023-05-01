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
 csvFileData.push([empname[j],'OFF','OFF','1 sh','1 sh','2 Sh','2 sh','1 sh','2 sh','2 sh','1 sh','OFF','OFF','1 sh','2 sh','2 sh','1 sh','OFF','OFF','1 sh','2 sh','1 sh','OFF','OFF','1 sh','1 sh','2 sh','2 sh','1 sh','1 sh','2 sh','2 sh'])

  var csv = 'Employee Name,1 JUL,2 JUL,3 JUL,4 JUL,5 JUL,6 JUL,7 JUL, 8 JUL,9 JUL,10 JUL,11 JUL,12 JUL,13 JUL,14 JUL,15 JUL,16 JUL,17 JUL,18 JUL,19 JUL,20 JUL,21 JUL,22 JUL,23 JUL,24 JUL,25 JUL,26 JUL,27 JUL,28 JUL,29 JUL,30 JAN,31 JUL\n';  
      
     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });   
           
}
else if(a%3==1)
{
csvFileData.push([empname[j],'2 sh','1 sh','2 sh','2 sh','OFF','OFF','2 sh','1 sh','1 sh','2 sh','2 sh','1 sh','OFF','OFF','1 sh','2 sh','1 sh','2 sh','2 sh','OFF','OFF','1 sh','2 sh','2 sh','OFF','OFF','1 sh','2 sh','2 sh','1 sh','1 sh'])  


  var csv = 'Employee Name,1 JUL,2 JUL,3 JUL,4 JUL,5 JUL,6 JUL,7 JUL, 8 JUL,9 JUL,10 JUL,11 JUL,12 JUL,13 JUL,14 JUL,15 JUL,16 JUL,17 JUL,18 JUL,19 JUL,20 JUL,21 JUL,22 JUL,23 JUL,24 JUL,25 JUL,26 JUL,27 JUL,28 JUL,29 JUL,30 JAN,31 JUL\n'; 
      
     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });  
}
else
{
  csvFileData.push([empname[j],'1 sh','2 SH','OFF','OFF','1 SH','1 SH','2 sh','OFF','OFF','1 sh','2 sh','2 sh','2 SH','1 SH','OFF','OFF','2 sh','1 sh','2 sh','1 SH','2 SH','2 sh','1 sh','1 sh','2 SH','1 SH','OFF','OFF','2 sh','2 sh','1 sh'])  
  

var csv = 'Employee Name,1 JUL,2 JUL,3 JUL,4 JUL,5 JUL,6 JUL,7 JUL, 8 JUL,9 JUL,10 JUL,11 JUL,12 JUL,13 JUL,14 JUL,15 JUL,16 JUL,17 JUL,18 JUL,19 JUL,20 JUL,21 JUL,22 JUL,23 JUL,24 JUL,25 JUL,26 JUL,27 JUL,28 JUL,29 JUL,30 JAN,31 JUL\n'; 
      
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
hiddenElement.download = 'JUL_MonthlyRoster2shifts/day.xls';  
    hiddenElement.click();   
   }

function days()
{
o = document.getElementById("empNo").value

while(y<o)
{
if(y%4==0)
{
 csvFileData.push([empname[k],'OFF','OFF','1 sh','3 sh','2 Sh','2 sh','1 sh','2 sh','3 sh','2 sh','1 SH','OFF','OFF','3 sh','1 sh','2 sh','OFF','OFF','3 sh','1 sh','2 sh','1 SH','2 SH','OFF','OFF','3 sh','1 sh','2 sh','1 sh','2 sh','3 sh'])

 var csv = 'Employee Name,1 JUL,2 JUL,3 JUL,4 JUL,5 JUL,6 JUL,7 JUL, 8 JUL,9 JUL,10 JUL,11 JUL,12 JUL,13 JUL,14 JUL,15 JUL,16 JUL,17 JUL,18 JUL,19 JUL,20 JUL,21 JUL,22 JUL,23 JUL,24 JUL,25 JUL,26 JUL,27 JUL,28 JUL,29 JUL,30 JAN,31 JUL\n'; 
      
     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });   
           
}
else if(y%4==1)
{
csvFileData.push([empname[k],'2 sh','3 sh','2 sh','2 sh','OFF','OFF','3 sh','1 sh','2 sh','OFF','OFF','3 sh','1 SH','2 SH','2 sh','3 sh','2 sh','1 sh','OFF','OFF','3 SH','2 sh','3 sh','2 sh','2 SH','OFF','OFF','3 sh','3 sh','2 sh','1 sh'])  


var csv = 'Employee Name,1 JUL,2 JUL,3 JUL,4 JUL,5 JUL,6 JUL,7 JUL, 8 JUL,9 JUL,10 JUL,11 JUL,12 JUL,13 JUL,14 JUL,15 JUL,16 JUL,17 JUL,18 JUL,19 JUL,20 JUL,21 JUL,22 JUL,23 JUL,24 JUL,25 JUL,26 JUL,27 JUL,28 JUL,29 JUL,30 JAN,31 JUL\n'; 
      
     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });  
}
else if(y%4==2)
{
   csvFileData.push([empname[k],'1 sh','2 SH','OFF','OFF','3 SH','1 SH','2 sh','OFF','OFF','3 sh','2 sh','1 sh','2 SH','3 SH','OFF','OFF','1 sh','3 sh','2 sh','2 SH','1 SH','OFF','OFF','1 sh','3 SH','2 SH','2 SH','1 SH','2 sh','3 sh','1 sh'])  

 var csv = 'Employee Name,1 JUL,2 JUL,3 JUL,4 JUL,5 JUL,6 JUL,7 JUL, 8 JUL,9 JUL,10 JUL,11 JUL,12 JUL,13 JUL,14 JUL,15 JUL,16 JUL,17 JUL,18 JUL,19 JUL,20 JUL,21 JUL,22 JUL,23 JUL,24 JUL,25 JUL,26 JUL,27 JUL,28 JUL,29 JUL,30 JAN,31 JUL\n'; 

     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });    
}

else
{

csvFileData.push([empname[k],'3 sh','1 SH','3 SH','1 SH','1 SH','OFF','OFF','3 SH','1 SH','2 sh','3 sh','2 sh','OFF','OFF','3 SH','1 SH','3 sh','2 sh','1 sh','OFF','OFF','3 sh','1 sh','3 sh','1 SH','1 SH','OFF','OFF','3 sh','1 sh','2 sh'])  

 var csv = 'Employee Name,1 JUL,2 JUL,3 JUL,4 JUL,5 JUL,6 JUL,7 JUL, 8 JUL,9 JUL,10 JUL,11 JUL,12 JUL,13 JUL,14 JUL,15 JUL,16 JUL,17 JUL,18 JUL,19 JUL,20 JUL,21 JUL,22 JUL,23 JUL,24 JUL,25 JUL,26 JUL,27 JUL,28 JUL,29 JUL,30 JAN,31 JUL\n'; 

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
hiddenElement.download = 'Jul_MonthlyRoster3shifts/day.xls';  
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


