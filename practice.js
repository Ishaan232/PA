var firebaseConfig = {
    apiKey: "AIzaSyDddkI29HTgNpjsJvIkwH6Bc2L1hYpQiQ4",
    authDomain: "kwitter-d7833.firebaseapp.com",
    databaseURL: "https://kwitter-d7833-default-rtdb.firebaseio.com",
    projectId: "kwitter-d7833",
    storageBucket: "kwitter-d7833.appspot.com",
    messagingSenderId: "1025027974355",
    appId: "1:1025027974355:web:d9d8807b639c13ef8d6026",
    measurementId: "G-8K4MC2GZ28"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function magic(){
 info=document.getElementById("anything").value;
firebase.database().ref("/").child(info).update({
    purpose:"addingtodatabase"
});
firebase.database().ref("/").on('value',function(snapshot){
    console.log(snapshot.val());
});
}