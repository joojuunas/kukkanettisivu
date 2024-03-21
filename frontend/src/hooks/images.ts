import { AxiosError } from "axios";
import useSWR from "swr";
import { ImageAddress, fetchImageAddress, fetchImageAddresses } from "../models";

/**
 * Returns one image address 
 * 
 * @param id of image
 * @returns an image address
 */
export const useImageAddress = (id : number): [ImageAddress | undefined | null, AxiosError | undefined] => {
    const { data, error } = useSWR<ImageAddress | null, AxiosError>(`http://127.0.0.1:8000/api/images/${id}`, fetchImageAddress);
    return [data, error];
}

/**
 * Returns Image addresses
 * 
 * @returns Image addresses
 */
export const useImageAddresses = (): [ImageAddress[] | undefined | null, AxiosError | undefined] => {
    const { data, error } = useSWR<ImageAddress[] | null, AxiosError>(`http://127.0.0.1:8000/api/images/`, fetchImageAddresses);    
    return [data, error];
}

// /**
//  * Returns one image
//  * 
//  * @param id of image
//  * @returns an image
//  */
// export const useImage = (name : string): [Image | undefined | null, AxiosError | undefined] => {
//     const { data, error } = useSWR<Image | null, AxiosError>(`${name}`, fetchImage);
//     return [data, error];
// }

// /**
//  * Returns Images
//  * 
//  * @returns Images
//  */
// export const useImages = (): [Image[] | undefined | null, AxiosError | undefined] => {
//     const { data, error } = useSWR<Image[] | null, AxiosError>(`http://127.0.0.1:900/`, fetchImages);    
//     return [data, error];
// }