import '../styles/index.scss';


//<start> code to search for news
var inputTxt = document.getElementById("search");
inputTxt.addEventListener("keypress",searchValue);
function searchValue(e){
     var searchText = document.getElementById("search").value;
     console.log(searchText);  //for testing
     if(e.which==13){
        if(searchText!=''){
            var searchUrl = `everything?q=${searchText}`;
            beforeLoad();
            fetchNews(searchUrl);
        }   
        else{
            beforeLoad();
            fetchNews("top-headlines?country=in"); //by default it fetch news related to india
        }
    }   
}
//<end>



             //function to toggle
             document.getElementById("toggler").addEventListener("click",toogleColor);
            function toogleColor(){
                var bodyColor = document.body;
                bodyColor.classList.toggle("dark-mode");

                var btnText = document.getElementById("toggler");
                if(btnText.innerHTML === "Dark Mode")  
                {
                    btnText.innerHTML="Light Mode";
                }
                else{
                    btnText.innerHTML="Dark Mode";
                }
                
                
            }


// function to fetch news list
async function fetchNews(searchUrl){
    const res = await fetch(`https://newsapi.org/v2/${searchUrl}&apiKey=74fcd3dc0e724283943b64b4c43fbf1b`);
    const data = await res.json();
    console.log(data);
    if(data.totalResults>0){
       var output= '';
        
        //array to fetch elements
        data.articles.forEach(i => {
            output += `<li class="article">
                            <img src=${i.urlToImage} alt=${i.source.name} style="width:100%;margin-top:5px;" class="article-img">
                            
                                <h2 class="article-title"><b>${i.title}</b></h2> 
                                <p class="article-description">${i.description}</p> 
                                <span class="article-author">`;
                                if((i.author)!=null){
                                    output+=`- ${i.author}</span>`;
                                }
                                else{
                                    output+=`-N.A</span>`;
                                }
                                
                    output += `<br> <a href=${i.url} class="article-link" target='_blank'><em>Read More At: ${i.source.name}</em></a>
            
                    </li>`;
        });
        output += '';

        document.getElementById("news-articles").innerHTML=output;
    } 
    
    else if(data.totalResults===0){
       var invalidData=document.getElementById("news-section");
       invalidData.innerHTML="<h3>No article was found based on the search.</h3>";
       invalidData.style.color="red";
       invalidData.classList.add("not-found");
    }   
}
fetchNews("top-headlines?country=in"); //by default it fetch news related to india

//Take to top functionality

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

document.getElementById("myBtn").addEventListener("click",topFunction);
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}