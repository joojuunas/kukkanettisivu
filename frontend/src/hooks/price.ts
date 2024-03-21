import { AxiosError } from "axios";
import useSWR from "swr";
import { Price, fetchPrice, fetchPrices } from "../models";

/**
 * Returns one price 
 * 
 * @param id id of price to search for
 * @returns a price
 */
export const usePrice = (id : number | undefined): [Price | undefined | null, AxiosError | undefined] => {
    const { data, error } = useSWR<Price | null, AxiosError>(`http://127.0.0.1:8000/api/prices/${id}`, fetchPrice);
    return [data, error];
}

/**
 * Returns prices 
 * 
 * @returns prices
 */
export const usePrices = (): [Price[] | undefined | null, AxiosError | undefined] => {    
    const { data, error } = useSWR<Price[] | null, AxiosError>(`http://127.0.0.1:8000/api/prices/`, fetchPrices);
    return [data, error];
}