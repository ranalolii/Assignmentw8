// var num = window.prompt('enter your number')

// document.getElementById('demo').innerHTML= num


    // var num = window.prompt('enter a number')
    // if (num % 3 == 0 && num % 4 ==0)console.log(yes)
    // else if (num % 3 != 0 && num % 4 != 0 )

    // document.getElementById('demo').innerHTML = num

   

    // var product={
    //     name: "Toshiba" ,
    //     price : 2000 ,
    //     desc: "loremloremloremlorem" ,
    //     imgURL : "imgurl" ,
    //     category: "TV"  
    // }

    // console.log(product.category);
    // console.log(product.price);

    // console.log(typeof product);

//    var colors =['red', 'blue', '#09c','orange' ,'test','coffee','caramel']   
    
//     console.log(colors.splice(1,1 )); 
    
//     console.log(colors);
    
//     for (var i = 0; i < colors.length; i++){
//     console.log(colors[i]); 
    
//  }

// var users=[
//     {
//         name : "Ahmed Ali" ,
//         age : 30 ,
//         email : "Ahmed@gmail.com" ,
         
       
//     },
//     {
//         name : "Omar Ali" ,
//         age : 27 ,
//         email : "Omar@gmail.com" ,
         
       
//     },
//     {
//         name : "Khaled hady" ,
//         age : 20 ,
//         email : "khaled@gmail.com" ,
         
        
//     },
//     {
//         name : "sherief tantos" ,
//         age : 23 ,
//         email : "Tantos@gmail.com" ,
       
       
//     },
// ]

// var  carton= ``

// // console.log(users.length)
// for (var i = 0 ; i < users.length; i++){
//     console.log(users[i].email);
//     carton += `
//     <tr>
//         <td>${users[i].name}</td>
//         <td>${users[i].age}</td>
//         <td>${users[i].email}</td>  
//     </tr>

//   `
// }

// document.getElementById('demo').innerHTML = carton

var productArray  =[]

function addProduct(){ 
    var productName = document.getElementById('productName').value
    var productPrice = document.getElementById('productPrice').value
    var productDesc = document.getElementById('productDesc').value

    var productObject ={
        name : productName,
        price: productPrice,
        desc: productDesc,
    }

    productArray.push(productObject)
    var Cartona =``
    for (var i = 0 ; i < productArray.length ; i++)
    Cartona += `
       
    `

}  
    

