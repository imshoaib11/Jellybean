let API_url = "https://jellybellywikiapi.onrender.com/api/Beans"

let card = document.getElementById("root")

function veiwCard(data){

  
   
    data.items.forEach((e,i) => {
        
      let cardData = document.createElement("div")

        cardData.innerHTML = `<div class="card direction" style="width: 18rem;">
        <img src=${e.imageUrl} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${e.flavorName}</h5>
          <p class="card-text">${e.description}</p>
          <button class="btn btn-primary" onclick = "navigate(${e.beanId})">Ingredients</button>
        </div>
      </div>`

      card.appendChild(cardData);

    })

}

function navigate(id){

window.location.href = `./view.html?id=${id}`
}




async function display(){
 try{
    let res = await fetch(API_url)

    let data = await res.json()

    if( res.status === 200)
        veiwCard(data)
    else alert(`${res.status} - ${res.statusText}` )
}

    catch(err){
    console.error(err)
    }
}

display()