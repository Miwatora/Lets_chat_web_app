 var firebaseConfig = {
      apiKey: "AIzaSyDs48yaj7siNg6S6R1geGJBtLEvFbgvxWQ",
      authDomain: "lets-chat-web-app-42fb7.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-42fb7-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-42fb7",
      storageBucket: "lets-chat-web-app-42fb7.appspot.com",
      messagingSenderId: "1073443479764",
      appId: "1:1073443479764:web:4494d8e5e44838199b9b41",
      measurementId: "G-W4QREX40BG"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
