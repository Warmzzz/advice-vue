import { adviceType, searchByTermsResponse } from "../types/adviceTypes";

const base_url = "https://api.adviceslip.com";
const endpoints = {
    random: `${base_url}/advice`,
    adviceById: (id: number) => `${base_url}/advice/${id.toString()}`,
    adviceByWord: (terms: string) => `${base_url}/advice/search/${terms}`
}

export async function getRandomAdvice() : Promise<adviceType> {
    const response: adviceType = await fetch(endpoints.random)
            .then(r => {
                if(r.ok) {
                    return r.json();
                }
                throw new Error("Impossible de récupérer le conseil aléatoire.");
            });
    return response;
}

export async function getAdviceById(adviceId: number) : Promise<adviceType> {
    const errorText = `Impossible de récupérer le conseil avec l'ID ${adviceId}.`;
    const endpoint_url = endpoints.adviceById(adviceId);
    const response = await fetch(endpoint_url)
            .then(r => {
                if(r.ok){
                    return r.json();
                }
                throw new Error(errorText);
            });
    
    if(response?.message){
        throw new Error(errorText);
    }

    return response;
}

export async function getAdvicesByTerms(terms: string) : Promise<searchByTermsResponse> {
    const endpoint_url = endpoints.adviceByWord(terms);
    const response = await fetch(endpoint_url)
        .then(r => {
            if(r.ok){
                return r.json();
            }
            throw new Error("Impossible d'effectuer la recherche.");
        })
    
    if(response?.message){
        throw new Error("Impossible de trouver des conseils avec cette recherche.");
    }

    return response;
}