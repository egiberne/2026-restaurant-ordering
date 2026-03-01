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
                    <li class="name">${name} </li> 
                    <li class="ingredients">${ingredients}</li> 
                    <li class="price">${price} </li>
                </ul>
                <button  class="plus" data-menu="${name}">+</button>
            </div>
          
            `

        })

    return htmlMenu
}


let htmlOrder =``
document.addEventListener('click',function(e){
    let matchingPrice =``
   

    if(e.target.dataset.menu==='Burrito'){
        matchingPrice = getPrice(e.target.dataset.menu)
        console.log(matchingPrice)
        checkout.style.display = "block";
        htmlOrder+= `
            <div class="item">
                <div> ${e.target.dataset.menu} </div>
                <button class="remove"> remove </button>
                <div class="price"> $${matchingPrice}</div>
            </div>
        `

     } else if(e.target.dataset.menu==='Hamburger'){
        matchingPrice = getPrice(e.target.dataset.menu)
        console.log(matchingPrice)
        checkout.style.display = "block";
        htmlOrder+= `
            <div class="item">
                <div> ${e.target.dataset.menu} </div>
                <button class="remove"> remove </button>
                <div class="price"> $${matchingPrice}</div>
            </div>
        `

    } else if(e.target.dataset.menu==='Beer'){
        matchingPrice = getPrice(e.target.dataset.menu)
        console.log(matchingPrice)
        checkout.style.display = "block";
        htmlOrder+= `
            <div class="item">
                <div> ${e.target.dataset.menu} </div>
                <button class="remove"> remove </button>
                <div class="price"> $${matchingPrice}</div>
            </div>
        `
    }

    
    order.innerHTML= htmlOrder


})


function renderHtmlOrder(html){


    return html
}



menu.innerHTML=renderHtmlMenu()

function getPrice(menuName){
  const matchingMenu = menuArray.filter(function(menu){
        if(menu.name === menuName){
             return menu
        }

    } )[0]
    console.log(matchingMenu)
    return  matchingMenu.price
}

