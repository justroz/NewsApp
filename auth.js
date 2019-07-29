let database = null;
(function() {
    var firebaseConfig = {
    apiKey: "AIzaSyDN8XKIbmHBoS6b7MvOYDH3bXgf9u9O7zs",
    authDomain: "auth-practice-4bf18.firebaseapp.com",
    databaseURL: "https://auth-practice-4bf18.firebaseio.com",
    projectId: "auth-practice-4bf18",
    storageBucket: "auth-practice-4bf18.appspot.com",
    messagingSenderId: "203847427175",
    appId: "1:203847427175:web:93d335b461b64d84"
    };
    firebase.initializeApp(firebaseConfig);
    database = firebase.database() 
}());