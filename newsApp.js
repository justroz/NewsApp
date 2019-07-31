let articleDisplay = document.getElementById("articleDisplay")
let maxDay = document.getElementById("dateInput")
//let submitSearchButton = document.getElementById("submitSearchButton")
let dateInput = document.getElementById("dateInput")
let displayDate = document.getElementById("displayDate")
document.getElementById("submitForm").addEventListener("submit", submitFunction);
let sectionName = document.getElementById("sectionName")

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







    async function retrieveArticles (newsURL) {

        let response = await fetch(newsURL) //makes touch with the URL
        let json = await response.json() //access the data at the URL
        let articles = (Object.values(json)) //makes array of info in json
        console.log(articles)
        console.log("retrieve articles function successful")
        return articles

        //
        //let filteredDesk = null
    }

    function filterArticles(articles) {
        console.log(dateInput.value)
        let articulos = articles[1].docs
        //console.log(sectionName.value)
        let possibleSections = []
        let articleToReturn = articulos.filter(article => {
            //console.log(article.section_name)
            if(!possibleSections.includes(article.section_name)){
                possibleSections.push(article.section_name)
            }
            return (article.pub_date.slice(0, 10) === dateInput.value && article.section_name === sectionName.value)
        })
        console.log('sections   ', possibleSections)
        console.log(articleToReturn)
        console.log("filter articles function successful")
        return articleToReturn
    }

    /*
    function evaluateArticles(articlesToReturn){
        //console.log(articlesToReturn[0].includes(newsDesk.value))
        //console.log(newsDesk.value)
        let arrayOne = Object.values(articlesToReturn[0])
        
        console.log(arrayOne)

        if(arrayOne.includes(newsDesk.value)){
            displayArticles()
        }else{
            errorMessageFunction()
        }
    } */

    function displayArticles(articlesToReturn){
        searchedArticles = articlesToReturn.map(article => {

        return `<div class="relevantArticles">
        <h2>${article.headline.main ? article.headline.main : "Title Unknown"}</h2>
        <h4>${article.byline ? article.byline.original : "Author Unknown"}</h4>
        <p>${article.snippet ? article.snippet : "Snippet Unavailable"}</p>
        <p>${article.web_url ? article.web_url : "URL Unavailable"}</p>
        <p>${article.news_desk ? article.news_desk : "News Desk Unavailable"}</p>
        <span>${article._id}</span>
        </div>`

    })

        articleDisplay.innerHTML = searchedArticles.join("")
        console.log("display articles function successful")     
    
}

function errorMessageFunction(){
    articleDisplay.innerHTML = `<div>Sorry, your search did not return any articles.</div>`
}



 async function submitFunction() {
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

    let articles = await retrieveArticles(newsURL)
    let articlesToReturn = filterArticles(articles)
    console.log(articlesToReturn)
    displayArticles(articlesToReturn)




}






/*
        let searchedArticles = []
        

        if(articles[1].docs[0].includes(newsDesk.value)){






            //filteredDesk = articles[1].docs.filter(article => article.news_desk === newsDesk.value);
 
            
            if((article.pub_date.slice(0, 10)) === dateInput.value && article.news_desk === newsDesk.value){
                return `<div class="relevantArticles">
                    <h2>${article.headline.main ? article.headline.main : "Title Unknown"}</h2>
                    <h4>${article.byline ? article.byline.original : "Author Unknown"}</h4>
                    <p>${article.snippet ? article.snippet : "Snippet Unavailable"}</p>
                    <p>${article.web_url ? article.web_url : "URL Unavailable"}</p>
                    <p>${article.news_desk ? article.news_desk : "News Desk Unavailable"}</p>
                    <span>${article._id}</span>
                    </div>`
              

            
            
            
            
            }else if((article.pub_date.slice(0, 10)) === dateInput.value && newsDesk.value === ""){
                return `<div class="relevantArticles">
                    <h2>${article.headline.main ? article.headline.main : "Title Unknown"}</h2>
                    <h4>${article.byline ? article.byline.original : "Author Unknown"}</h4>
                    <p>${article.snippet ? article.snippet : "Snippet Unavailable"}</p>
                    <p>${article.web_url ? article.web_url : "URL Unavailable"}</p>
                    <p>${article.news_desk ? article.news_desk : "News Desk Unavailable"}</p>
                    <span>${article._id}</span>
                    </div>`
                      
   
                    
            }        
            
            articleDisplay.innerHTML = searchedArticles.join('')    
            
        
           })
        }else{
            searchedArticles = `<div class="relevantArticles">This does not exist.</div>` 
   
            }
     


        //console.log(searchedArticles)    

        retrieveArticles()


}




















        /*
        let searchedArticles = articles[1].docs.map (article => {

            //if there is a filter return the filter, else return everything if newsdesk == article.newsdesk
            //console.log(article.news_desk)
            
            //if ((article.pub_date.slice(0,10)) === dateInput.value) {

                let filteredDesk = searchedArticles.filter(article => article.news_desk == "Classified")
                console.log(filteredDesk)


                //console.log(article.news_desk)
            /*return`<div class="relevantArticles"
                    <h2>${article.headline.main ? article.headline.main : "Title Unknown"}</h2>
                    <h4>${article.byline ? article.byline.original : "Author Unknown"}</h4>
                    <p>${article.snippet ? article.snippet : "Snippet Unavailable"}</p>
                    <p>${article.web_url ? article.web_url : "URL Unavailable"}</p>
                    <p>${article.news_desk ? article.news_desk : "News Desk Unavailable"}</p>
                    <span>${article._id}</span>
                    </div>`
            

            //return 
            
                    
            console.log(article.news_desk)
            if ((article.pub_date.slice(0,10)) === dateInput.value && 
            (article.news_desk == newsDesk.value)) {
                console.log(newsDesk.value)
            return`<div class="relevantArticles"
                    <h2>${article.headline.main ? article.headline.main : "Title Unknown"}</h2>
                    <h4>${article.byline ? article.byline.original : "Author Unknown"}</h4>
                    <p>${article.snippet ? article.snippet : "Snippet Unavailable"}</p>
                    <p>${article.web_url ? article.web_url : "URL Unavailable"}</p>
                    <p>${article.news_desk ? article.news_desk : "News Desk Unavailable"}</p>
                    <span>${article._id}</span>
                    </div>`




            } else if((article.pub_date.slice(0,10))=== dateInput.value){
                return`<div class="relevantArticles"
                <h2>${article.headline.main ? article.headline.main : "Title Unknown"}</h2>
                <h4>${article.byline ? article.byline.original : "Author Unknown"}</h4>
                <p>${article.snippet ? article.snippet : "Snippet Unavailable"}</p>
                <p>${article.web_url ? article.web_url : "URL Unavailable"}</p>
                <p>${article.news_desk ? article.news_desk : "News Desk Unavailable"}</p>
                <span>${article._id}</span>
                </div>`               

        }
        )

       //articleDisplay.innerHTML = searchedArticles.join('')
       
    }
            
 //displayArticles() */