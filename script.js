const btn = document.getElementById('btn');

btn.addEventListener("change", (e) =>{
    document.body.classList.toggle("dark", e.target.checked);
    // adiciona a classe dark dentro do body
})