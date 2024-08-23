const menu=document.getElementById("menu");
console.log(menu);
const cross=document.getElementById('cross');
console.log(cross);



menu.addEventListener("click",()=>{
    document.getElementById("menu").style.display="none";
    document.getElementById("cross").style.display="block";
});

cross.addEventListener("click",()=>{
    document.getElementById("cross").style.display="none";
    document.getElementById("menu").style.display="block";
})

// document.getElementById("cross").style.display="none";