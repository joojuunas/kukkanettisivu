import { createContext } from "react";
import { KukkaAPIClient } from "./apiClient";

export type InjectedAPIClientProps = { apiClient: KukkaAPIClient };

export const APIClientContext = createContext<KukkaAPIClient | null>(null);
export const APIClientProvider = APIClientContext.Provider;
export const APIClientConsumer = APIClientContext.Consumer;