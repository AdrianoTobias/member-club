const userSection = document.getElementById("user");
const main = document.querySelector("main");

export function load({ id, name, clientSince, appointmentHistory, loyaltyCard}) {
    loadUserSection({ id, name, clientSince });

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