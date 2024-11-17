const carts = [
    //pc
    {   
        id:1,
        categorie:"pc",
        name:"Lenovo ThinkStation P620",
        description:"The Lenovo ThinkStation P620 is a high-end workstation designed for professionals in need of exceptional performance and reliability. Featuring AMD Ryzen Threadripper PRO processors and NVIDIA Quadro graphics",
        memoire:["250GB","500GB","1TB"],
        graphics:{
            nvidia:["RTX 4090","RTX 4070","GeForce RTX 4060","GeForce RTX 4080","RTX 4060 Ti"],
            amd:["Radeon RX 7900 XTX","Radeon RX 7600","Radeon RX 7800 XT","Radeon RX 7900 XT","Radeon RX 6700 XT"],
            intel:["Arc A750","Arc A380"]
        },
        processeur:{
            amd:["Ryzen 5 7600","Ryzen 7 7800X3D","Ryzen 7 5800X3D","Ryzen 9 7950X3D","Ryzen 5 7600X","Ryzen 5 5600X","AMD Ryzen 5 5600G"],
            intel:["Core i3-13100F","Core i5-13600K","Core i9-13900K","Core i7-13700K","Intel Core i5-13400"]
        },
        price:12000,
        image:"./image/thinkStation_P620.avif"
    },
    {
        id:2,
        categorie:"pc",
        name:"HP Z4 G4 Workstation",
        description:"The HP Z4 G4 Workstation is a versatile and powerful machine built for professionals who require top-tier performance. With Intel Xeon or Core processors and NVIDIA Quadro graphics, it excels in CAD, 3D rendering, and simulation. Its tool-less design allows for easy upgrades and customization.",
        memoire:["250GB","500GB","1TB"],
        graphics:{
            nvidia:["RTX 4090","RTX 4070","GeForce RTX 4060","GeForce RTX 4080","RTX 4060 Ti"],
            amd:["Radeon RX 7900 XTX","Radeon RX 7600","Radeon RX 7800 XT","Radeon RX 7900 XT","Radeon RX 6700 XT"],
            intel:["Arc A750","Arc A380"]
        },
        processeur:{
            amd:["Ryzen 5 7600","Ryzen 7 7800X3D","Ryzen 7 5800X3D","Ryzen 9 7950X3D","Ryzen 5 7600X","Ryzen 5 5600X","AMD Ryzen 5 5600G"],
            intel:["Core i3-13100F","Core i5-13600K","Core i9-13900K","Core i7-13700K","Intel Core i5-13400"]
        },
        price:10000,
        image:"./image/HP-Z4-G5-W3-2423-Workstation.jpg"
    },
    {
        id:3,
        categorie:"pc",
        name:"Alienware Aurora R12",
        description:"The Alienware Aurora R12 is a high-performance gaming PC designed for gamers who demand the best. Equipped with the latest Intel Core processors and NVIDIA GeForce RTX graphics, this powerhouse delivers smooth gameplay and stunning visuals. Its innovative cooling system ensures optimal performance even during the most intense gaming sessions.",
        memoire:["250GB","500GB","1TB"],
        graphics:{
            nvidia:["RTX 4090","RTX 4070","GeForce RTX 4060","GeForce RTX 4080","RTX 4060 Ti"],
            amd:["Radeon RX 7900 XTX","Radeon RX 7600","Radeon RX 7800 XT","Radeon RX 7900 XT","Radeon RX 6700 XT"],
            intel:["Arc A750","Arc A380"]
        },
        processeur:{
            amd:["Ryzen 5 7600","Ryzen 7 7800X3D","Ryzen 7 5800X3D","Ryzen 9 7950X3D","Ryzen 5 7600X","Ryzen 5 5600X","AMD Ryzen 5 5600G"],
            intel:["Core i3-13100F","Core i5-13600K","Core i9-13900K","Core i7-13700K","Intel Core i5-13400"]
        },
        price:13000,
        image:"./image/alienware-aurora-r12.webp"
    },
    {
        id:4,
        categorie:"pc",
        name:"HP Omen 30L",
        description:"The HP Omen 30L is a meticulously crafted gaming desktop designed for the ultimate gaming experience. With AMD Ryzen or Intel Core processors and NVIDIA GeForce RTX graphics, it provides exceptional speed and responsiveness. The customizable RGB lighting and sleek design make it a stylish addition to any setup.",
        memoire:["250GB","500GB","1TB"],
        graphics:{
            nvidia:["RTX 4090","RTX 4070","GeForce RTX 4060","GeForce RTX 4080","RTX 4060 Ti"],
            amd:["Radeon RX 7900 XTX","Radeon RX 7600","Radeon RX 7800 XT","Radeon RX 7900 XT","Radeon RX 6700 XT"],
            intel:["Arc A750","Arc A380"]
        },
        processeur:{
            amd:["Ryzen 5 7600","Ryzen 7 7800X3D","Ryzen 7 5800X3D","Ryzen 9 7950X3D","Ryzen 5 7600X","Ryzen 5 5600X","AMD Ryzen 5 5600G"],
            intel:["Core i3-13100F","Core i5-13600K","Core i9-13900K","Core i7-13700K","Intel Core i5-13400"]
        },
        price:9000,
        image:"./image/HP_Omen_30L.jpg"
    },
    {
        id:5,
        categorie:"pc",
        name:"MSI Trident 3",
        description:"The MSI Trident 3 is a compact yet powerful gaming PC that fits perfectly into any gaming environment. Featuring Intel Core processors and NVIDIA GeForce graphics, it delivers outstanding performance in a small form factor. Its silent cooling system ensures quiet operation, making it ideal for both gaming and home entertainment.",
        memoire:["250GB","500GB","1TB"],
        graphics:{
            nvidia:["RTX 4090","RTX 4070","GeForce RTX 4060","GeForce RTX 4080","RTX 4060 Ti"],
            amd:["Radeon RX 7900 XTX","Radeon RX 7600","Radeon RX 7800 XT","Radeon RX 7900 XT","Radeon RX 6700 XT"],
            intel:["Arc A750","Arc A380"]
        },
        processeur:{
            amd:["Ryzen 5 7600","Ryzen 7 7800X3D","Ryzen 7 5800X3D","Ryzen 9 7950X3D","Ryzen 5 7600X","Ryzen 5 5600X","AMD Ryzen 5 5600G"],
            intel:["Core i3-13100F","Core i5-13600K","Core i9-13900K","Core i7-13700K","Intel Core i5-13400"]
        },
        price:10000,
        image:"./image/msi_trident_3.jpg"
    },
    {
        id:6,
        categorie:"pc",
        name:"CyberPowerPC Gamer Xtreme VR",
        description:"The CyberPowerPC Gamer Xtreme VR is a robust gaming desktop built for virtual reality and high-definition gaming. Powered by the latest Intel Core processors and NVIDIA GeForce GTX graphics, it offers immersive gaming experiences and exceptional multitasking capabilities. Its VR-ready design ensures seamless compatibility with all major VR headsets.",
        memoire:["250GB","500GB","1TB"],
        graphics:{
            nvidia:["RTX 4090","RTX 4070","GeForce RTX 4060","GeForce RTX 4080","RTX 4060 Ti"],
            amd:["Radeon RX 7900 XTX","Radeon RX 7600","Radeon RX 7800 XT","Radeon RX 7900 XT","Radeon RX 6700 XT"],
            intel:["Arc A750","Arc A380"]
        },
        processeur:null,
        price:7500,
        image:"./image/CyberPowerPC_Gamer_Xtreme_VR.jpg"
    },
    {
        id:7,
        categorie:"pc",
        name:"Corsair Vengeance i7200",
        description:"The Corsair Vengeance i7200 is a premium gaming PC engineered for top-tier gaming and content creation. With Intel Core or AMD Ryzen processors and NVIDIA GeForce RTX graphics, it delivers breathtaking performance and visuals. The advanced cooling system and customizable RGB lighting make it a standout choice for serious gamers.",
        memoire:null,
        graphics:null,
        processeur:null,
        price:10000,
        image:"./image/corsair_vengence.jpg"
    },
    {
        id:8,
        categorie:"pc",
        name:"Dell Precision 7920",
        description:"The Dell Precision 7920 is a dual-processor workstation designed for the most demanding professional applications. Equipped with Intel Xeon processors and NVIDIA Quadro or AMD Radeon Pro graphics, it delivers unparalleled performance for 3D rendering, AI development, and scientific computing.",
        memoire:["250GB","500GB","1TB"],
        graphics:null,
        processeur:null,
        price:8000,
        image:"./image/dell_precision.jpg"
    },
    //Smartphone
    {
        id:9,
        categorie:"Smartphone",
        name:"Samsung Galaxy S24 Ultra",
        description:"Featuring a 6.8 Dynamic AMOLED display, Snapdragon 8 Gen 3 processor, and 12GB RAM, this phone offers exceptional performance and stunning visuals",
        memoire:["125GB","250GB","500GB"],
        processeur:{
            Exynos:["Exynos 2200","Exynos 2400","Exynos 1480","Exynos 1330"],
            Snapdragon:["Snapdragon 8 Gen 2","Snapdragon 7 Gen 2","Snapdragon 6 Gen 2","Snapdragon 4 Gen 2"]
        },
        price:12000,
        image:"./image/S24Ultra.jpg"
    },
    {
        id:10,
        categorie:"Smartphone",
        name:"Apple iPhone 14 Pro Max",
        description:"Equipped with a 6.7 Super Retina XDR display, A16 Bionic chip, and 6GB RAM, this phone provides top-tier performance and a high-quality camera system.",
        memoire:["125GB","250GB","500GB"],
        processeur:null,
        price:11000,
        image:"./image/iphone14.jpg"
    },
    {
        id:11,
        categorie:"Smartphone",
        name:"Google Pixel 7 Pro",
        description:"With a 6.7 OLED display, Tensor G2 processor, and 12GB RAM, this phone delivers powerful performance and advanced AI capabilities.",
        memoire:["125GB","250GB","500GB"],
        processeur:null,
        price:9000,
        image:"./image/Google-Pixel-7-Pro-blanc-neige-500x500.jpg"
    },
    {
        id:12,
        categorie:"Smartphone",
        name:"OnePlus 11 Pro",
        description:"Featuring a 6.7 Fluid AMOLED display, Snapdragon 8 Gen 2 processor, and 12GB RAM, this phone offers smooth performance and a vibrant display.	",
        memoire:["125GB","250GB","500GB"],
        processeur:null,
        price:9000,
        image:"./image/onePlus_!1.jpg"
    },
    {
        id:13,
        categorie:"Smartphone",
        name:"Xiaomi 14 Pro",
        description:"Equipped with a 6.7 AMOLED display, Snapdragon 8 Gen 2 processor, and 12GB RAM, this phone provides excellent performance and a sleek design.	",
        memoire:["125GB","250GB","500GB"],
        processeur:{
            Exynos:["Exynos 2200","Exynos 2400","Exynos 1480","Exynos 1330"],
            Snapdragon:["Snapdragon 8 Gen 2","Snapdragon 7 Gen 2","Snapdragon 6 Gen 2","Snapdragon 4 Gen 2"]
        },
        price:9500,
        image:"./image/xiomi14.jpg"
    },
    //souris
    {
        id:14,
        categorie:"souris",
        name:"Logitech G Pro X Superlight",
        description:"Lightweight design, HERO 25K sensor, and LIGHTFORCE Hybrid switches",
        dpi:["100","25600"],
        color:["black","white"],
        price:1500,
        image:"./image/logitechProX.jpg"
    },
    {
        id:15,
        categorie:"souris",
        name:"Razer Viper V3 Pro",
        description:"Focus Pro 35K sensor, optical switches, and ambidextrous design",
        dpi:["100","35000"],
        color:["black","white","orange"],
        price:1300,
        image:"./image/razerViper.jpg"
    },
    {
        id:16,
        categorie:"souris",
        name:"Logitech G Pro X Superlight 2",
        description:"HERO 25K sensor, LIGHTFORCE Hybrid switches, and wireless",
        dpi:["100","32000"],
        color:["black","white"],
        price:1500,
        image:"./image/logitechProX.jpg"
    },
    {
        id:17,
        categorie:"souris",
        name:"Razer DeathAdder V3 Pro",
        description:"Focus Pro 30K sensor, ergonomic design, and wireless",
        dpi:["100","32000"],
        color:["black","white","blue"],
        price:1400,
        image:"./image/razerDeathAdder.jpg"
    },
    {
        id:18,
        categorie:"souris",
        name:"ZOWIE EC2-CW",
        description:"PMW 3370 sensor, ergonomic design, and wireless",
        dpi:["100","32000"],
        color:["black","white","red"],
        price:1200,
        image:"./image/ZowieEc2.jpg"

    },
    //moniteur
    {
        id:19,
        categorie:"moniteur",
        name:"Cooler Master GA2501",
        description:"24.5 FHD IPS monitor with 1ms response time and Adaptive Sync support",
        RefreshRate:["100Hz","144Hz"],
        price:2000,
        image:"./image/CoolerMasterGA.jpg"
    },
    {
        id:20,
        categorie:"moniteur",
        name:"Cooler Master GA2701",
        description:"27 FHD IPS monitor with 1ms response time and FreeSync support",
        RefreshRate:["100Hz","144Hz"],
        price:1500,
        image:"./image/CoolerMasterGA2701.jpg"
    },
    {
        id:21,
        categorie:"moniteur",
        name:"Samsung C24RG50",
        description:"24 curved gaming monitor with FreeSync support",
        RefreshRate:["100Hz","144Hz"],
        price:3000,
        image:"./image/SamsangC24RCG50.jpg"
    },
    // casque
    {
        id:22,
        categorie:"casque",
        name:"Sony WH-1000XM4",
        description:"Premium noise-cancelling headphones with excellent sound quality and comfort",
        price:350,
        size:"universal",
        image:"./image/SonyWh.jpg"
    },
    {
        id:23,
        categorie:"casque",
        name:"Bose QuietComfort Ultra",
        description:"Over-ear headphones with adaptive noise cancellation and immersive audio experience",
        price:400,
        size:"universal",
        image:"./image/BoseQuitComfort.jpg"
    },
    {
        id:24,
        categorie:"casque",
        name:"Cambridge Audio Melomania P100",
        description:"High-end wireless headphones with expansive sound and 100 hours of battery life",
        price:300,
        size:"universal",
        image:"./image/CambridgeAudio.jpg"
    },
    //manette
    {
        id:25,
        categorie:"manette",
        name:"Xbox Elite Series 2",
        description:"High-end controller with customizable components, adjustable-tension thumbsticks, and a premium design",
        color:["Black","white"],
        price:500,
        image:"./image/xboxElitSerie2.jpg"
    },
    {
        id:26,
        categorie:"manette",
        name:"Sony DualSense Edge",
        description:"Advanced controller for PlayStation 5 with customizable buttons, adjustable triggers, and a sleek design",
        color:["White with black accents","Black"],
        price:600,
        image:"./image/sonyDualSenseEdge.jpg"
    },
    //electromenager
    {
        id:27,
        categorie:"electromenager",
        name:"Samsung Family Hub Refrigerator",
        description:"A smart refrigerator with a built-in touchscreen, multiple storage compartments, and advanced cooling technology.",
        price:25000,
        litrage:671,
        image:"./image/SamsangFamilyHub.jpg"
    },
    {
        id:28,
        categorie:"electromenager",
        name:"Philips Airfryer XXL",
        description:"A large-capacity air fryer with rapid air technology for healthy frying, baking, grilling, and roasting",
        price:3000,
        litrage:3.5,
        image:"./image/philipsAirfryerXXl.jpg"
    },
    {
        id:29,
        categorie:"electromenager",
        name:"Bosch Serie 8 Washing Machine",
        description:"A front-loading washing machine with EcoSilence Drive, anti-vibration design, and a range of wash programs.",
        price:12000,
        litrage:9,
        image:"./image/BoashSerie8WashingMachine.jpg"
    }
]
export default carts;