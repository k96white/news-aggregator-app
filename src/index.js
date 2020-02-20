
// function to fetch news list
async function fetchNews(){
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=74fcd3dc0e724283943b64b4c43fbf1b');
    const data = await res.json();
    console.log(data);
    output= '<ul id="news-articles">'
    
    //array to fetch elements
    data.articles.forEach(i => {
        output += `<li class="article">
                        <img src=${i.urlToImage} alt="Avatar" style="width:100%">
                        <div class="article-content">
                            <h2 class="article-title"><b>${i.title}</b></h2> 
                            <p class="article-description">${i.description}</p> 
                            <span class="article-author">`;
                            if((i.author)!=null){
                                output+=`-${i.author}</span>`;
                            }
                            else{
                                output+=`-N.A</span>`;
                            }
                              
                  output += `      </div>
                        <a href=${i.url} class="article-link" target='_blank'><em>Read More At: ${i.source.name}</em></a>
        
                   </li>`;
    });
    output += '</ul>';

    document.getElementById("news-section").innerHTML=output;
    
}
fetchNews();

