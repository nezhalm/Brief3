const anima = document.querySelectorAll('h2 span');


window.addEventListener('load', () =>{

   const TL = gsap.timeline({paused:true});
   TL
    .staggerFrom(anima,1,{top:-90,opacity: 1,ease:"power1.out"},0.1);

     TL.play();
})






function menu1(){
    var salad =document.querySelector(".row");
    salad.style.display="flex";
    var obentu = document.querySelector(".row1");
    obentu.style.display="none";
    var plat=document.querySelector(".row2");
    plat.style.display="none";
    var fried=document.querySelector(".row3");
    fried.style.display="none";


}
function menu2(){
    var salad =document.querySelector(".row");
    salad.style.display="none";
    var obentu = document.querySelector(".row1");
    obentu.style.display="flex";
    var plat=document.querySelector(".row2");
    plat.style.display="none";
    var fried=document.querySelector(".row3");
    fried.style.display="none";

}
function menu3(){
    var salad =document.querySelector(".row");
    salad.style.display="none";
    var obentu = document.querySelector(".row1");
    obentu.style.display="none";
    var plat=document.querySelector(".row2");
    plat.style.display="flex";
    var fried=document.querySelector(".row3");
    fried.style.display="none";

}

function menu4(){
    var salad =document.querySelector(".row");
    salad.style.display="none";
    var obentu = document.querySelector(".row1");
    obentu.style.display="none";
    var plat=document.querySelector(".row2");
    plat.style.display="none";
    var fried=document.querySelector(".row3");
    fried.style.display="flex";

}


function oppenMenu(){
    var slide = document.getElementById("slide");
     var open = document.getElementById("open");
     var close = document.getElementById("close");
     slide.style.display = "flex";
    open.style.display = "none";
     close.style.display = "block";
 }
 function closeMenu(){
    var slide = document.getElementById("slide");
     var open = document.getElementById("open");
     var close = document.getElementById("close");
    slide.style.display = "none";
         open.style.display = "block";
   close.style.display = "none";
 }







let addToCartButtons = document.getElementsByClassName('btn-primary')
let cartContainer = document.getElementsByTagName('tbody')[0]
let quantityFields = document.getElementsByClassName('num')
let delete_buttons = document.getElementsByClassName('uk-button-danger')

// picking up all the Add-To-Cart buttons
for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart)
    
}
// This function helps to add items to our cart
function addToCart(event){

    
    let itemContainer = document.createElement('tr')
    let btn = event.target
    let btnGrandParent = btn.parentElement.parentElement
    let btnParent = btn.parentElement
    let itemImage = btnGrandParent.children[0].src
    let itemName = btnParent.children[0].innerText
    let itemPrice = btnParent.children[1].innerText
    
    
    itemContainer.innerHTML = `
    
    <td><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
    <td class="uk-table-link">
        <h3 class = "item-name">${itemName}</h3>
    </td>
    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>
`

    cartContainer.append(itemContainer)




    // Accessing individual quantity fields
    for(let i = 0; i < quantityFields.length; i++){
        quantityFields[i].value = 1
        quantityFields[i].addEventListener('change', totalCost)
                
    }

    // Accessing individual quantity fields
    for(let i = 0; i < delete_buttons.length; i++){
        delete_buttons[i].addEventListener('click', removeItem)
    }

    grandTotal()

   
}



// This function helps to multiply the quantity and the price
function totalCost(event){
    let quantity = event.target
    quantity_parent = quantity.parentElement.parentElement
    price_field = quantity_parent.getElementsByClassName('item-price')[0]
    total_field = quantity_parent.getElementsByClassName('total-price')[0]
    price_field_content = price_field.innerText.replace('$', '')
    total_field.children[0].innerText = '$' +  quantity.value * price_field_content
    grandTotal()
    if(isNaN(quantity.value)|| quantity.value <= 0){
        quantity.value = 1
    }

    
    
}

// This function helps to add up the total of the items
function grandTotal(){
    let total = 0
    let grand_total = document.getElementsByClassName('grand-total')[0]
    all_total_fields = document.getElementsByClassName('total-price')
    for(let i = 0; i < all_total_fields.length; i++){
        all_prices = Number(all_total_fields[i].innerText.replace('$', ''))
        total+=all_prices
    }
    grand_total.children[0].innerText = "$"+total
    grand_total.children[0].style.fontWeight = 'bold'
    console.log(total)
}


function removeItem(event){
    del_btn = event.target
    del_btn_parent = del_btn.parentElement.parentElement
    del_btn_parent.remove()
    console.log(del_btn)
    grandTotal()
    
}
function validation(){
    alert("the order is valid");
}