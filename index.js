const sectionThree = document.getElementById("Section-three");
const btnNum1 = document.getElementById("btn-num1");
const btnNum2 = document.getElementById("btn-num2");

const projectDetails = [
  {
    id: 0,
    name: "Dawar Fuad",
    title: "Career development, CTO at Plus The Edge",
    description:
      "Dawar Fuad is a CTO at Plus The Edge, a tech program host presenter, and well-known for his expertise in technology.",
    image: "./images/dawar.jpg",
  },
  {
    id: 1,
    name: "Khadijah Abdul-Nabi",
    title: "UI/UX designer",
    description:
      "Khadijah Abdul Nabi is a multi-disciplinary creative and brand strategist based in Erbil, Iraq. She is female-led design studio in Iraq established in 2017.",
    image: "./images/Khadijah_Graphic_Design.jpg",
  },
  {
    id: 2,
    name: "Sara Ali",
    title: "Mobile developer",
    description:
      "She was a Gateway mobile developer who used flutter to create Mytv, FIB, and Fastpay for mobile.",
    image: "./images/person1.jpg",
  },
  {
    id: 3,
    name: "ahmed abdulqadir",
    title: "Back-end developer",
    description:
      "He was a Gateway back-end developer who used Laravel to create Mytv, FIB, and Fastpay for website and mobile.",
    image: "./images/person2.jpg",
  },
  {
    id: 4,
    name: "Ibrahim Ali",
    title: "Front-end developer",
    description:
      "He was a Gateway front-end developer who used React.js to create Mytv, FIB, and Fastpay for website.",
    image: "./images/person3.jpg",
  },
  {
    id: 5,
    name: "huda abdulqadir",
    title: "Scrum Master & UI/UX designer",
    description:
      "She was a Gateway UI/UX designer who used Adobe XD to designe Mytv, FIB, and Fastpay for mobile and website.",
    image: "./images/person4.jpg",
  },
];

function repeatSpeakers(n) {
  sectionThree.innerHTML = "";
  const screenWidth = document.documentElement.clientWidth || window.innerWidth;
  if (n === null || n === undefined) {
    n = screenWidth >= 800 ? projectDetails.length : 2;
    btnNum1.classList.toggle("hidden", screenWidth >= 800);
    btnNum2.classList.toggle("hidden", screenWidth < 800);
  }
  for (let count = 0; count < n; count += 1) {
    const speaker = projectDetails[count];
    sectionThree.innerHTML += `<div class="background-speaker">    
        <img class="background-img-speaker" src="${speaker.image}" alt="program1">
        <div class="background">    
          <h2 class="speaker-name">${speaker.name}</h2>
          <h3 class="speaker-title">${speaker.title}</h3>
          <div class="second-hr"></div>
          <p class="speaker-description">${speaker.description}</p>
        </div>
      </div>`;
  }
}

function expandMore() {
  btnNum1.classList.add("hidden");
  btnNum2.classList.remove("hidden");
  repeatSpeakers(projectDetails.length);
}

function showLess() {
  btnNum1.classList.remove("hidden");
  btnNum2.classList.add("hidden");
  repeatSpeakers(2);
}

document.addEventListener("DOMContentLoaded", () => repeatSpeakers(), false);
btnNum1.addEventListener("click", expandMore);
btnNum2.addEventListener("click", showLess);
