const products=[
{id:1,title:"Арбітраж",price:49,img:"https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800"},
{id:2,title:"Крипта",price:59,img:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800"},
{id:3,title:"Telegram",price:39,img:"https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800"},
{id:4,title:"AI Tools Pack",price:79,img:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"}
];

let cart=[];

const grid=document.getElementById("productsGrid");
const cartBox=document.getElementById("cart");
const items=document.getElementById("cartItems");
const total=document.getElementById("totalPrice");
const count=document.getElementById("cartCount");

function render(){
grid.innerHTML="";
products.forEach(p=>{
grid.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h3>${p.title}</h3>
<div class="price">${p.price}$</div>
<button class="buy" onclick="add(${p.id})">Купити</button>
</div>`;
});
}

render();

function add(id){
const p=products.find(x=>x.id===id);
cart.push(p);
update();
cartBox.classList.add("active");
}

function update(){
items.innerHTML="";
let sum=0;

cart.forEach((c,i)=>{
sum+=c.price;
items.innerHTML+=`
<div>
<span>${c.title} - ${c.price}$</span>
<button onclick="removeItem(${i})">✕</button>
</div>`;
});

total.innerText=sum+"$";
count.innerText=cart.length;
}

function removeItem(i){
cart.splice(i,1);
update();
}

document.querySelector(".cart-btn").onclick=()=>cartBox.classList.add("active");
document.getElementById("closeCart").onclick=()=>cartBox.classList.remove("active");

document.querySelector(".buy-btn").onclick=()=>{
window.open("https://send.monobank.ua/jar/QBT9uQLR3","_blank");
};