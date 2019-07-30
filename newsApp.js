let articleDisplay = document.getElementById("articleDisplay")
let maxDay = document.getElementById("dateInput")
//let submitSearchButton = document.getElementById("submitSearchButton")
let dateInput = document.getElementById("dateInput")
let displayDate = document.getElementById("displayDate")
document.getElementById("submitForm").addEventListener("submit", submitFunction);
let newsDesk = document.getElementById("newsDesk")

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



function submitFunction() {
    event.preventDefault()

    let dateToSearch = dateInput.value.split("-");
    monthToSearch = dateToSearch[1];
    monthToSearch = parseInt(monthToSearch);
    yearToSearch = dateToSearch[0]
    dayToSearch = dateToSearch[2]
    console.log(dateToSearch)
    let newsURL = `https://api.nytimes.com/svc/archive/v1/${yearToSearch}/${monthToSearch}.json?api-key=GFEciqybc9QEdFHWzX02J6O85EHFpJah`

    let displayTheDate = monthToSearch + '/' + dayToSearch + '/' + yearToSearch

    displayDate.innerHTML = displayTheDate

    async function displayArticles () {

        let response = await fetch(newsURL) //makes touch with the URL
        let json = await response.json() //access the data at the URL
        let articles = (Object.values(json)) //makes array of info in json

        //console.log(articles)

        let searchedArticles = articles[1].docs.map (article => {

            //if there is a filter return the filter, else return everything if newsdesk == article.newsdesk
            console.log(article.news_desk)
            if ((article.pub_date.slice(0,10)) === dateInput.value && (article.news_desk == newsDesk.value)) {
                console.log(newsDesk.value)
            return`<div class="relevantArticles"
                    <h2>${article.headline.main ? article.headline.main : "Title Unknown"}</h2>
                    <h4>${article.byline ? article.byline.original : "Author Unknown"}</h4>
                    <p>${article.snippet ? article.snippet : "Snippet Unavailable"}</p>
                    <p>${article.web_url ? article.web_url : "URL Unavailable"}</p>
                    <p>${article.news_desk ? article.news_desk : "News Desk Unavailable"}</p>
                    <span>${article._id}</span>
                    </div>`
/*
            } else if((article.pub_date.slice(0,10))=== dateInput.value){
                return`<div class="relevantArticles"
                <h2>${article.headline.main ? article.headline.main : "Title Unknown"}</h2>
                <h4>${article.byline ? article.byline.original : "Author Unknown"}</h4>
                <p>${article.snippet ? article.snippet : "Snippet Unavailable"}</p>
                <p>${article.web_url ? article.web_url : "URL Unavailable"}</p>
                <p>${article.news_desk ? article.news_desk : "News Desk Unavailable"}</p>
                <span>${article._id}</span>
                </div>`               
*/
            }
        })

       articleDisplay.innerHTML = searchedArticles.join('')
       
    }
    
    displayArticles()

}