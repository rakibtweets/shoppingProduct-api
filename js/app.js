// get all the data

const loadAllItems = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> displayAllItems(data))
}

loadAllItems();

// display all items

const displayAllItems = (items) => {
    const allItemContainer = document.getElementById('show-all-items')
    // single items
    for(const item of items){
        const div = document.createElement('div')
        div.classList.add('col','d-flex','flex-column')
        div.innerHTML = `
        <div onclick = "loadSigleItems(${item.id})" class="card p-3 h-100 rounded">
            <div>
                <img src="${item.image}" class="card-img-top "  height= "300px" alt="..." />
             </div>
         <div class="card-body">
             <h5 class="card-title">${item.title}</h5>
             <h5 class="card-title"><span>$ </span>${item.price}</h5>
             <p class="card-text"> ${item.description.slice(0,100)}</p>
            <a class="btn btn-primary" href="#show-single-items">Details</a>

            </div>
         </div>
        
        `
        allItemContainer.appendChild(div)
    }
};

// load single items

const loadSigleItems = (itemId) =>{

    const url = `https://fakestoreapi.com/products/${itemId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySingleItem(data))

};

const displaySingleItem = (item) => {
    const singleItemContainer = document.getElementById('show-single-items')
    singleItemContainer.textContent = ''
    const div = document.createElement('div')
    div.classList.add('col','d-flex','flex-column','mx-auto')
    div.innerHTML = `
        <div  class="card p-3 h-100 rounded">
            <div>
                <img src="${item.image}" class="card-img-top "  height= "300px" alt="..." />
            </div>
             <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <h5 class="card-title"><span>$ </span>${item.price}</h5>
                <p class="card-text"> ${item.description.slice(0,100)}</p>
            </div>
        </div>

    `;
    singleItemContainer.appendChild(div);
};