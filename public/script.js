var config = {
  apiKey: "AIzaSyBUqQVcI1MbcCQmFRs7ZiygmIfHqkFCxms",
  authDomain: "areenglandstillintheworldcup.firebaseapp.com",
  databaseURL: "https://areenglandstillintheworldcup.firebaseio.com",
  projectId: "areenglandstillintheworldcup",
  storageBucket: "areenglandstillintheworldcup.appspot.com",
  messagingSenderId: "385160061216"
};
firebase.initializeApp(config);

firebase
  .database()
  .ref("in/")
  .once("value")
  .then(snapshot => {
    var overlay = document.querySelector(".overlay");
    overlay.classList.remove("loading");
    if (snapshot.val()) {
      document.getElementById("status").innerHTML = "YES";
    } else {
      document.getElementById("status").innerHTML = "NO";
    }
  });
