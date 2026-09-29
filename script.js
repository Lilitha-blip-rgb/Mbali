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

Sawubona Mbalii 🌸,

I don't usually write things like this, but sengwe ka wena just feels different.
By the way, how were your holidays? Ke tshepa gore o ne wa di enjoya.
my results werent too bad icl, i missed a distiction by a percent 😭😂,
so, wena how did you do?
Ke rata vibe ya gago, Ga ke itse gore this will go kae,🤍
i really like you, but ik u said youre not looking for anything at all
but im sure we could figure something outtt atleast, how about a date?

Lilitha 
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