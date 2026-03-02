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
    let matchingMenu =``
   

    if(e.target.dataset.menu==='Burrito'){
        matchingPrice = getPrice(e.target.dataset.menu)
        matchingMenu =  e.target.dataset.menu

        checkout.style.display = "block";

        htmlOrder+=renderHtmlOrder(matchingMenu,matchingPrice)
        // htmlOrder+= `
        //     <div class="item">
        //         <div> ${ matchingMenu} </div>
        //         <button class="remove"> remove </button>
        //         <div class="price"> $${matchingPrice}</div>
        //     </div>
        // `

     } else if(e.target.dataset.menu==='Hamburger'){
        matchingPrice = getPrice(e.target.dataset.menu)
        matchingMenu =  e.target.dataset.menu 
        checkout.style.display = "block";
        htmlOrder+= renderHtmlOrder(matchingMenu,matchingPrice)

    } else if(e.target.dataset.menu==='Beer'){
        matchingPrice = getPrice(e.target.dataset.menu)
        matchingMenu =  e.target.dataset.menu
        checkout.style.display = "block";
        htmlOrder+= renderHtmlOrder(matchingMenu,matchingPrice)
    }

    
    order.innerHTML= htmlOrder


})


function renderHtmlOrder(itemName, itemPrice){

    const htmlItem =`
            <div class="item">
                <div> ${itemName} </div>
                <button class="remove"> remove </button>
                <div class="price"> $${itemPrice}</div>
            </div>
        `

    return htmlItem
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

