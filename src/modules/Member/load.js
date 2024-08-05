const userSection = document.getElementById("user");
const cardSection = document.getElementById("card");
const progressSection = document.getElementById("progress");
const main = document.querySelector("main");

export function load({ id, name, clientSince, appointmentHistory, loyaltyCard}) {
    const { totalCuts } = loyaltyCard;

    loadUserSection({ id, name, clientSince });
    loadCardSection({ id, totalCuts });    
    loadProgressSection(loyaltyCard);

    main.style.display = "grid";
}

function loadUserSection({ id, name, clientSince }) {
    const userAvatar = `src/assets/avatars/${id}.png`;

    const img = userSection.querySelector("img");
    const h2 = userSection.querySelector("#details h2");
    const p = userSection.querySelector("#details p");
    
    img.src = userAvatar;
    h2.textContent = name;
    p.textContent = `Cliente desde ${clientSince}`;
}

function loadCardSection({ id, totalCuts }) {
    const totalSlots = 10;

    const h2 = cardSection.querySelector("#tag-id h2");
    const slots = cardSection.querySelector("#slots");

    slots.textContent = "";

    h2.textContent = `ID: ${id}`;

    for (let i = 1; i <= totalSlots; i++) {
        const div = document.createElement("div");
        const img = document.createElement("img");

        const hasUserCut = i <= totalCuts;
        const isLastSlot = i === totalSlots;

        let image = null;        

        if (hasUserCut)
            image = "PinCheck.png";
        else
            image = isLastSlot ? "GiftSolid.svg" : null;
        
        div.classList.add("item");        
        img.alt = `Slot ${i}`;

        if (image) {
            img.src = `src/assets/${image}`;
            div.append(img);    
        }            
        
        slots.append(div);        
    }
}

function loadProgressSection ({ totalCuts, cutsNeeded, cutsRemaining }) {
    const span = progressSection.querySelector("#content span");
    const p = progressSection.querySelector("#content .linear-progress p");
    const progressIndicator = progressSection.querySelector("#content .progress-indicator");

    span.textContent = cutsRemaining;
    p.textContent = `${totalCuts} de ${cutsNeeded}`;

    progressIndicator.style.width = `${totalCuts * cutsNeeded}%`;
}