function timesTable(n){
  for (var n=1; n<=10; n++) {
    document.write('<div style="float: left; margin: 25px 10px;">') 
      for (i=1; i<=10; i++) {   
        document.write(n + ' x ' + i + ' = ' + n*i + '</br>');    
      }
    document.write('</div>')  
  }}
