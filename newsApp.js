let articleDisplay = document.getElementById("articleDisplay")
let maxDay = document.getElementById("dateInput")
let submitSearchButton = document.getElementById("submitSearchButton")
let dateInput = document.getElementById("dateInput")

//function to get the max date as today
function maxInputDay(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0
    let yyyy = today.getFullYear();
    if(dd < 10){
        dd = '0'+ dd
    }
    if(mm < 10){
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    maxDay.setAttribute("max", today);
 }
 maxInputDay()



searchButton.addEventListener('click', () => {

    let dateToSearch = dateInput.value.split("-");
    monthToSearch = dateToSearch[1];
    yearToSearch = dateToSearch[0]
    console.log(dateToSearch)
    let newsURL = https://api.nytimes.com/svc/archive/v1/${yearToSearch}/${monthToSearch}.json?api-key=AwnbJmlF5QhUDWKddI3arHnH4z7sWClJ
    console.log(newsURL)

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