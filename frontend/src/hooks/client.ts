import { useContext } from "react";
import { APIClientContext } from "../apiClient/context";
import { KukkaAPIClient } from "../apiClient/apiClient";
/**
 * React hook which returns the API client instance from the API client context.
 * If called outside API client context, an error will be thrown.
 */
export const useAPIClient = (): KukkaAPIClient => {
    const apiClient = useContext(APIClientContext);
    
    if (!apiClient) {
        throw new Error("API client context not available");
    }

    return apiClient;
}