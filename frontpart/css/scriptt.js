var x = 0;
var a = 0;
var j = 0;
var empname = Array();
var n;
var m=0;
var csvFileData = Array();

function day()
{

 m = document.getElementById("empNo").value

while(a<m)
{
if(a%3==0)
{
 csvFileData.push([empname[j],'1 sh','2 sh','2 sh','1 sh','2 Sh','OFF','OFF'])

  var csv = 'Employee Name,Monday,Thuesday,Wednesday,Thrusday,Friday,Saturday,Sunday\n';  
      
     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });   
           
}
else if(a%3==1)
{
csvFileData.push([empname[j],'2 sh','OFF','OFF','2 sh','1 Sh','1 sh','2 sh'])  


  var csv = 'Employee Name,Monday,Thuesday,Wednesday,Thrusday,Friday,Saturday,Sunday\n';  
      
     csvFileData.forEach(function(row) {  
            csv += row.join(',');  
            csv += "\n";  
    });  
}
else
{
   csvFileData.push([empname[j],'2 sh','1 sh','1 sh','OFF','OFF','2 sh','1 sh'])  

  var csv = 'Employee Name,Monday,Thuesday,Wednesday,Thrusday,Friday,Saturday,Sunday\n';  
      
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
hiddenElement.download = 'weeklyRoster2shifts/day.xls';  
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

}


