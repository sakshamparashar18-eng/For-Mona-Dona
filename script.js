// ==============================
// Welcome Page
// ==============================

const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");

// ==============================
// Cards
// ==============================

const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const question5 = document.getElementById("question5");
const question6 = document.getElementById("question6");

const letter = document.getElementById("letter");
const proposal = document.getElementById("proposal");

// ==============================
// Letter Elements
// ==============================

const typewriter = document.getElementById("typewriter");
const continueBtn = document.getElementById("continueBtn");

// ==============================
// Proposal Buttons
// ==============================

const yesLove = document.getElementById("yesLove");
const noLove = document.getElementById("noLove");

// ==============================
// Question Buttons
// ==============================

const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");

const yes2 = document.getElementById("yes2");
const maybe2 = document.getElementById("maybe2");

const yes3 = document.getElementById("yes3");
const maybe3 = document.getElementById("maybe3");

const yes4 = document.getElementById("yes4");
const maybe4 = document.getElementById("maybe4");

const yes5 = document.getElementById("yes5");
const maybe5 = document.getElementById("maybe5");

const yes6 = document.getElementById("yes6");
const maybe6 = document.getElementById("maybe6");

// ==============================
// Start Journey
// ==============================

startBtn.addEventListener("click", () => {
    welcome.classList.add("hidden");
    question1.classList.remove("hidden");
});

// ==============================
// Question 1
// ==============================

yesBtn.addEventListener("click", () => {
    question1.classList.add("hidden");
    question2.classList.remove("hidden");
});

maybeBtn.addEventListener("mouseover", () => moveButton(maybeBtn));

// ==============================
// Question 2
// ==============================

yes2.addEventListener("click", () => {
    question2.classList.add("hidden");
    question3.classList.remove("hidden");
});

maybe2.addEventListener("mouseover", () => moveButton(maybe2));

// ==============================
// Question 3
// ==============================

yes3.addEventListener("click", () => {
    question3.classList.add("hidden");
    question4.classList.remove("hidden");
});

maybe3.addEventListener("mouseover", () => moveButton(maybe3));

// ==============================
// Question 4
// ==============================

yes4.addEventListener("click", () => {
    question4.classList.add("hidden");
    question5.classList.remove("hidden");
});

maybe4.addEventListener("mouseover", () => moveButton(maybe4));

// ==============================
// Question 5
// ==============================

yes5.addEventListener("click", () => {
    question5.classList.add("hidden");
    question6.classList.remove("hidden");
});

maybe5.addEventListener("mouseover", () => moveButton(maybe5));

// ==============================
// Question 6
// ==============================

yes6.addEventListener("click", () => {

    question6.classList.add("hidden");
    letter.classList.remove("hidden");

    startTyping();

});

maybe6.addEventListener("mouseover", () => moveButton(maybe6));

// ==============================
// Continue Button
// ==============================

continueBtn.addEventListener("click", () => {

    letter.classList.add("hidden");
    proposal.classList.remove("hidden");

});

// ==============================
// YES Button
// ==============================

yesLove.addEventListener("click", () => {

    document.body.innerHTML = `
    <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        text-align:center;
        color:white;
        background:linear-gradient(135deg,#ff4d8d,#7b2cbf);
        font-family:Arial;
    ">

        <h1 style="font-size:70px;">❤️ I LOVE YOU ❤️</h1>

        <h2 style="margin-top:20px;">
            Thank you for saying YES, Mona 🥹
        </h2>

        <p style="font-size:28px;line-height:1.8;padding:20px;max-width:800px;">
            I promise to always respect you,
            support you,
            make you smile,
            and love you with all my heart.
            <br><br>
            Forever Yours,
            <br>
            <b>Saksham ❤️</b>
        </p>

    </div>
    `;

});

// ==============================
// NO Button
// ==============================

noLove.addEventListener("mouseover", () => {

    moveButton(noLove);

});

// ==============================
// Move Button
// ==============================

function moveButton(button){

    button.style.position="absolute";
    button.style.left=Math.random()*75+"%";
    button.style.top=Math.random()*75+"%";

}
// ==============================
// Letter Message
// ==============================

const message = `Dear Mona ❤️,

It's hard to believe it's only been four months since we met.🥰

Who would've thought that a random day in Free Fire's Social Island would introduce me to someone who would become so important to me? 😆

I still remember our first meeting.

You were showing me so much attitude 😂, and I kept sending you friend requests until you finally accepted one. 😵‍💫

Then I asked for your Instagram, but you didn't give it to me. 🥲

So I gave you mine instead, secretly hoping that one day you'd message me. 🤭

Finally, you gave me your Instagram.

From that day, everything slowly changed.

We became best friends. 🫂

We laughed together, shared random moments, and talked almost every day.

Somewhere between all those conversations...

I realized something.

I had fallen in love with you. ❤️

And yes...

I still think your forehead is the cutest thing ever. 😂❤️

Thank you for coming into my life.

Thank you for every laugh.

Thank you for every memory.

No matter what happens in the future...

These four months will always be one of my favorite chapters.

And now...

There's just one final question waiting for you... ❤️

Forever Yours,

Saksham ❤️`;

let i = 0;

// ==============================
// Typewriter Function
// ==============================

function startTyping() {

    typewriter.innerHTML = "";
    continueBtn.classList.add("hidden");

    i = 0;

    function type() {

        if (i < message.length) {

            typewriter.innerHTML += message.charAt(i);

            i++;

            setTimeout(type, 35);

        } else {

            continueBtn.classList.remove("hidden");

        }

    }

    type();

}