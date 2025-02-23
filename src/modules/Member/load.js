import { showModal } from "../Form/modal.js";

const userSection = document.getElementById("user");
const cardSection = document.getElementById("card");
const progressSection = document.getElementById("progress");
const historySection = document.getElementById("history");
const main = document.querySelector("main");

export function load({ id, name, clientSince, appointmentHistory, loyaltyCard}) {
    const { totalCuts, cutsNeeded } = loyaltyCard;

    loadUserSection({ id, name, clientSince });
    loadCardSection({ id, totalCuts });    
    loadProgressSection(loyaltyCard);
    loadHistorySection(appointmentHistory);

    if (totalCuts === cutsNeeded)
        showModal();

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

function loadHistorySection(appointmentHistory) {
    const totalCuts = appointmentHistory.length;  

    const p = historySection.querySelector("#history header p");
    const ul = historySection.querySelector("#history ul");

    p.textContent = `${totalCuts} cortes`
    ul.textContent = "";

    for (const appointment of appointmentHistory) {
        const date = appointment.date;
        const time = appointment.time;

        const li = document.createElement("li");
        const divTitle = document.createElement("div");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const divContainer = document.createElement("div");
        const img = document.createElement("img");
                
        h2.textContent = date;
        p.textContent = time;
        
        divTitle.classList.add("title");
        divTitle.append(h2);
        divTitle.append(p);        

        img.src = "src/assets/icons/sealCheck.svg";
        img.alt = "Selo de check";

        divContainer.classList.add("seal-check-container");
        divContainer.append(img);
        
        li.classList.add("cut");
        li.append(divTitle);
        li.append(img);

        ul.append(li);
    }
}