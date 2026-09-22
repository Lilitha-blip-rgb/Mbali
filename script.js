const hearts = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);

const letter = `

Sawubona Mbalii 🧟‍♀️,

Sawubonaa we ntombentle, ngiyathemba uyaphila, Umuhle weNtombazane,
But fix your attitude fn😒
Other than that i really enjoyed our time together, youre so unique and different
Obviously youre not the funniest 💁🏽 but uyazama
I hope we can spend more time together youre cool and i'm so sorry about your eye
I wanted to get you something but ayy wena youd probably dismiss the
But im looking forward and stop being performative 🤣
I like you.

Lilitha 🦅
`;

const button = document.getElementById("openBtn");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", () => {

    overlay.style.opacity = "0";

    setTimeout(() => {

        overlay.innerHTML = `
            <div id="letter">
                <h2>Lilitha🦅</h2>
                <p id="typewriter"></p>
            </div>
        `;

        overlay.style.opacity = "1";

        let i = 0;

        function type() {
            if (i < letter.length) {
                document.getElementById("typewriter").innerHTML += letter.charAt(i);
                i++;
                setTimeout(type, 35);
            }
        }

        type();

    }, 700);

});