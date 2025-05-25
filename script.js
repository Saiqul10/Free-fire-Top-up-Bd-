
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBiy53aRqOyjJEwzIXA3qqOcJwCaSUj5NY",
  authDomain: "free-fire-top-up-bd-a0480.firebaseapp.com",
  projectId: "free-fire-top-up-bd-a0480",
  storageBucket: "free-fire-top-up-bd-a0480.firebasestorage.app",
  messagingSenderId: "299599561603",
  appId: "1:299599561603:web:ebc2398ae62d5f9431acb6",
  measurementId: "G-HL7SWVSD83"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

function signup() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, pass)
    .then(() => alert("Account created. Now login."))
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
      document.getElementById("auth").style.display = "none";
      document.getElementById("form").style.display = "block";
    })
    .catch(err => alert(err.message));
}

function submitOrder() {
  const uid = document.getElementById("uid").value;
  const pkg = document.getElementById("package").value;
  const payment = document.getElementById("payment").value;

  database.ref("orders").push({
    uid: uid,
    package: pkg,
    payment: payment,
    time: new Date().toString()
  }).then(() => alert("Order Submitted!"));
}
