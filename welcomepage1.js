const btnLogout = document.getElementById('btnLogout');
const btnFavorite = document.getElementById('btnFavorite')

let usersRef = database.ref('users')

btnLogout.addEventListener('click', e => {
    auth.signOut()
    .then(() => {
        window.location.href = "index1.html";
    })
    .catch(error => {
        console.log(error)
    })
});

let favorites = []

function changeColor() {
    let heartColor = document.getElementById('btnFavorite').style.color;
    if (heartColor == "red") {
        document.getElementById('btnFavorite').style.color = "gray"
    } else {
        document.getElementById('btnFavorite').style.color = "red"
    }
}
let favoriteRef = null

btnFavorite.addEventListener('click', function(){
    let favorite = new Favorite("1234", "Hello", "World", "brian", "www.brian.brian")  
    if(btnFavorite.style.color == "red") {
        database.ref(`users/${uid}/favorites/${this.className}`).remove()
    } else {
        favoriteRef = usersRef.child('f02akz70crTLktn8aC9QALUjgUz1').child("favorites").push(favorite)
        btnFavorite.className = favoriteRef.getKey()
    }
    changeColor()
})

class Favorite {
    constructor(favoriteId, headline, byline, snippet, url) {
        this.favoriteId = favoriteId 
        this.headline = headline 
        this.byline = byline
        this.snippet = snippet
        this.url = url 
    }
}