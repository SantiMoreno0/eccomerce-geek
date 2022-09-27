const form = document.querySelector(".form");
const enviar = document.querySelector(".form__cta");

function agregarProducto(img) {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "product.json"
        },
        body: JSON.stringify({img})
    })
}

class Hola {
    "hg"
}