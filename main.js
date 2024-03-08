const contador = document.getElementById("contador");
const prota = document.getElementById("prota");
const showMonedas = document.getElementById("showMonedas");
const coins1 = document.getElementById("coins1");
var numclick = 0;
var coins = 0;

function showCoins(val) {
    contador.textContent = val;
}

prota.addEventListener("click", function () {
    coins++;
    showMonedas.textContent = "Monedas : " + coins;
    numclick++;
    showCoins(numclick);

    if (numclick == 100) {
        prota.src = "https://img.freepik.com/vector-premium/cute-dibujos-animados-nino-pequeno-agitando-mano_322598-79.jpg";
    }
});

coins1.addEventListener("click", function () {
    if (coins >= 50) {
        coins -= 50;
        numclick +=1.5;
        showMonedas.textContent = "Monedas : " + coins;
    } else {
        alert("No tienes suficientes monedas para pulsar el botón.");
    }
});
