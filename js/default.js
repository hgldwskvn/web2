var separate_time=function(time){
 var min =time.getMinutes();
 var hours =time.getHours();
 var days =time.getDate();
 var month =time.getMonth();
 var year =time.getFullYear();
 return[hours,min,days,month,year];
 }
 
 var now=new Date();
 var counter=separate_time(now);
 document.getElementById('countdown').textContent=
   counter[4]+'年'+
   counter[3]+'月'+
   counter[2]+'日'+
   counter[1]+'時'+
   counter[0]+'分'+
