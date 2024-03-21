import axios from "axios";
import { Flower, FlowerData } from "./types";
import { convertFlowerData } from "./converters";

export const fetchFlower = (url: string): Promise<Flower> =>    
    axios
        .get<FlowerData>(url)
        .then(response => convertFlowerData(response.data))
        
export const fetchFlowers = (url: string): Promise<Flower[]> =>    
    axios
        .get<FlowerData[]>(url)
        .then(response => response.data.map(convertFlowerData))