//create firebase reference
var dbRef = new Firebase("https://groccery-webapp.firebaseio.com");
var contactsRef = dbRef.child('tasks')

//load older conatcts as well as any newly added one...
contactsRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document
    .querySelector('#List')
    .innerHTML += contactHtmlFromObject(snap.val());
});

//save contact
document
  .querySelector('.addValue')
  .addEventListener("click", function( event ) {  
    event.preventDefault();
    if( document.querySelector('#task').value != '' 
          || document.querySelector('#deadline').value != '' ){
      contactsRef
        .push({
          task: document.querySelector('#task').value,
          deadline: document.querySelector('#deadline').value,
         })
        toDoList.reset();
    } else {
      alert('Please fill task name and deadline!');
    }
  }, false);

//prepare conatct object's HTML
function contactHtmlFromObject(contact){
  console.log( contact );
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div>';
      html += '<p class="lead">'+contact.task+'</p>';
      html += '<p>'+contact.deadline+'</p>';
      html += '<button class="btn btn-danger deleteData">Delete</button>'
    html += '</div>';
  html += '</li>';
  return html;
}

document.querySelector('.deleteData').addEventListener("click", function( event ) {
	
	
	alert("here");
	
	
	
}