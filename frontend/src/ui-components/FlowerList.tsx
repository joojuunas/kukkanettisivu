import {  List, ListItem } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { usePrices } from "../hooks/price";
import React from "react";
import { useImageAddresses } from "../hooks/images";
import RoutedLink from "./RoutedLink";
import { Flower } from "../models";

type FlowerListProps = {
    flowers: Flower[] | null | undefined;
};

const FlowerList: React.FunctionComponent<FlowerListProps> = ({ flowers }) => {
    const [prices, priceError] = usePrices();
    const [imageAddresses, imageError] = useImageAddresses();
    return (
        <>
            {((flowers === null || undefined)) ? 
                <p>No flowers found</p>
            :
                    <Grid container> 
                        {flowers?.map((flower, index) => (
                        <Grid xs={12} md={4} xl={2} key={index} sx={{ display: "grid", justifyContent: "center",  }}> 
                            {/* TODO change this routedlink to a route so that the text stays normal */}
                            <RoutedLink key={flower.id} to={`flowers/${flower.nameFi}`} underline="none" aria-label={`Go to ${flower.nameFi} detail page`} sx={{ color: "text.primary",}}>
                                <List key={flower.id}>
                                    {imageAddresses && !imageError && flower.photos.map(photo => 
                                        <ListItem key={photo}>{<img width="250px" src={`http://127.0.0.1:800/${imageAddresses.find(i => i.id === photo)?.name}.jpeg`} />}</ListItem>
                                    )}
                                    <ListItem>{"Nimi: " + flower.nameFi}</ListItem>
                                    <ListItem>{"Latinan kielinen nimi: " + flower.latinName}</ListItem>
                                    <ListItem>{"På Svenska: " + flower.nameSv}</ListItem>
                                    <ListItem>{"In English: " + flower.nameEn}</ListItem>
                                    <ListItem>{"Väri: " + flower.flowerColor}</ListItem>
                                    <ListItem>{"Valovaatimus: " + flower.lightRequirement}</ListItem>
                                    <ListItem>{"Pituus: " + flower.length}</ListItem>
                                    <ListItem>{"Ruukun koko: " + flower.potSize}</ListItem>
                                    <ListItem>{"Kukkimisaika: " + flower.flowerTimeFirst + flower.flowerTimeSecond}</ListItem>
                                    <ListItem>{"Uusi: " + flower.new}</ListItem>
                                    {prices && !priceError &&
                                    <ListItem>{"Hinta: " + prices.find(p => p.id === flower.price)?.price}</ListItem>
                                    }
                                    <ListItem>{"Lisätietoja: " + flower.additionalInformation}</ListItem>
                                </List>
                            </RoutedLink>
                        </Grid>
                    ))}
                </Grid>
            }
        </>
    );
}

export default FlowerList;
