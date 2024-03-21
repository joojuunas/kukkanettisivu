import { AxiosInstance } from "axios"

export declare type KukkaAPIClient = {
    /** The Axios instance used for making HTTP requests */
    axios: AxiosInstance;
};
export declare type KukkaAPIClientConfiguration = {
    /** URL to the Kukkanettisivu API */
    baseURL: string;
}
/**
 * Constructs new Kukka API client
 * 
 * @param config Configuration options for the API client
 */
export declare const createAPIClient: (config: KukkaAPIClientConfiguration) => KukkaAPIClient;