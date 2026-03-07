const API_URL = (import.meta as any).env.VITE_API_URL || 'http://localhost:3000';

export interface NewsArticle {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

export interface ServerResponse {
    status: number;
    success: boolean;
    message: string;
    data?: NewsApiResponse;
    error?: string;
}

export const newsAPI = {
    // Fetch all news
    getAllNews: async (pageSize = 40, page = 1): Promise<ServerResponse> => {
        const response = await fetch(
            `${API_URL}/all-news?pageSize=${pageSize}&page=${page}`
        );
        return response.json();
    },

    // Fetch top headlines by category
    getTopHeadlines: async (
        category = 'general',
        pageSize = 80,
        page = 1
    ): Promise<ServerResponse> => {
        const response = await fetch(
            `${API_URL}/top-headlines?category=${category}&pageSize=${pageSize}&page=${page}`
        );
        return response.json();
    },

    // Fetch country-specific headlines
    getCountryHeadlines: async (
        countryCode: string,
        pageSize = 80,
        page = 1
    ): Promise<ServerResponse> => {
        const response = await fetch(
            `${API_URL}/country/${countryCode}?pageSize=${pageSize}&page=${page}`
        );
        return response.json();
    },
};
