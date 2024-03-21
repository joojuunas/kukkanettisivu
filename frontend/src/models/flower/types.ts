export type Flower = {
    id: number;
    nameFi: string;
    nameSv: string;
    nameEn: string;
    latinName: string;
    flowerColor: string;
    flowerTimeFirst: string;
    flowerTimeSecond: string;
    lightRequirement: string;
    length: string;
    potSize: string;
    price: number;
    photos: number[];
    addingSource: string;
    addingWay: string;
    additionalInformation: string;
    new: boolean;
    dateAdded: Date;
};

export type FlowerData = {
    id: number;
    name_fi: string;
    name_sv: string;
    name_en: string;
    latin_name: string;
    flower_color: string;
    flower_time_first: string;
    flower_time_second: string;
    light_requirement: string;
    length: string;
    pot_size: string;
    price: number;
    photos: number[];
    adding_source: string;
    adding_way: string;
    additional_information: string;
    new: boolean;
    date_added: Date;
};

/** The month when the Flower starts to flower */
export enum FlowerTimeFirst {
        TAMMI = "Tammikuu",
        HELMI = "Helmikuu",
        MAALIS = "Maaliskuu",
        HUHTI = "Huhtikuu",
        TOUKO = "Toukokuu",
        KESÄ = "Kesäkuu",
        HEINÄ = "Heinäkuu",
        ELO = "Elokuu",
        SYYS = "Syyskuu",
        LOKA = "Lokakuu",
        MARRAS = "Marraskuu",
        JOULU = "Joulukuu",
}

/**  The month when the Flower stops flowering */
export enum FlowerTimeSecond {
    TAMMI = "-tammikuu",
    HELMI = "-helmikuu",
    MAALIS = "-maaliskuu",
    HUHTI = "-huhtikuu",
    TOUKO = "-toukokuu",
    KESÄ = "-kesäkuu",
    HEINÄ = "-heinäkuu",
    ELO = "-elokuu",
    SYYS = "-syyskuu",
    LOKA = "-lokakuu",
    MARRAS = "-marraskuu",
    JOULU = "-joulukuu",
}