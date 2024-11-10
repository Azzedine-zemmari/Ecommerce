import carts from "./Data.js"
displayData(carts)

function displayData(data) {
    let card = document.getElementById('card')

    if (data.length > 0) {

        data.forEach((product, index) => {

            console.log(product);

            card.innerHTML += `   <div class="bg-white p-4" style="border-radius: 15px; box-shadow: 8px 8px 8px rgba(252, 103, 54, 0.5);">
                        <div class="flex flex-col items-center">
                            <img src="${product.image}" alt="Product Image" class="w-full h-40 object-cover rounded mb-4">
                            <h3 class="font-bold text-lg mb-2">${product.name}</h3>
                            <p class="text-gray-600 mb-4 text-center">${product.description.substring(0, 90)} ...</p>
                            <p class="font-bold text-xl mb-4" style="color: #FC6736;">${product.price}</p>
                            <div class="flex justify-center space-x-4">
                                <button style="background-color: #FC6736;" class="text-white px-2 py rounded-full">Add to Cart</button>
                                <button style="background-color: #FC6736;" class="text-white px-2 py rounded-full">Customize</button>
                            </div>
                        </div>
                    </div>`;

        })
    } else {

        card.innerHTML = 'no data '
    }
}
// Add event listeners to filter buttons
document.querySelectorAll('.filter-btn').forEach
    (button => {
        button.addEventListener('click', () => {
            let card = document.getElementById('card').innerHTML = ''
            const category = button.getAttribute('data-category'); // Get category from data attribute
            filterCategorie(category); // Call filter function
        });
    });

function filterCategorie(categorie) {
    let filteredCat = carts.filter(element => element.categorie === categorie);
    displayData(filteredCat); // Display the filtered products (assuming displayData function exists)
}
