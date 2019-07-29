const btnLogout = document.getElementById('btnLogout');

btnLogout.addEventListener('click', e => {
    window.location.href = "index.html";
    firebase.auth().signOut();
});

//Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        
    } else {
        console.log('not logged in')
    }
});