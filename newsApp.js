let articleDisplay = document.getElementById("articleDisplay")
let month = document.getElementById("month")
let year = document.getElementById("year")
let searchButton = document.getElementById("searchButton")
let newsURL = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=AwnbJmlF5QhUDWKddI3arHnH4z7sWClJ"


searchButton.addEventListener('click', () => {

    async function displayArticles () {

        let response = await fetch(newsURL) //makes touch with the URL
        let json = await response.json() //access the data at the URL
        let articles = (Object.values(json)) //makes array of info in json

        let searchedArticles = articles[1].docs.map (article => {
            
            return`<div class="relevantArticles">
                    <h2>${article.headline.main ? article.headline.main: "Title Unkown"}</h2>
                    <h3>${article.byline.original ? article.byline.original:"Author Unknown"}</h3>
                    <p>${article.snippet ? article.snippet : "Snippet Unavailable"}</p>
                    <p>${article.web_url ? article.web_url : "URL Unavailable"}</p>
                    <span>${article._id}</span>`
        })

       articleDisplay.innerHTML = searchedArticles.join('')
       
    }
    
    displayArticles()

})