// Accordion

const accordionButtons =
document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        if(content.style.maxHeight){

            content.style.maxHeight = null;

        }else{

            content.style.maxHeight =
            content.scrollHeight + "px";
        }
    });
});


// Controle Fonte

const root =
document.documentElement;

let tamanhoFonte = 16;

document
.getElementById("aumentarFonte")
.addEventListener("click", () => {

    tamanhoFonte += 2;

    root.style.setProperty(
    "--font-size",
    tamanhoFonte + "px"
    );
});

document
.getElementById("diminuirFonte")
.addEventListener("click", () => {

    tamanhoFonte -= 2;

    if(tamanhoFonte < 12){
        tamanhoFonte = 12;
    }

    root.style.setProperty(
    "--font-size",
    tamanhoFonte + "px"
    );
});


// Tema Escuro

document
.getElementById("alternarTema")
.addEventListener("click", () => {

    document.body.classList.toggle("dark");
});


// Leitura por Voz

let utterance;

document
.getElementById("lerConteudo")
.addEventListener("click", () => {

    const texto =
    document.getElementById(
    "conteudoPrincipal"
    ).innerText;

    speechSynthesis.cancel();

    utterance =
    new SpeechSynthesisUtterance(texto);

    utterance.lang = "pt-BR";

    speechSynthesis.speak(utterance);
});

document
.getElementById("pararLeitura")
.addEventListener("click", () => {

    speechSynthesis.cancel();
});


// Comentário

document
.querySelector(".btn-enviar")
.addEventListener("click", () => {

    const texto =
    document.querySelector("textarea");

    if(texto.value.trim() !== ""){

        alert(
        "Comentário enviado com sucesso!"
        );

        texto.value = "";
    }
});


// Formulário

document
.querySelector("form")
.addEventListener("submit", (e)=>{

    e.preventDefault();

    alert(
    "Inscrição realizada com sucesso!"
    );

    e.target.reset();
});