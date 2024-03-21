import { PriceData, Price } from "./types";

/** 
 * Converts flower data received from the API into flower instance.
 */
export const convertPriceData = (data: PriceData): Price => ({
    id: data.id,
    amount: data.amount,
    currency: data.currency,
    price: data.amount + " " + data.currency,
})