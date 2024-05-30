let API_url = "https://jellybellywikiapi.onrender.com/api/Beans"
let urlParams = new URLSearchParams(window.location.search)

const id = urlParams.get("id")

function createDiv(data){
    let card = document.getElementById("root")

    let cardData = document.createElement("div")
       
    
    cardData.innerHTML = `<div class="card card-style">
            <div class="card-header">
            ${data.groupName}
            </div>
             <div class="card-body">
              <h5 class="card-title">${data.flavorName}</h5>
                  <p class="card-text"><strong>Ingredients:</strong> ${data.ingredients}</p>
                         <a href="./index.html" class="btn btn-info" style="margin-left:30px">Back</a>
         </div>
    </div>`

    card.appendChild(cardData)

}

async function getData(){

try{
    let res = await fetch(`${API_url}/${id}`)
    let data = await res.json() 
    //  console.log(data)

    if(res.status ===200)
        createDiv(data)
    else (`${res.status}- ${res.statusText}`)
}

catch(error){
    console.error(error)
}
}

getData();

