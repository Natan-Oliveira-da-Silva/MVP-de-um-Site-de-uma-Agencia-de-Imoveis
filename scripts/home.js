const line1 = document.getElementById("line1")
const line2 = document.getElementById("line2")

window.addEventListener('load',()=>{
    fetch("../data.json")
        .then(response => response.json())
        .then(response=>{
            console.log(response.opportunities)
            const opportunities = response.opportunities
            opportunities.forEach((item, i) => {
                if(i<4){
                    line1.innerHTML += `
                        <div class="best-oportunities-option">
                            <img src="${item.image}" alt=""/>
                            <p class="option-price">R$ ${item.price}</p>
                            <p class="option-area">${item.size} m²</p>
                            <div class="bedrooms-and-bathrooms">
                            <p>${item.bedrooms} quartos</p>
                            <p>${item.bathrooms} banheiros</p>
                            </div>
                        </div>
                        `
                }else{
                    line2.innerHTML += `
                        <div class="best-oportunities-option">
                            <img src="${item.image}" alt=""/>
                            <p class="option-price">R$ ${item.price}</p>
                            <p class="option-area">${item.size} m²</p>
                            <div class="bedrooms-and-bathrooms">
                            <p>${item.bedrooms} quartos</p>
                            <p>${item.bathrooms} banheiros</p>
                            </div>
                        </div>
                        `
                }


                
            })
        })
})
