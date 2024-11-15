
const data = JSON.parse(localStorage.getItem("cardProduct"))
const container = document.getElementById("container")
let counter= [];
let finalTotal = 0;

let valide = []
function add(index){
    const count = document.getElementById(`count-${index}`)
    const price = document.getElementById(`price-${index}`)
    if(counter[index] >= 0 ){
        counter[index]++
        console.log(counter[index]);
        
        finalTotal = data[index].price * counter[index]
        price.innerText = finalTotal
        
        
    }
    count.innerText = counter[index]
}
function moin(index){
    const price = document.getElementById(`price-${index}`)
    const count = document.getElementById(`count-${index}`)
    if(counter[index]>0){
        counter[index]--
        finalTotal = data[index].price * counter[index]
        price.innerText = finalTotal
        if(counter[index] == 1){
            price.innerText = data[index].price
        }
    }
    count.innerText = counter[index]

    }

    function deleteProduct(index){
        const item = data[index]
        data.splice(item,1)
        localStorage.setItem("cardProduct",JSON.stringify(data))
    }
    function validation(){
        const updateData = data.map((item,index)=>({
            ...item,
            quantity : counter[index],
            totalPrice : item.price * counter[index]

        }))
        valide.push(updateData)
        localStorage.setItem("valide",JSON.stringify(valide))
        console.log(valide)
    }


data.forEach((element,index) => {
    
    
    counter[index] = 1
    finalTotal = data[index].price
    container.innerHTML += ` 
    <div class="item flex flex-col sm:flex-row gap-2 bg-white rounded-lg py-4 px-4 mx-2 mt-4 shadow-md w-full max-w-md sm:max-w-none">
    <div class="w-full sm:w-1/4 flex justify-center items-center bg-transparent p-2">
        <img src="${element.image}" alt="Produit" class="w-20 h-20 sm:w-full sm:h-full rounded-md object-cover">
    </div>

    <div class="w-full sm:w-3/4 flex flex-col justify-between ml-0 sm:ml-3">
        <h1 class="text-lg text-black font-bold text-center sm:text-left mt-3 sm:mt-5">${element.titre}</h1>
        
        <div class="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6">
            <div id="qunatity" class="flex items-center gap-3">
                 <button id="moin" class= "moin bg-orange-600 text-white border rounded px-3 py-1">-</button>
                <p id="count-${index}" class="text-black font-bold">${counter[index]}</p>
                <button id="" class="plus bg-orange-600 text-white border rounded px-3 py-1">+</button>
            </div>
            <div class="flex items-center gap-3 mt-4 sm:mt-0">
                <p id="price-${index}" class="text-black font-bold">$${finalTotal}</p>
                <button onclick="deleteProduct()" class="text-red-600">
                            <img src="image/Trash.png" alt="Supprimer" class="w-6 h-6">
                        </button>
            </div>
        </div>
    </div>
</div>
`

});
document.querySelectorAll(".plus").forEach((item,index)=>{
    item.addEventListener("click",()=>{
        add(index)
    })})

document.querySelectorAll(".moin").forEach((item,index)=>{
    item.addEventListener("click",()=>{
        moin(index)
    })
})
document.querySelectorAll(".trash").forEach((item,index)=>{
    item.addEventListener("click",(event)=>{
        event.preventDefault()
        deleteProduct(index)
    })
})

document.querySelectorAll(".validation").forEach((item)=>{
item.addEventListener("click",function(event){
    event.preventDefault()
    validation()
})
})
// Fonction pour ouvrir et fermer le pop-up du panier
function openPanier() {
    document.getElementById("panier-tab").classList.remove("translate-x-full");
}

function closePanier() {
    document.getElementById("panier-tab").classList.add("translate-x-full");
}