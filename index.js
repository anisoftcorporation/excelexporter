exports.throwExcel= function(header,data,res){
var body="<table>";
var keys = Object.keys(header);
 body+="<tr>";
for(var j=0;j<keys.length;j++)
{
  
 body+="<th>"+header[keys[j]]+"</th>";
 
 }
body+="</tr>";
for(var i=0;i<data.length;i++)
{
body+="<tr>";
  for(var j=0;j<keys.length;j++)
{
  
 body+="<td>"+(data[i][keys[j]])+"</td>";
 
 }
body+="</tr>";
}
body+="</table>";

console.log('Converting and exporting to Excel');
res.writeHead(200, {'Content-Type': 'application/excel'});
  res.end(body);


}


