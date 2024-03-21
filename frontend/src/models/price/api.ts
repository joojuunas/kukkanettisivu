import axios from "axios";
import { Price, PriceData } from "./types";
import { convertPriceData } from "./converters";

export const fetchPrice = (url: string): Promise<Price> =>    
    axios
        .get<PriceData>(url)
        .then(response => convertPriceData(response.data));
        
export const fetchPrices = (url: string): Promise<Price[]> =>    
    axios
        .get<PriceData[]>(url)
        .then(response => response.data.map(convertPriceData));