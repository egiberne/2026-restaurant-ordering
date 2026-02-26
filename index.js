import menuArray from "/data.js"


const menu = document.getElementById('menu')
const order = document.getElementById('order')
const checkout= document.getElementById('checkout')

function renderHtmlMenu (){
    let htmlMenu =``

    menuArray.forEach(function(item){

        const {
                name,
                ingredients,
                id,
                price,
                emoji
            } = item

        htmlMenu +=`
            <div class="meal" >
                <div class="emoji">${emoji} </div> 
                <ul class="details">
                    <li id=${name} class="name">${name} </li> 
                    <li class="ingredients">${ingredients}</li> 
                    <li class="price">${price} </li>
                </ul>
                <button  class="plus" data-${name}="${name}">+</button>
            </div>
          
            `

        })

    return htmlMenu
}


let htmlOrder =``
document.addEventListener('click',function(e){
  

    if(e.target.dataset.burrito){
        checkout.style.display = "block";
        console.log(e.target.dataset.burrito)
        htmlOrder+= `<div> ${e.target.dataset.burrito} </div>`

     } else if(e.target.dataset.hamburger) {
        checkout.style.display = "block";
        console.log(e.target.dataset.hamburger)
        htmlOrder+= `<div> ${e.target.dataset.hamburger} </div>`

    } else if(e.target.dataset.beer){
        checkout.style.display = "block";
        console.log(e.target.dataset.beer)
        htmlOrder+= `<div> ${e.target.dataset.beer} </div>`
    }

    console.log(htmlOrder)
    order.innerHTML= htmlOrder


})


function renderHtmlOrder(html){


    return html
}



menu.innerHTML=renderHtmlMenu()

