
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

if (day < 10) {
  day = '0' + day;
}
if (month < 10) {
  month = '0' + month;
}

var D = year + '-' + month + '-' + day;
document.getElementById('today').textContent = D;

function generateNumber() {
  let number = "";
  for (let i = 0; i < 4; i++) {
    let N = Math.floor(Math.random() * 10); 
    number += N;
  }
  return number;
}

let devisNumber = localStorage.getItem("devisNumber");

if (!devisNumber) {
  devisNumber = year + "-" + month + "-" + generateNumber();
  localStorage.setItem("devisNumber", devisNumber);
}

document.getElementById("devisNumber").textContent = devisNumber;


function exitToHome() {
  window.location.href = "Home.html"; 
}
document.getElementById("exitButton").addEventListener("click", exitToHome);

const cart = (JSON.parse(localStorage.getItem("valide")) || []).flat();
/*console.log(cart)*/
const tableBody = document.getElementById("cart-items");

let subTotal = 0;
let row = ""; 

for (let i = 0; i < cart.length; i++) {
    let element = cart[i];
    let total = element.price * element.quantity;
    subTotal += total;

    let row = `
    <tr class="${i % 2 == 0 ? 'bg-red-100' : 'bg-white'} text-center">
        <td class="py-2 px-2 border">${i + 1}</td>
        <td class="py-2 px-2 border">
             <div class="flex items-center justify-start gap-4 min-h-[50px]">
                <img src="${element.image}" alt="${element.titre}" class="w-8 h-8">
                <span class="font-normal">${element.titre}</span>
            </div>
        </td>
        <td class="py-2 px-2 border">$${element.price}</td>
        <td class="py-2 px-2 border">${element.quantity}</td>
        <td class="py-2 px-2 border">$${total}</td>
    </tr>
    `;
    tableBody.innerHTML += row;
}


const tax = subTotal * 0.20;
const total = subTotal + tax;

document.getElementById("subtotal").textContent = `$${subTotal}`;
document.getElementById("tax").textContent = `$${tax.toFixed(3)}`;
document.getElementById("total").textContent = `$${total.toFixed(3)}`;
//function for checkout
function CheckoutF() {
    const cart = (JSON.parse(localStorage.getItem("valide")) || []).flat();

    if (cart.length == 0) {
        alert("Votre panier est vide !");
        return;
    }
    
    const confirmationTableBody = document.getElementById("confirmationTableBody");
    confirmationTableBody.innerHTML = ""; 

    let total1 = 0;
    //const cartLength = cart.length;

    confirmationTableBody.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        const itemTotal = cart[i].price * cart[i].quantity;
        total1 += itemTotal;

        const row = `
            <tr class="${i % 2 == 0 ? 'bg-red-100' : 'bg-white'} text-center">
                <td class="py-2 px-2 border">${i + 1}</td>
                <td class="py-2 px-2 border">${cart[i].titre}</td>
                <td class="py-2 px-2 border">$${cart[i].price}</td>
                <td class="py-2 px-2 border">${cart[i].quantity}</td>
                <td class="py-2 px-2 border">$${itemTotal.toFixed(2)}</td>
            </tr>
        `;
        confirmationTableBody.innerHTML += row;
    }

   
    document.getElementById("confirmationTotal").textContent = `$${total.toFixed(2)}`;
    document.getElementById("confirmationMessage").classList.remove("hidden"); 
}

document.getElementById("closeConfirmation").addEventListener("click", () => {
    document.getElementById("confirmationMessage").classList.add("hidden");
});

document.getElementById("payNow").addEventListener("click", () => {
    localStorage.removeItem("valide");
    document.getElementById("confirmationMessage").classList.add("hidden");
    window.location.href = "Home.html";
});

document.getElementById("Checkout").addEventListener("click", CheckoutF);

