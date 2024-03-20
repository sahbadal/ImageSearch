const accesKey = "epKHjSj6k9qDcXo-mJimwSDDuWDUapGTte4SSzM4yNk";
const searchForm = document.getElementById('search');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('result');
const showMoreBtn = document.getElementById('btn');
const right = document.getElementById('rights');

let keyword = "";
let page = 1;

async function searchImg(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    
    if(page == 1){
        searchResult.innerHTML = "";
    }
    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
    right.style.display = "block";
    
}
searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page = 1;
    searchImg();
})

showMoreBtn.addEventListener('click',() =>{
    page++;
    searchImg();
})
