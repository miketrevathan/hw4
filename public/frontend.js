var httpGet = function(theUrl)
{
    console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        console.log(xmlHttp.responseText);
        if(xmlHttp.responseText == "pass"){
        document.getElementById('user').style.display = "block";
        document.getElementById('logo').style.display = "none";
        } 
        if(xmlHttp.responseText == "invalid"){
            alert("Invalid Username or Passoword");
        }
        };
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send();
}
//1. Take username and password on button click (from client)
var getUser = function(){
    var username = document.getElementById('userEmail').value;
    var password = document.getElementById('userPassword').value;
    var theUrl = '/users/'+username+'/'+password;
    httpGet(theUrl); //call function at top (order 2)
    };

//var disp = function(){
  // document.getElementById("user").style.displace = "none";
//}
    

    
    //Steps:
    
    //2. Send to server (request)
    //3. Recieve on server 
    //4. verify in JSON database
    //5. Respond to client (respond)
    //Recieve on client side
    //6. Unhide HTML for approved clients
    //7. Alert client if not correct username/password
    //8. Potentially encrypt


