import menuArray from "/data.js"

console.log(menuArray)

const main = document.getElementById('main')

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

        console.log(`
                ${name} ,
                ${ingredients} ,
                ${id} ,
                ${price} ,
                ${emoji} `)

        htmlMenu +=`
            <div class="meal">
                <div class="emoji">${emoji} </div> 
                <ul class="details">
                    <li class="name">${name} </li> 
                    <li class="ingredients">${ingredients}</li> 
                    <li class="price">${price} </li>
                </ul>
                <button id="${id}" class="button-plus">+</button>
            </div>
          
            `

        })

    return htmlMenu
}


main.innerHTML=renderHtmlMenu()


document.addEventListener(function(e){



})