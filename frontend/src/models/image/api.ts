import axios from "axios";
import { ImageAddress } from "./types";

export const fetchImageAddress = (url: string): Promise<ImageAddress> =>    
    axios
        .get<ImageAddress>(url)
        .then(response => response.data)
        
export const fetchImageAddresses = (url: string): Promise<ImageAddress[]> =>    
    axios
        .get<ImageAddress[]>(url)
        .then(response => response.data)

// export const fetchImage = (name: string): Promise<Image> =>    
//     axios
//         .get<Image>(`http://127.0.0.1:900/${name}`)
//         .then(response => response.data)
        
// export const fetchImages = (imageAddresses: ImageAddress[], photoId: number): string => {
    
//     const name = imageAddresses?.find(i => i.id === photoId)?.imagePath;
//     axios
//         .get<Image[]>(`http://127.0.0.1:900/${name}`)
//         .then(response => response.data)
    
// }