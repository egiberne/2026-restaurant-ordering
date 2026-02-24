import menuArray from "/data.js"

//console.log(menuArray)

const menu = document.getElementById('menu')
const order = document.getElementById('order')

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

        // console.log(`
        //         ${name} ,
        //         ${ingredients} ,
        //         ${id} ,
        //         ${price} ,
        //         ${emoji} `)

        htmlMenu +=`
            <div id=${id} class="meal" >
                <div class="emoji">${emoji} </div> 
                <ul class="details">
                    <li id=${name} class="name">${name} </li> 
                    <li class="ingredients">${ingredients}</li> 
                    <li class="price">${price} </li>
                </ul>
                <button  class="plus" data-plus="${name}">+</button>
            </div>
          
            `

        })

    return htmlMenu
}



menu.addEventListener('click',function(e){
    let htmlOrder

    if(e.target.dataset.plus){
        //console.log(e.target.dataset.plus)
        htmlOrder= `<div> ${e.target.dataset.plus} </div>`
    }

    order.innerHTML= htmlOrder


})


function renderHtmlOrder(html){


    return html
}



menu.innerHTML=renderHtmlMenu()

