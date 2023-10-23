import { apiUrl } from './const';

export const getOnePlant = async (id = 0) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`);
        const data = await response.json();
        return data;
        // console.log(`https://plantmed.jsprod.fr/api/plante/${id}`, response)
    } catch (error) {
        console.error(error);
        return { error: true };
    }
};
