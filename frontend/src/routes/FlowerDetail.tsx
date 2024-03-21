import { List, ListItem } from "@mui/material";
import { useFlower, useFlowers } from "../hooks/flowers";
import { usePrice } from "../hooks/price";
import { useLocation } from "react-router-dom";
import React from "react";
import { useImageAddresses } from "../hooks/images";

const FlowerDetail: React.FunctionComponent = () => {
    const location = useLocation();
    const flowerNameFi = location.pathname.slice(9);
    const [flowers, ] = useFlowers();
    const [flower, error] = useFlower(flowers.find(flower => flower.nameFi === flowerNameFi).id);
    const [price, priceerror] = usePrice(flower?.price);
    const [imageAddresses, imageError] = useImageAddresses();

    return (
    <>
        {flower && !error ? 
        <List key={flower.id}>
            {flower.photos && imageAddresses && !imageError && flower.photos.map(photo => 
                <ListItem key={photo}>{<img src={`http://127.0.0.1:800/${imageAddresses.find(i => i.id === photo)?.name}.jpeg`} />}</ListItem>
            )}
            <ListItem>{"Nimi: " + flower.nameFi}</ListItem>
            <ListItem>{"På Svenska: " + flower.nameSv}</ListItem>
            <ListItem>{"In English: " + flower.nameEn}</ListItem>
            <ListItem>{"Väri: " + flower.flowerColor}</ListItem>
            <ListItem>{"Pituus: " + flower.length}</ListItem>
            <ListItem>{"Ruukun koko: " + flower.potSize}</ListItem>
            <ListItem>{"Kukkimisaika: " + flower.flowerTimeFirst + flower.flowerTimeSecond}</ListItem>
            <ListItem>{"Uusi: " + flower.new}</ListItem>
            {price && !priceerror &&
                <ListItem>{"Hinta: " + price.price}</ListItem>
            }
           <ListItem>{"Lisätietoja: " + flower.additionalInformation}</ListItem>
        </List>
        :
        <p>No flower found</p>
        }
    </>
);
}
export default FlowerDetail;

