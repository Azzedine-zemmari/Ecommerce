import carts from "./Data.js";
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
// prendre un seul produit
const obj = carts.find(obj => obj.id == id);
console.log(obj)
// prendre le prix
let price = obj.price
const pricecontent = document.getElementById("price")
pricecontent.innerText = price + " DH"
let finalMemoriePrice = 0, finalCartPrice = 0, finalProcessurePrice = 0, finalDpiPrice = 0, finalColorPrice = 0, finalRefreshRate = 0, finalPrice = 0, finalManeteColor = 0;
//afficher image
const image = document.getElementById("image");
const img = document.createElement("img");
img.src = obj.image;
img.classList.add("w-full")
image.appendChild(img)
//afficher le titre
const content = document.getElementById("ProductTitle");
content.textContent = obj.name;
//afficher la description
const description = document.getElementById("ProductDesc");
description.textContent = obj.description
// pour stocker des donner pour le panier
let donner = JSON.parse(localStorage.getItem("cardProduct")) || [];
function updatePrice() {
    finalPrice = price + finalMemoriePrice + finalProcessurePrice + finalCartPrice + finalColorPrice + finalDpiPrice + finalManeteColor + finalRefreshRate;
    pricecontent.innerText = finalPrice + " DH"
    return finalPrice
}
const cartegraphic = document.getElementById("carteTTILE")
const memoireTITLE = document.getElementById("memoireTITLE")
const prosTITLE = document.getElementById("prosTITLE")
const memoire = document.getElementById("memoire")
const graphic = document.getElementById("graphic")
const processeur = document.getElementById("processeur")

// afficher radio button pour selection du memoire
function createRaDioButton(options, name, container) {

    options.forEach(option => {
        const radio = document.createElement("input")
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", name)
        radio.setAttribute("value", option)
        radio.style.accentColor = "#FC6736"
        const label = document.createElement("label");
        label.innerText = option
        label.style.marginRight = "10px"
        label.style.marginLeft = "2px"
        container.appendChild(radio)
        container.appendChild(label)
    })
}

