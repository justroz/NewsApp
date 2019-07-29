const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const errorMessage = document.getElementById('errorMessage');

let usersRef = database.ref('users')

function clearTxtBoxes() {
    txtEmail.value = ""
    txtPassword.value = ""
}

//Add login event
btnLogin.addEventListener('click', x => {
    //Get email and password
    const email = txtEmail.value;
    const password = txtPassword.value;
    clearTxtBoxes();
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(error => console.log(error.message));
    window.location.href = "welcomepage.html";
})

//Add signup event
btnSignUp.addEventListener('click', x => {
    //Get email and password
    const email = txtEmail.value;
    const password = txtPassword.value;
    clearTxtBoxes();
    const auth = firebase.auth();
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise
    .then((response) => {
        console.log(response)
        let uid = response.user.uid
        saveUser(email, password, uid)
    })
    .catch(error => {
        alert(error.message)
    });
})

function saveUser(email, password, id) {
    let user = new User(email, password, id)
    usersRef.push(user)
    .then(res => console.log('user saved'))
    .catch(error => console.log(error))
}

class User {
    constructor(email, password, uid) {
        this.email = email 
        this.password = password 
        this.userId = uid
        this.favorites = [] 
    }

    addFavorite(favorite) {
        this.favorites.push(favorite)
        console.log('favorite added')
    }
}
