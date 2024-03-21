import { createAPIClient } from "./apiClient/apiClient";

/**
 * 
 * @returns API client to use for HTTP requests
 */
export const getAPIClient = () => {
    const isProduction: boolean = process.env.NODE_ENV === "production";
    const baseURL: string =
        process.env.REACT_APP_API_URL || (isProduction ? "/api/" : "https://127.0.0.1:8000/api/");

    const apiClient = createAPIClient({
        baseURL,
    });

    return apiClient;
    }
    