import { AxiosError } from "axios";
import useSWR from "swr";
import { Flower, fetchFlower, fetchFlowers } from "../models";

/**
 * Returns one flower 
 * 
 * @param nameFi finnish name of flower to search for
 * @returns a flower
 */
export const useFlower = (id : string): [Flower | undefined | null, AxiosError | undefined] => {
    const { data, error } = useSWR<Flower | null, AxiosError>(`http://127.0.0.1:8000/api/kukat/${id}`, fetchFlower);
    return [data, error];
}

/**
 * Returns flowers
 * 
 * @returns flowers
 */
export const useFlowers = (): [Flower[] | undefined | null, AxiosError | undefined] => {
    const { data, error } = useSWR<Flower[] | null, AxiosError>(`http://127.0.0.1:8000/api/kukat/`, fetchFlowers);    
    return [data, error];
}
