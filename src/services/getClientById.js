import { apiConfig } from "./api-config.js"

export async function getClientById(clientId) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/clients/${clientId}`);

        if (response.status === 404)
            throw `O número de ID ${clientId} é inválido!`;

        const data = await response.json();

        return data;
    } catch (error) {
        throw error;
    }
}