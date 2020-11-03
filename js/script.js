var myName = prompt("Enter your name first")

function sendMessage(){
	var inputMsg = document.getElementById('message').value;
	
	firebase.database().ref('messages').push().set({
		'sender' : myName,
		'message' : inputMsg
	})
	return false;
	
}

firebase.database().ref('messages').on('child_added', function(snapshot){
		
		var html = "";
		html += "<li>";
			html += snapshot.val().sender + ": " + snapshot.val().message;
		html += "</li>";
		
		document.getElementById('displayMsg').innerHTML += html;
		
	})















