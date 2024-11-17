import carts from "./Data.js"; 

displayData(carts, 1);

document.getElementById("page1").addEventListener("click", () => displayData(carts, 1));
document.getElementById("page2").addEventListener("click", () => displayData(carts, 2));

function displayData(data, paginate) {
    const card = document.getElementById("card");

    if (data.length > 0) {
        let from, to;

        if (paginate === 1) {
            from = 0;
            to = 12;
            document.getElementById("page1").style.color = "#FC6736";
            document.getElementById("page2").style.color = "black";
        } else if (paginate === 2) {
            from = 12;
            to = data.length;
            document.getElementById("page2").style.color = "#FC6736";
            document.getElementById("page1").style.color = "black";
        }

        card.innerHTML = "";

        data.slice(from, to).forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className = "bg-white p-2 m-2 w-full md:1/2";
            productCard.style.borderRadius = "15px";
            productCard.style.boxShadow = "8px 8px 8px rgba(252, 103, 54, 0.5)";

            productCard.innerHTML = `
                <div class="flex flex-col items-center mb-2">
                    <img src="${product.image}" alt="Product Image" class="w-full h-40 object-contain rounded mb-4">
                    <a href='../Detail.html?id=${product.id}'><h3 class="font-bold text-md mb-2" style='height: 50px; display: flex; align-items: center;'>${product.name}</h3></a>
                    <p class="font-bold text-xl mb-6 mt-2" style="color: #FC6736;">${product.price} DH</p>
                </div>
                <div class="flex justify-center items-center space-x-3 p-2">
                    <button 
                        style="background-color: #FC6736;" 
                        class="text-white px-1 lg:text-lg py-1 text-xs rounded-full h-7 flex items-center add-to-cart-btn">
                        Add Cart
                    </button>
                    <a href='../Detail.html?id=${product.id}'><button style="background-color: #FC6736;" class="text-white px-1 lg:text-lg py-1 text-xs rounded-full h-7 flex items-center">Customize</button></a>
                </div>
            `;

            const addToCartBtn = productCard.querySelector(".add-to-cart-btn");
            addToCartBtn.addEventListener("click", () => addToCart(product));

            card.appendChild(productCard);
        });
    } else {
        card.innerHTML = "No data available";
    }
}

function addToCart(product) {
    try {
        let cardProduct = JSON.parse(localStorage.getItem("cardProduct")) || []; 
        let existsId = cardProduct.map(item=>item.id)
        if(existsId.includes(product.id)){
            alert("product already exists")
            return
        }
        else{
            console.log("test product ",product);
            cardProduct.push({id:product.id,titre:product.name,image:product.image,price:product.price}); 
            localStorage.setItem("cardProduct", JSON.stringify(cardProduct)); 
        }
    } catch (error) {
        console.error("Erreur lors de l'ajout au panier :", error);
        alert("Une erreur s'est produite lors de l'ajout au panier.");
    }
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.style.backgroundColor = "";
        });

        button.style.backgroundColor = "black";

        document.getElementById('card').innerHTML = '';
        const category = button.getAttribute('data-category');
        filterCategorie(category);
    });
});

function filterCategorie(categorie) {
    let filteredCat = carts.filter(element => element.categorie == categorie);
    displayData(filteredCat);
}

document.querySelectorAll('.btn-paginate').forEach
    (button => {
        button.addEventListener('click', () => {
            let card = document.getElementById('card').innerHTML = ''

            button.classList.add("is-paginate");

            const pageNumber = button.getAttribute('data-page');

            displayData(carts, pageNumber)

            togglePagination(true);

        });
    });

const titleElement = document.getElementById("catalogue-title");

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        titleElement.textContent = category;
    });
});

const paginationSection = document.getElementById('pagination');

function togglePagination(show) {
    paginationSection.style.display = show ? 'block' : 'none';
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {

        togglePagination(false);
    });
});