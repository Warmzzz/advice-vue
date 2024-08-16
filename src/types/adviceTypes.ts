
export interface adviceType {
    slip: {
        advice: string,
        id: number
    }
}

export interface adviceSearchType {
    id: number,
    advice: string,
    date: string
}

export interface searchByTermsResponse {
    query: string,
    slips: adviceSearchType[],
    total_result: string
}