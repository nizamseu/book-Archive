

search =()=>{
        const inputField = document.getElementById('inputField');
        const bookCard = document.getElementById('bookCard');
        const totalFound = document.getElementById('found');
        const emptyInput =document.getElementById('emptyInput');

        const inputValue =inputField.value;

if(inputValue === ''){
    sppiner('hidden')
    emptyInput.style.display='block';
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
    

    const bookCard = document.getElementById('bookCard');
     data?.docs.forEach(item =>{
        console.log(item);
       
        
        // https://openlibrary.org/books/OL7353617M.json

        const div =document.createElement('div');
        
        div.innerHTML = `
        <div class="col">
            <div class="card">
            
                <img height='450px' src="https://covers.openlibrary.org/b/id/${item?.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 id="author" class="card-title">${item?.title}</h5>
                    <p class="card-text">${item?.author_name[0]}</p>
                </div>
            </div>
        </div>
        `;
       bookCard.appendChild(div) 
     })
     sppiner('hidden')
}



// sppiner function 
sppiner = (property)=>{
    const sppiner = document.getElementById('sppiner');
    console.log(sppiner);
    sppiner.style.visibility= property
    }