// var products = [
//     {
//       id:1,
//       name: "iPhone 9",
//       description: "An apple mobile which is nothing like apple",
//       price: 549,
//       quantity: 94,
//       imgUrl: "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
//     },
//     {
//       id:2,
//       name: "iPhone X",
//       description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//       price: 899,
//       quantity: 34,
//       imgUrl: "https://dummyjson.com/image/i/products/2/thumbnail.jpg"
//     },
//     {
//       id:3,
//       name: "Samsung Universe 9",
//       description: "Samsung's new variant which goes beyond Galaxy to the Universe",
//       price: 1249,
//       quantity: 36,
//       imgUrl: "https://dummyjson.com/image/i/products/3/thumbnail.jpg"
//     },
//     {
//       id:4,
//       name: "OPPOF19",
//       description: "OPPO F19 is officially announced on April 2021.",
//       price: 280,
//       quantity: 123,
//       imgUrl: "https://dummyjson.com/image/i/products/4/thumbnail.jpg"
//     },
//     {
//       id:5,
//       name: "Huawei P30",
//       description: "Huawei�s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//       price: 499,
//       quantity: 32,
//       imgUrl: "https://dummyjson.com/image/i/products/5/thumbnail.jpg"
//     },
//     {
//       id:6,
//       name: "MacBook Pro",
//       description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
//       price: 1749,
//       quantity: 83,
//       imgUrl: "https://dummyjson.com/image/i/products/6/thumbnail.png"
//     },
//     {
//       id:7,
//       name: "Samsung Galaxy Book",
//       description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
//       price: 1499,
//       quantity: 50,
//       imgUrl: "https://dummyjson.com/image/i/products/7/thumbnail.jpg"
//     },
//     {
//       id:8,
//       name: "Microsoft Surface Laptop 4",
//       description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
//       price: 1499,
//       quantity: 68,
//       imgUrl: "https://dummyjson.com/image/i/products/8/thumbnail.jpg"
//     },
//     {
//       id:9,
//       name: "Infinix INBOOK",
//       description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey � 1 Year Warranty",
//       price: 1099,
//       quantity: 96,
//       imgUrl: "https://dummyjson.com/image/i/products/9/thumbnail.jpg"
//     },
//     {
//       id:10,
//       name: "HP Pavilion 15-DK1056WM",
//       description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
//       price: 1099,
//       quantity: 89,
//       imgUrl: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg"
//     },
//     {
//       id:11,
//       name: "perfume Oil",
//       description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
//       price: 13,
//       quantity: 65,
//       imgUrl: "https://dummyjson.com/image/i/products/11/thumbnail.jpg"
//     },
//     {
//       id:12,
//       name: "Brown Perfume",
//       description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
//       price: 40,
//       quantity: 52,
//       imgUrl: "https://dummyjson.com/image/i/products/12/thumbnail.jpg"
//     },
//     {
//       id:13,
//       name: "Fog Scent Xpressio Perfume",
//       description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
//       price: 13,
//       quantity: 61,
//       imgUrl: "https://dummyjson.com/image/i/products/13/thumbnail.webp"
//     },
//     {
//       id:14,
//       name: "Non-Alcoholic Concentrated Perfume Oil",
//       description: "Original Al Munakh� by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
//       price: 120,
//       quantity: 114,
//       imgUrl: "https://dummyjson.com/image/i/products/14/thumbnail.jpg"
//     },
//     {
//       id:15,
//       name: "Eau De Perfume Spray",
//       description: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
//       price: 30,
//       quantity: 105,
//       imgUrl: "https://dummyjson.com/image/i/products/15/thumbnail.jpg"
//     },
//     {
//       id:16,
//       name: "Hyaluronic Acid Serum",
//       description: "L'Oréal Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
//       price: 19,
//       quantity: 110,
//       imgUrl: "https://dummyjson.com/image/i/products/16/thumbnail.jpg"
//     },
//     {
//       id:17,
//       name: "Tree Oil 30ml",
//       description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
//       price: 12,
//       quantity: 78,
//       imgUrl: "https://dummyjson.com/image/i/products/17/thumbnail.jpg"
//     },
//     {
//       id:18,
//       name: "Oil Free Moisturizer 100ml",
//       description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
//       price: 40,
//       quantity: 88,
//       imgUrl: "https://dummyjson.com/image/i/products/18/thumbnail.jpg"
//     },
//     {
//       id:19,
//       name: "Skin Beauty Sername",
//       description: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
//       price: 46,
//       quantity: 54,
//       imgUrl: "https://dummyjson.com/image/i/products/19/thumbnail.jpg"
//     },
//     {
//       id:20,
//       name: "Freckle Treatment Cream- 15gm",
//       description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
//       price: 70,
//       quantity: 140,
//       imgUrl: "https://dummyjson.com/image/i/products/20/thumbnail.jpg"
//     },
//     {
//       id:21,
//       name: "Elbow Macaroni - 400 gm",
//       description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
//       price: 14,
//       quantity: 146,
//       imgUrl: "https://dummyjson.com/image/i/products/22/thumbnail.jpg"
//     },
//     {
//       id:22,
//       name: "Orange Essence Food Flavou",
//       description: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
//       price: 14,
//       quantity: 26,
//       imgUrl: "https://dummyjson.com/image/i/products/23/thumbnail.jpg"
//     },
//     {
//       id:23,
//       name: "cereals muesli fruit nuts",
//       description: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
//       price: 46,
//       quantity: 113,
//       imgUrl: "https://dummyjson.com/image/i/products/24/thumbnail.jpg"
//     },
//     {
//       id:24,
//       name: "Gulab Powder 50 Gram",
//       description: "Dry Rose Flower Powder Gulab Powder 50 Gram � Treats Wounds",
//       price: 70,
//       quantity: 47,
//       imgUrl: "https://dummyjson.com/image/i/products/25/thumbnail.jpg"
//     },
//     {
//       id:25,
//       name: "Plant Hanger For Home",
//       description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
//       price: 41,
//       quantity: 131,
//       imgUrl: "https://dummyjson.com/image/i/products/26/thumbnail.jpg"
//     },
//     {
//       id:26,
//       name: "Flying Wooden Bird",
//       description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
//       price: 51,
//       quantity: 17,
//       imgUrl: "https://dummyjson.com/image/i/products/27/thumbnail.webp"
//     },
//     {
//       id:27,
//       name: "3D Embellishment Art Lamp",
//       description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
//       price: 20,
//       quantity: 54,
//       imgUrl: "https://dummyjson.com/image/i/products/28/thumbnail.jpg"
//     },
//     {
//       id:28,
//       name: "Handcraft Chinese style",
//       description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
//       price: 60,
//       quantity: 7,
//       imgUrl: "https://dummyjson.com/image/i/products/29/thumbnail.webp"
//     },
//     {
//       id:29,
//       name: "Key Holder",
//       description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
//       price: 30,
//       quantity: 54,
//       imgUrl: "https://dummyjson.com/image/i/products/30/thumbnail.jpg"
//     }
//   ]

// var carton = ``

// for (var i=0 ; i < products.length ; i++) {
//     carton += `
//     <div class="col-md-4">
//         <div class="shadow-lg p-3 mb-5 bg-white rounded" class=" py-3 text-center">
//             <img src="${products[i].imgUrl}" height="300" class="w-100" alt="">
//         <h4 class="my-2">${products[i].name}</h4>
//         <span>${products[i].price}</span>
//     </div>
// </div>
// `  
// }

// document.getElementById('demo').innerHTML = carton