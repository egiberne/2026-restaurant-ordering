import menuArray from "./data.js"

const menu = document.getElementById('menu')

// total
const totalCost = document.getElementById('total-cost')
const order = document.getElementById('order')
const checkout= document.getElementById('checkout')
let cost=0
let orders=[]

// burrito 
const itemBurrito = document.getElementById('item-burrito')
const itemBurgerNumber = document.getElementById('item-burger-number')
const itemBurgerPrice = document.getElementById('item-burger-price')
let burritoOrdered
let numberBurrito=1
let orderBurritos=[]
 

// burger
const itemBurger = document.getElementById('item-burger')
const itemBurritoNumber = document.getElementById('item-burrito-number')
const itemBurritoPrice = document.getElementById('item-burrito-price')
let burgerOrdered 
let numberBurger=1
let orderBurgers=[]
 

// beer
const itemBeer = document.getElementById('item-beer')
const itemBeerNumber = document.getElementById('item-beer-number')
const itemBeerPrice = document.getElementById('item-beer-price')
let beerOrdered 
let numberBeer=1
let orderBeers=[]
 

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
                    <li class="price">$${price} </li>
                </ul>
                <button  class="plus" data-menu="${name}">+</button>
            </div>
          
            `

        })

    return htmlMenu
}


let htmlOrder =``
menu.addEventListener('click',function(e){
    let matchingPrice =``
    let matchingMenu =``
    let number = 0
    // e.defaultPrevented()
   

    if(e.target.dataset.menu==='Burrito' ){
        matchingPrice = getPrice(e.target.dataset.menu)
        matchingMenu =  e.target.dataset.menu
        checkout.style.display = "block";
        itemBurrito.style.display = "flex";
        orders.push('burrito')
        orderBurritos.push('burrito')
        
        burritoOrdered =  orders.filter(function(item){
            if(item==='burrito'){
                return true
            }
        })

        itemBurritoNumber.innerHTML = `[${burritoOrdered.length}]`
        itemBurritoPrice.textContent= `$${matchingPrice*burritoOrdered.length}`

     } else if(e.target.dataset.menu==='Hamburger' ){
        matchingPrice = getPrice(e.target.dataset.menu)
        matchingMenu =  e.target.dataset.menu 
        checkout.style.display = "block";
        itemBurger.style.display = "flex";
        orders.push('burger')
        orderBurgers.push('burger')
       
        burgerOrdered =  orders.filter(function(item){
            if(item==='burger'){
                return true
            }
        })
        number =burgerOrdered.length
        itemBurgerNumber.innerHTML = `[${number}]`
        itemBurgerPrice.textContent = `$${matchingPrice*number}`

    } else if(e.target.dataset.menu==='Beer'){
        matchingPrice = getPrice(e.target.dataset.menu)
        matchingMenu =  e.target.dataset.menu
        checkout.style.display = "block";
        itemBeer.style.display = "flex";
        orders.push('beer')
        orderBeers.push('beer')

        beerOrdered =  orders.filter(function(item){
            if(item==='beer'){
                return true
            }
        })


        number =beerOrdered.length
        itemBeerNumber.textContent = `[${number}]`
        itemBeerPrice.textContent = `$${matchingPrice*number}`

    }




    //cost = numberBuritto*14 + numberHamburger*13 + numberBeer*12 
    //totalPrice.innerHTML = <div> ${cost}</div> 
    order.innerHTML= htmlOrder
    cost = burritoOrdered.length *14 + burgerOrdered.length *13 +  beerOrdered.length *12  
    totalCost.textContent=`$ ${cost}`


})


checkout.addEventListener('click', function(e){

    if(e.target.id==='item-burrito-remove'){
     console.log('remove a burrito')
     burritoOrdered.pop()
     burritoOrdered.length ===0 ? itemBurrito.style.display ='none': itemBurrito.style.display ='flex'
     itemBurritoNumber.innerHTML = `[${burritoOrdered.length}]`
     itemBurritoPrice.textContent= `$${14*burritoOrdered.length}`
     orders.splice(orders.indexOf('burrito'),1)
     cost =  burritoOrdered.length *14 + burgerOrdered.length *13 +  beerOrdered.length *12 
     totalCost.textContent=`$ ${cost}`

    }else if(e.target.id==='item-burger-remove'){
     console.log('remove a burger')
     burgerOrdered.pop()
     burgerOrdered.length ===0 ? itemBurger.style.display ='none': itemBurger.style.display ='flex'   
     itemBurgerNumber.innerHTML = `[${burgerOrdered.length}]`
     itemBurgerPrice.textContent= `$${13*burgerOrdered.length}`
     orders.splice(orders.indexOf('burger'),1)
     cost =  burritoOrdered.length *14 + burgerOrdered.length *13 +  beerOrdered.length *12 
     totalCost.textContent=`$ ${cost}`

    }else if(e.target.id==='item-beer-remove'){
     console.log('remove a beer')
     beerOrdered.pop()  
     beerOrdered.length ===0 ? itemBeer.style.display ='none': itemBeer.style.display ='flex'
     itemBeerNumber.innerHTML = `[${beerOrdered.length}]`
     itemBeerPrice.textContent= `$${12*beerOrdered.length}`
     orders.splice(orders.indexOf('beer'),1)
     cost =  burritoOrdered.length *14 + burgerOrdered.length *13 +  beerOrdered.length *12 
     totalCost.textContent=`$ ${cost}`
    }

    
})



function renderHtmlOrder(itemName, itemPrice, itemNumber){

        const htmlItem =``

        // const htmlItem =`
        //         <div id="item" class="item">
        //             <div id="item-nanme"> ${itemName} </div>
        //             <div id="item-number"> [${itemNumber}] </div>
        //             <button id="remove" class="remove"> remove </button>
        //             <div id="price" class="price"> $${itemPrice}</div>
        //         </div>
        //     `
    return htmlItem
}


function renderHtmlTotal(){
        cost = numberBurrito*14 + numberBurger*13 + numberBeer*12 
        totalCost.textContent= cost


        

}




menu.innerHTML=renderHtmlMenu()

function getPrice(menuName){
  const matchingMenu = menuArray.filter(function(menu){
        if(menu.name === menuName){
             return menu
        }

    } )[0]
    //console.log(matchingMenu)
    return  matchingMenu.price
}


const footer= document.getElementById('footer')
const dateSnapshot = new Date()

console.log(`Copyright ${dateSnapshot.getFullYear()}`)

footer.innerHTML=`<div> Copyright ${dateSnapshot.getFullYear()} <a href="https://github.com/egiberne/2026-restaurant-ordering" target="_blank"> egiberne</a>`

