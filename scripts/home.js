if (localStorage.getItem("logged") !== "true") window.location.href = "../index.html"

const exitButton = document.getElementById("exit-button");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const modal = document.getElementById("modal");
const modalButton = document.getElementById("fecharModal");
const modalImage = document.getElementById("modal-image");
const modalPrice = document.getElementById("modal-price");
const modalSize = document.getElementById("modal-size");
const modalBedrooms = document.getElementById("modal-bedrooms");
const modalBathrooms = document.getElementById("modal-bathrooms");

window
  .addEventListener("load", () => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((response) => {
        const opportunities = response.opportunities;
        opportunities.forEach((item, i) => {
          if (i < 4) {
            line1.innerHTML += `
                        <div class="best-oportunities-option" onClick="openModal(${item.id})">
                            <img src="${item.image}" alt=""/>
                            <p class="option-price">${item.price}</p>
                            <p class="option-area">${item.size}</p>
                            <div class="bedrooms-and-bathrooms">
                            <p>${item.bedrooms}</p>
                            <p>${item.bathrooms}</p>
                            </div>
                        </div>
                        `;
          } else {
            line2.innerHTML += `
                        <div class="best-oportunities-option" onClick="openModal(${item.id})">
                            <img src="${item.image}" alt=""/>
                            <p class="option-price">${item.price}</p>
                            <p class="option-area">${item.size}</p>
                            <div class="bedrooms-and-bathrooms">
                            <p>${item.bedrooms}</p>
                            <p>${item.bathrooms}</p>
                            </div>
                        </div>
                        `;
          }
        });
      })
      .catch((err) => {
        line1.innerHTML = "Ocorreu um erro ao carregar as melhores oportunidades.";
        line2.innerHTML = "";
      });
  })
  
modalButton.addEventListener('click',() => {
    modal.style.display = "none"
})

function openModal(id){
    modal.style.display = "flex"
    
    fetch("../data.json")
      .then((response) => response.json())
      .then((response) => {
        const obj = response.opportunities[id]
        modalImage.src = obj.image
        modalPrice.innerHTML = obj.price
        modalSize.innerHTML = obj.size
        modalBedrooms.innerHTML = obj.bedrooms
        modalBathrooms.innerHTML = obj.bathrooms
        })
      .catch((err) => {
        modalPrice.innerHTML = "Ocorreu um erro ao carregasr as informações deste modal.";
      });


}

exitButton.addEventListener("click",()=>{
  if(localStorage.getItem("logged") !== null) localStorage.setItem("logged", "false");
})