const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// DOM ELEMENTS
const teamContainer = document.querySelector("team-container")



// FUNZIONI




// STAMPA DELLE CARD PER OGNI MEMBRO
let listItem =""
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  listItem += `
        <div class="card-team bg-black d-flex">
            <div class="card_img">
                <img src="./img/male1.png" alt="Ragazzo 1">
            </div>
            <div class="card_info text-light p-3 me-5">
                <h4><strong>MARCO BIANCHI</strong></h4>
                <p>Designer</p>
                <a id="email" href="#">marcobianchi@team.com</a>
            </div>
        </div>`;
}
teamContainer.innerHTML = listItem;