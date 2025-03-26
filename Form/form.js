
function addData(){
    var username = document.getElementById("username");
     var message = document.getElementById("message");
    // console.log(username.value, message.value);
    postData(username, message)
}
function postData(username, message){
    if (username.value == "" || message.value == ""){
        alert("Add Username and Message")
    }
    else{
    // console.log(username, message)
    var url ="http://localhost:3000/users"
    var options = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "username": username.value, 
             "message" : message.value            // (if key and value are same then no need to mention both)  
           
        })
    }
}
fetch(url, options)
     .then(response => {
        if (response.ok){
            // alert("Data added successfully");
            console.log("Data added")
            displayData();
            // alert("Data added successfully");
            // username.value = ""
            // message.value = ""

        }
     }).catch(err => {
              alert("Something is fishy");
              console.error(err);
     })

}
function displayData(){
    var container = document.getElementById("container");
    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(data => {
            for (var obj of data){
                //creating elements for every new object
                var item = document.createElement("div");   //empty div tag will be created  <div> </div>
                item.className = "item m-2 p-2 border border-3 border-info fs-3 text-uppercase"  // <div class = "item"> </div> , class name is added

                var usernamePara = document.createElement("p");  
                var messagePara = document.createElement("p");

                //accessing data from obj
                var{username, message} = obj;

                //adding data into paragraph
                usernamePara.innerText = username;   //<p>Siva Sree</p>
                messagePara.innerText = message;     //<p> I'm happy</p>

                //adding paragraph into item <div class = "item"> </div>
                item.appendChild(messagePara);  //<div class = "item"> <p>I'm happy</p> </div>
                item.appendChild(usernamePara);//<div class = "item"> <p>I'm happy</p> <p>Siva Sree</p> </div>
                container.appendChild(item);

                
            }

        })
      
}
displayData();