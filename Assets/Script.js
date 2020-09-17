// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD2QR0ZNX-98_NbTPxjj7S3E4M9t_6-6lI",
    authDomain: "reportecambio-aac8b.firebaseapp.com",
    databaseURL: "https://reportecambio-aac8b.firebaseio.com",
    projectId: "reportecambio-aac8b",
    storageBucket: "reportecambio-aac8b.appspot.com",
    messagingSenderId: "787164328795",
    appId: "1:787164328795:web:54f7a3c547a306bba5e07e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //firebaseConfig

  var d = new Date();
  var t = d.getTime();
  var counter =t;

  document.getElementById("form").addEventListener("sumbit",(e)=>{
    var task = document.getElementById("task").value;
    var description = document.getElementById("description").value;
    e.preventDefault();
    console.log(task+description);
    form.reset();
  });