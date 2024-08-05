import { getClientById } from "../../services/getClientById.js"
import { load } from "../Member/load.js"

const form = document.querySelector("form");
const clientCardId = document.getElementById("member-card-id");
const submitButton = document.querySelector("form button");

form.onsubmit = async (event) => {
    event.preventDefault();
    disableSubmit();

    try {
        const cardId = clientCardId.value.trim();

        if (!cardId)
            throw "Informe o ID do cartão!";

        const clientInfo = await getClientById(cardId);

        if (!clientInfo?.id)
             throw "Não foi possível buscar. Tente novamente mais tarde.";
        
        clientCardId.value = "";
    } catch (error) {
        clientCardId.focus();
        alert(error);
    } finally {
        enableSubmit();
    }
}

function disableSubmit() {
    submitButton.disabled = true;
}

function enableSubmit() {
    submitButton.disabled = false;
}