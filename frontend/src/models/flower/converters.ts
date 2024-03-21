import { FlowerData, Flower, FlowerTimeFirst, FlowerTimeSecond } from "./types";

/** 
 * Converts flower data received from the API into flower instance.
 */
export const convertFlowerData = (data: FlowerData): Flower => ({
    id: data.id,
    nameFi: data.name_fi,
    nameSv: data.name_sv,
    nameEn: data.name_en,
    latinName: data.latin_name,
    flowerColor: data.flower_color,
    flowerTimeFirst: convertFlowerTimeFirst(data.flower_time_first),
    flowerTimeSecond: convertFlowerTimeSecond(data.flower_time_second),
    lightRequirement: convertLightRequirement(data.light_requirement),
    length: data.length,
    potSize: data.pot_size,
    price: data.price,
    photos: data.photos,
    addingSource: data.adding_source,
    addingWay: data.adding_way,
    additionalInformation: data.additional_information,
    new: data.new,
    dateAdded: data.date_added,
})

/**
 * Converts light_requirement to real value.
 */
function convertLightRequirement(lightRequirement: string): string  {
    if (lightRequirement === "1") {
        return "Aurinko"
    }
    if (lightRequirement === "2") {
        return "Puolivarjo"
    } else {
        return "Varjo"
    }
}

/**
 * Converts flowerTimeFirst to real value.
 */
function convertFlowerTimeFirst(flower_time_first: string): string {
    switch (flower_time_first) {
        case "1":
            return FlowerTimeFirst.TAMMI
            break;
        case "2":
            return FlowerTimeFirst.HELMI
            break;
        case "3":
            return FlowerTimeFirst.MAALIS
            break;
         case "4":
            return FlowerTimeFirst.HUHTI
            break;
        case "5":
            return FlowerTimeFirst.TOUKO
            break;
        case "6":
            return FlowerTimeFirst.KESÄ
            break;
         case "7":
            return FlowerTimeFirst.HEINÄ
            break;
        case "8":
            return FlowerTimeFirst.ELO
            break;
        case "9":
            return FlowerTimeFirst.SYYS
            break;
         case "10":
            return FlowerTimeFirst.LOKA
            break;
        case "11":
            return FlowerTimeFirst.MARRAS
            break;
        case "12":
            return FlowerTimeFirst.JOULU
            break;
    }
    return "error";
}

/**
 * Converts flowerTimeSecond to real value.
 */
function convertFlowerTimeSecond(flower_time_second: string): string {
    switch (flower_time_second) {
        case "13":
            return FlowerTimeSecond.TAMMI
            break;
        case "14":
            return FlowerTimeSecond.HELMI
            break;
        case "15":
            return FlowerTimeSecond.MAALIS
            break;
         case "16":
            return FlowerTimeSecond.HUHTI
            break;
        case "17":
            return FlowerTimeSecond.TOUKO
            break;
        case "18":
            return FlowerTimeSecond.KESÄ
            break;
         case "19":
            return FlowerTimeSecond.HEINÄ
            break;
        case "20":
            return FlowerTimeSecond.ELO
            break;
        case "21":
            return FlowerTimeSecond.SYYS
            break;
         case "22":
            return FlowerTimeSecond.LOKA
            break;
        case "23":
            return FlowerTimeSecond.MARRAS
            break;
        case "24":
            return FlowerTimeSecond.JOULU
            break;
    }
    return "error";
}