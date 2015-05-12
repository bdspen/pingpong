function mainfunction()  {
	var x = document.getElementById('ping-pong');
	var num = x.elements[0].value;
	var listItems ='';
	var i;
	for (var i = 1; i <= num; i++) {
			listItems += "<li>";
			if ((i % 3 === 0) && (i % 5 === 0)){
				listItems += "<b>ping-pong</b>";
			}
			else if (i % 3 === 0) {
				listItems += "<b>ping</b>";
			}
			else if (i % 5 === 0) {
				listItems += "<b>pong</b>";
			}
			else {
				listItems += i;
			}
			
			listItems += "</li>";
		}
		document.getElementById('results').innerHTML = listItems;
	}
 