if (obj.categorie == "pc") {

    if (obj.memoire != null) {
        createRaDioButton(obj.memoire, "memoire", memoire)
    }
    else if (obj.memoire == null) {
        memoireTITLE.innerText = ""
    }

    // prendre le value de memoire checked
    memoire.addEventListener("change", function () {
        const chosenMemoire = document.querySelector('input[name = "memoire"]:checked').value;
        console.log(chosenMemoire)
        if (chosenMemoire == "250GB" && price == 1200) {
            pricecontent.innerText = price
        }
        switch (chosenMemoire) {
            case "250GB":
                finalMemoriePrice = 0;
                break;
            case "500GB":
                finalMemoriePrice = 500;
                break;
            case "1TB":
                finalMemoriePrice = 1000;
                break;
        }
        updatePrice()
    })
    if (obj.graphics != null) { 
        createRaDioButton(Object.keys(obj.graphics), "graphic", graphic)
    }
    else if (obj.graphics == null) {
        cartegraphic.innerText = ""
    }

    //get the value 
    graphic.addEventListener("change", () => {
        const radio = document.querySelector("input[name = 'graphic']:checked").value
        let div = document.getElementById("ButtonsContain")
        if (!div) {
            div = document.createElement("div")
            div.id = "ButtonsContain"
            graphic.appendChild(div)
        }
        div.innerHTML = ""
        if (radio == "nvidia") {
            obj.graphics.nvidia.forEach(item => {
                const button = document.createElement("button")
                button.innerText = item
                button.setAttribute("value", item)
                button.classList.add("bg-[#FC6736]", "text-white", "rounded-sm", "p-2", "mr-1", "mt-1")
                div.appendChild(button)
                div.classList.add("inline-block")
                graphic.appendChild(div)
                button.addEventListener("click", () => {
                    console.log(button.value)
                    switch (button.value) {
                        case "RTX 4090":
                            finalCartPrice = 500
                            break;
                        case "RTX 4070":
                            finalCartPrice = 700
                            break;
                        case "GeForce RTX 4060":
                            finalCartPrice = 900
                            break;
                        case "GeForce RTX 4080":
                            finalCartPrice = 1000
                            break;
                        case "RTX 4060 Ti":
                            finalCartPrice = 1200
                            break;
                        default:
                            finalCartPrice = 0
                    }
                    updatePrice()
                })
            })
        }
        if (radio == "amd") {
            obj.graphics.amd.forEach(item => {
                const button = document.createElement("button")
                button.innerText = item
                button.setAttribute("value", item)
                button.classList.add("bg-[#FC6736]", "text-white", "rounded-sm", "p-2", "mr-1", "mt-1")
                div.appendChild(button)
                div.classList.add("inline-block")
                graphic.appendChild(div)
                button.addEventListener("click", () => {
                    console.log(button.value)
                    switch (button.value) {
                        case "Radeon RX 7900 XTX":
                            finalCartPrice = 800
                            break;
                        case "Radeon RX 7600":
                            finalCartPrice = 900
                            break;
                        case "Radeon RX 7800 XT":
                            finalCartPrice = 750
                            break;
                        case "Radeon RX 7900 XT":
                            finalCartPrice = 900
                            break;
                        case "Radeon RX 6700 XT":
                            finalCartPrice = 450
                            break;
                        default:
                    }
                    updatePrice()
                })
            })
        }
        if (radio == "intel") {
            obj.graphics.intel.forEach(item => {
                const button = document.createElement("button")
                button.innerText = item
                button.setAttribute("value", item)
                button.classList.add("bg-[#FC6736]", "text-white", "rounded-sm", "p-2", "mr-1", "mt-1")
                div.appendChild(button)
                div.classList.add("inline-block")
                graphic.appendChild(div)
                button.addEventListener("click", () => {
                    console.log(button.value)
                    switch (button.value) {
                        case "Arc A750":
                            finalCartPrice = 590
                            break
                        case "Arc A380":
                            finalCartPrice = 700
                            break;
                    }
                    updatePrice()
                })
            })
        }
        console.log(radio)
    })
    //get the processeur 
    if (obj.processeur != null) {
        createRaDioButton(Object.keys(obj.processeur), "processeur", processeur)
    }
    else if (obj.processeur == null) {
        prosTITLE.innerText = ""
    }

    processeur.addEventListener("change", function () {
        const radio = document.querySelector("input[name = 'processeur']:checked").value;
        let div = document.getElementById("buttonContainer");
        // si div et deja remplir avec les choix de amd et l utilisateur click une autre fois sur amd il ne affiche pas autre fois les amd procs
        if (!div) {
            div = document.createElement("div")
            div.id = "buttonContainer"
            processeur.appendChild(div)
        }
        // en a vide le div apres l utilisateur choix un processeur et on doit le remplir avec les processeur du mark qui le choix
        div.innerHTML = ""
        if (radio == "amd") {
            obj.processeur.amd.forEach(item => {
                const button = document.createElement("button");
                button.innerHTML = item
                button.value = item
                button.classList.add("bg-[#FC6736]", "text-white", "rounded-sm", "p-2", "mr-1", "mt-1")
                div.appendChild(button)
                div.classList.add("inline-block")
                button.addEventListener("click", () => {
                    switch (button.value) {
                        case "Ryzen 5 7600":
                            finalProcessurePrice = 800;
                            break
                        case "Ryzen 7 7800X3D":
                            finalProcessurePrice = 970
                            break;
                        case "Ryzen 7 5800X3D":
                            finalProcessurePrice = 890
                            break;
                        case "Ryzen 9 7950X3D":
                            finalProcessurePrice = 800;
                            break;
                        case "Ryzen 5 7600X":
                            finalProcessurePrice = 760
                            break;
                        case "Ryzen 5 5600X":
                            finalProcessurePrice = 898
                            break;
                        case "AMD Ryzen 5 5600G":
                            finalProcessurePrice = 777
                            break;
                        default:
                            finalCartPrice = 0;
                    }
                    updatePrice()
                })
            })
        }
        if (radio == "intel") {
            div.innerHTML = ""
            obj.processeur.intel.forEach(item => {
                const intelButton = document.createElement("button")
                intelButton.innerHTML = item
                intelButton.value = item
                intelButton.classList.add("bg-[#FC6736]", "text-white", "rounded-sm", "p-2", "mr-1", "mt-1")
                div.appendChild(intelButton)
                div.classList.add("inline-block")
                intelButton.addEventListener("click", function () {
                    switch (intelButton.value) {
                        case "Core i3-13100F":
                            finalProcessurePrice = 899
                            break;
                        case "Core i5-13600K":
                            finalProcessurePrice = 777
                            break;
                        case "Core i9-13900K":
                            finalProcessurePrice = 675
                            break
                        case "Core i7-13700K":
                            finalProcessurePrice = 1500
                            break
                        case "Intel Core i5-13400":
                            finalProcessurePrice = 1000
                    }
                    updatePrice()
                })
            })
        }
    })

}

