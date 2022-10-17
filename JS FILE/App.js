const loadNewsCatagory= ()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(data=> displayCategory(data.data.news_category))
}



const displayCategory= (categories)=>{
for(const category of categories){
    console.log(category.category_name)
    const Did=(`${category.category_id}`)
    //  fetch(url).then(res=>res.json()).then(data=>console.log(category.category_id))

const catagoryContainer= document.getElementById('catagory')
    const newCatagoryDIv= document.createElement('div')
    newCatagoryDIv.classList.add('topnav')
    
    newCatagoryDIv.innerHTML=`

 <a onclick="catagoryNewsPage(${category.category_id})"  >${category.category_name }</a>
`
catagoryContainer.appendChild(newCatagoryDIv)
}
         

}


const catagoryNewsPage= (idCode)=>{
    toggleSpiner(true);
   const url= `https://openapi.programming-hero.com/api/news/category/0${idCode}`
    

    fetch(url)
    .then(res=>res.json())
    .then(categories=> categorynewsList(categories.data))
   
}
const newsContainer= document.getElementById('newscontainer')
newsContainer.innerText='';
const categorynewsList= (categories)=>{
    console.log(categories.length)
    newsContainer.innerHTML="";
 for(category of categories){
    console.log(category)
  const newsAmount= document.getElementById('newsAmount')
        newsAmount.innerText='';
        newsAmount.innerText= `   Total News ${categories.length} 
        `
 
    const newNewsDiv = document.createElement('div')
    

    newNewsDiv.innerHTML=`
    <div class="card m-2" style="width: 15rem;">
    <img src=${category.image_url} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${category.title}</h5>
      <p class="card-text ">${category.details.slice(0,100)}</p>
    </div>
    <div class="card-body">
    <i class="fa-sharp fa-solid fa-eye"></i> ${category.total_view}
    <button onclick="openNav()" type="button" class="btn btn-success">Read More</button>
    </div>
    <ul class="list-group list-group-flush  d-flex align-items-center">
       <img class="w-25 rounded-circle mt-2" src=${category.author.img} alt=""> 
      <li class="list-group-item">${category.author.name}</li>
      <li class="list-group-item">${category.author.published_date}</li>
    </ul>
    
    </div>
    
    `
    newsContainer.appendChild(newNewsDiv)
 }
 toggleSpiner(false);
}

const toggleSpiner= isLoading=>{
    const lodarSection= document.getElementById('lodar')
    if(isLoading){
        lodarSection.classList.remove('d-none')
    }

    else{
        lodarSection.classList.add('d-none')
    }
}
const a= 'https://openapi.programming-hero.com/api/news/category/01'
catagoryNewsPage(01)


loadNewsCatagory()

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    const newsDetails= document.getElementById("mySidenav1")
    newsDetails.innerHTML=`
   <h1> ${category.title}</h1>
   <img src=${category.image_url} class="card-img-top w-50" alt="...">
   <h6>0${category.details}</h6>
    
    `
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }