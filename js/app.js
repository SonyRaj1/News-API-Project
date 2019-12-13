const SportsApiUrl =`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=18a4306b89ee469e962ae3d2e22f76bd`
window.fetch(SportsApiUrl).then(data => {
    data.json().then(sportsnews => {
        console.log(sportsnews)
       let sportsData = sportsnews.articles;
       let output ="";
       for (let sports of sportsData){
       output +=`
      
       <h1 class="h1Title"><a href ="${SportsApiUrl}" target-block>${sports.title}</h1>
       <p>${sports.description}</p>
       <img src="${sports.urlToImage}"/>
       <p>${sports.publishedAt}</p>
       `;
    }
    document.getElementById("left").innerHTML = output;
    })
    .catch(err => console.log(err));
})
.catch(err => console.log(err));

//time javascript
setInterval(() => {
    var time= new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML=time;
},1000);


const EntertainmentApiUrl =`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=18a4306b89ee469e962ae3d2e22f76bd`
window.fetch(EntertainmentApiUrl).then(data => {
    data.json().then(entertainmentnews => {
        console.log(entertainmentnews)
       let entertainmentData = entertainmentnews.articles;
       let output ="";
       for (let entertainments of entertainmentData){
       output +=`
      
       <h1 class="h1Title"><a href="${EntertainmentApiUrl}" target-block>${entertainments.title}</h1>
       <p>${entertainments.description}</p>
       <img src="${entertainments.urlToImage}"/>
       <p>${entertainments.publishedAt}</p>
       `;
    }
    document.getElementById("right").innerHTML = output;
    })
    .catch(err => console.log(err));
})
.catch(err => console.log(err));


const TopHeadlineApiUrl=`https://newsapi.org/v2/top-headlines?country=in&apiKey=18a4306b89ee469e962ae3d2e22f76bd`
window.fetch(TopHeadlineApiUrl).then(data => {
    data.json().then(TopHeadlinenews => {
        console.log(TopHeadlinenews)
       let TopHeadlineData = TopHeadlinenews.articles;
       let output ="";
       for (let TopHeadline of TopHeadlineData){
       output +=`
      
       <h1 class="h1Title"><a href ="${TopHeadlineApiUrl}" target-block>${TopHeadline.title}</h1>
       <p>${TopHeadline.description}</p>
       <img src="${TopHeadline.urlToImage}"/>
       <p>${TopHeadline.publishedAt}</p>
       `;
    }
    document.getElementById("middle").innerHTML = output;
    })
    .catch(err => console.log(err));
})
.catch(err => console.log(err));