if (obj.categorie == "Smartphone") {
    cartegraphic.innerText = ""
    if (obj.memoire != null) {
        createRaDioButton(obj.memoire, "memoire", memoire)
    }
    memoire.addEventListener("change", function () {
        const chosenMemoire = document.querySelector('input[name = "memoire"]:checked').value;
        console.log(chosenMemoire)
        if (chosenMemoire == "250GB" && price == 1200) {
            pricecontent.innerText = price
        }
        switch (chosenMemoire) {
            case "125GB":
                finalMemoriePrice = 100;
                break;
            case "250GB":
                finalMemoriePrice = 500;
                break;
            case "500GB":
                finalMemoriePrice = 1000;
                break;
        }
        updatePrice()
    })
    if (obj.processeur != null) {
        createRaDioButton(Object.keys(obj.processeur), "processeur", processeur)
    }
    else if (obj.processeur == null) {
        prosTITLE.innerText = ""
    }
    processeur.addEventListener("change", function () {
        const radio = document.querySelector("input[name = 'processeur']:checked").value;
        let div = document.getElementById("buttonContainer");
        // si div et deja remplir avec les choix de amd et l utilisateur click une autre fois sur amd il ne affiche pas autre fois les amd procs
        if (!div) {
            div = document.createElement("div")
            div.id = "buttonContainer"
            processeur.appendChild(div)
        }
        // en a vide le div apres l utilisateur choix un processeur et on doit le remplir avec les processeur du mark qui le choix
        div.innerHTML = ""
        if (radio == "Exynos") {
            obj.processeur.Exynos.forEach(item => {
                const button = document.createElement("button");
                button.innerHTML = item
                button.value = item
                button.classList.add("bg-[#FC6736]", "text-white", "rounded-sm", "p-2", "mr-1", "mt-1")
                div.appendChild(button)
                div.classList.add("inline-block")
                button.addEventListener("click", () => {
                    switch (button.value) {
                        case "Exynos 2200":
                            finalProcessurePrice = 800;
                            break
                        case "Exynos 2400":
                            finalProcessurePrice = 970
                            break;
                        case "Exynos 1480":
                            finalProcessurePrice = 890
                            break;
                        case "Exynos 1330":
                            finalProcessurePrice = 800;
                            break;
                        default:
                            finalProcessurePrice = 0;
                    }
                    updatePrice()
                })
            })
        }
        if (radio == "Snapdragon") {
            div.innerHTML = ""
            obj.processeur.Snapdragon.forEach(item => {
                const intelButton = document.createElement("button")
                intelButton.innerHTML = item
                intelButton.value = item
                intelButton.classList.add("bg-[#FC6736]", "text-white", "rounded-sm", "p-2", "mr-1", "mt-1")
                div.appendChild(intelButton)
                div.classList.add("inline-block")
                intelButton.addEventListener("click", function () {
                    switch (intelButton.value) {
                        case "Snapdragon 8 Gen 2":
                            finalProcessurePrice = 899
                            break;
                        case "Snapdragon 7 Gen 2":
                            finalProcessurePrice = 777
                            break;
                        case "Snapdragon 6 Gen 2":
                            finalProcessurePrice = 675
                            break
                        case "Snapdragon 4 Gen 2":
                            finalProcessurePrice = 1500
                            break
                        case "Intel Core i5-13400":
                            finalProcessurePrice = 1000
                    }
                    updatePrice()
                })
            })
        }
    })
}
if (obj.categorie == "souris") {
    cartegraphic.innerText = "color"
    memoireTITLE.innerText = "dpi"
    prosTITLE.innerText = ""
    //show the dpi option
    createRaDioButton(obj.dpi, "dpi", memoire)
    memoire.addEventListener("change", function () {
        const choosenDpi = document.querySelector('input[name = "dpi"]:checked').value;
        switch (choosenDpi) {
            case "100":
                finalDpiPrice = 90;
                break
            case "25600":
                finalDpiPrice = 300;
                break
            case "35000":
                finalDpiPrice = 500;
                break
            default:
                finalDpiPrice = 0
        }
        updatePrice()
    })
    createRaDioButton(obj.color, "color", graphic)
    graphic.addEventListener("change", function () {
        const choosenColor = document.querySelector("input[name = 'color']:checked").value
        switch (choosenColor) {
            case "black":
                finalColorPrice = 400
                break
            case "white":
                finalColorPrice = 200
                break
            case "red":
                finalColorPrice = 340
                break
            case "blue":
                finalColorPrice = 400
                break
            case "orange":
                finalColorPrice = 350
                break
            default:
                finalColorPrice = 250
        }
        updatePrice()
    })
}
if (obj.categorie == "moniteur") {
    cartegraphic.innerText = ""
    memoireTITLE.innerText = "refresh rate"
    prosTITLE.innerText = ""
    createRaDioButton(obj.RefreshRate, "refresh", memoire)
    memoire.addEventListener("change", function () {
        const chosenRATE = document.querySelector("input[name = 'refresh']:checked").value
        switch (chosenRATE) {
            case "100Hz":
                finalRefreshRate = 600
                break
            case "144Hz":
                finalRefreshRate = 1200
                break

        }
        updatePrice()
    })
}
if (obj.categorie == "casque") {
    cartegraphic.innerText = ""
    memoireTITLE.innerText = ""
    prosTITLE.innerText = "size"

    processeur.innerText = obj.size

    pricecontent.innerText = obj.price
}
if (obj.categorie == "manette") {
    cartegraphic.innerText = ""
    memoireTITLE.innerText = ""
    prosTITLE.innerText = "color"

    createRaDioButton(obj.color, "color", processeur)
    processeur.addEventListener("change", function () {
        const choosenColor = document.querySelector("input[name = 'color']:checked").value
        switch (choosenColor) {
            case "Black":
                finalManeteColor = 780;
                console.log(finalManeteColor)
                break;
            case "white":
                finalManeteColor = 600;
                break;
            case "White with black accents":
                finalManeteColor = 500;
                break;
            default:
                finalManeteColor = 0
                break
        }
        updatePrice()

    })
}

if (obj.categorie == "electromenager") {
    cartegraphic.innerText = ""
    memoireTITLE.innerText = ""
    prosTITLE.innerText = "litrage"
    processeur.textContent = obj.litrage
}
const AddToCart = document.getElementById("AddToCart")
AddToCart.addEventListener("click", () => {
    let existsId = donner.map(product => product.id)
    if (existsId.includes(obj.id)) {
        alert("product already exists")
        return
    }
    else {
        donner.push({ id: obj.id, titre: obj.name, image: obj.image, price: updatePrice() })
        localStorage.setItem("cardProduct", JSON.stringify(donner))
    }
})



