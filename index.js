

search =()=>{
        const inputField = document.getElementById('inputField');
        const bookCard = document.getElementById('bookCard');
        const totalFound = document.getElementById('found');
        const emptyInput =document.getElementById('emptyInput');
        const error =document.getElementById('error');

        const inputValue =inputField.value;
        bookCard.textContent ='';
        totalFound.innerText ='';
if(inputValue === ''){
    sppiner('hidden')
    emptyInput.style.display='block';
    error.style.display='none';
    totalFound.innerText ='';
    bookCard.textContent ='';
}else {
    sppiner('visible')
    emptyInput.style.display='none'
    //  book url
    const url = `http://openlibrary.org/search.json?q=${inputValue}`
    console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=> {
            displayWeather(data)

        })
}
inputField.value= '';
}


displayWeather =(data)=>{
    const totalFound = document.getElementById('found');
    totalFound.innerText =`Result Found :${data.numFound}`;
    
console.log("daattta",data);

// const cardItem =document.getElementById('cardItem');
//     cardItem.textContent ='';


// console.log(meal.length);
const error =document.getElementById('error');
if (data.numFound == 0){
    totalFound.innerText= '';
    error.style.display='block';
    sppiner('hidden')
}else {
    error.style.display='none'
    const bookCard = document.getElementById('bookCard');
    
    
    data?.docs.forEach(item =>{
       const div =document.createElement('div');
       
    //    conditionaly image show 
      item?.cover_i
      ? imgUrl = `https://covers.openlibrary.org/b/id/${item?.cover_i}-M.jpg`
      :imgUrl = "images/error.png"
      


       div.innerHTML = `
       <div class="col">
           <div class="card">
            
                <img height='450px'  src=${imgUrl}  class="card-img-top" alt="...">
            
             
           
              
               <div class="card-body">
                   <h5 id="author" class="card-title">${item?.title}</h5>
                   <p class="card-text">${item?.author_name[0]}</p>
               </div>
           </div>
       </div>
       `;
      bookCard.appendChild(div) ;
      sppiner('hidden')
    })
}
    
    
}



// sppiner function 
sppiner = (property)=>{
    const sppiner = document.getElementById('sppiner');
    sppiner.style.visibility= property
    }