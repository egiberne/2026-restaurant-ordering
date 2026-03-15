import menuArray from "/data.js"

let orders=[]

let numberBurrito=1
let numberHamburger=1
let numberBeer=1
let cost=0

const menu = document.getElementById('menu')
const order = document.getElementById('order')
const checkout= document.getElementById('checkout')
const totalPrice=document.getElementById('total-price')

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
    let matchingMenu =``
   

    if(e.target.dataset.menu==='Burrito' ){
        matchingPrice = getPrice(e.target.dataset.menu)
        matchingMenu =  e.target.dataset.menu
        checkout.style.display = "block";
        orders.push('burrito')
        htmlOrder+=renderHtmlOrder(matchingMenu,matchingPrice,numberBurrito++)

     } else if(e.target.dataset.menu==='Hamburger' ){
        matchingPrice = getPrice(e.target.dataset.menu)
        matchingMenu =  e.target.dataset.menu 
        checkout.style.display = "block";
        orders.push('hamburger')
        htmlOrder+= renderHtmlOrder(matchingMenu,matchingPrice,numberHamburger++)

    } else if(e.target.dataset.menu==='Beer'){
        matchingPrice = getPrice(e.target.dataset.menu)
        matchingMenu =  e.target.dataset.menu
        checkout.style.display = "block";
        orders.push('beer')
        htmlOrder+= renderHtmlOrder(matchingMenu,matchingPrice,numberBeer++)

    }

    //cost = numberBuritto*14 + numberHamburger*13 + numberBeer*12 

    //totalPrice.innerHTML = <div> ${cost}</div> 
    order.innerHTML= htmlOrder


})


function renderHtmlOrder(itemName, itemPrice, itemNumber){

        const htmlItem =`
                <div id="item" class="item">
                    <div id="item-nanme"> ${itemName} </div>
                    <div id="item-number"> [${itemNumber}] </div>
                    <button id="remove" class="remove"> remove </button>
                    <div id="price" class="price"> $${itemPrice}</div>
                </div>
            `
    

    return htmlItem
}


function renderHtmlTotal(){
        cost = numberBuritto*14 + numberHamburger*13 + numberBeer*12 

        

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

