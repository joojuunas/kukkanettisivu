import { Box, FormControlLabel, IconButton, InputBase, Paper, Radio, RadioGroup } from "@mui/material";
import FlowerList from "../ui-components/FlowerList";
import { useFlowers } from "../hooks/flowers";
import { useState } from "react";
import menusvg from "../photos/menu-svgrepo-com.svg"
import searchsvg from "../photos/search-svgrepo-com.svg"
import { Flower } from "../models";
import { usePrices } from "../hooks/price";

const data = [
    {field: "nimi"},
    {field: "ruotsinkielinen nimi"},
    {field: "englanninkielinen nimi"},
    {field: "latinankielinen nimi"},
    {field: "väri"},
    {field: "kukkimisen alkaminen"},
    {field: "kukkimisen loppuminen"},
    {field: "pituus"},
    {field: "ruukunkoko"},
    {field: "hinta"},
    {field: "lisäyslähde"},
    {field: "lisäystapa"},
    {field: "lisätietoja"},
    {field: "uusi"},
];

const FlowerIndex: React.FunctionComponent = () => {
    const [flowers, error] = useFlowers();
    const [prices] = usePrices();
    const [haku, setHaku] = useState("");
    const [auki, setAuki] = useState(false);
    const [valittu, setValittu] = useState("nimi");
    
    function tekstiHaku(): Flower[] | null | undefined {
        // const n:[[id: number, score: number]] = [[0,0]]; 
        // tee lista ja lisää siihen kukkien id ja n jolla verrataan kuinka hyvin hakusana sopii kukkaan
        // data.forEach((item) => {
        //     if (item.field === valittu) {
        //         for (let i=0; i<haku.length; i++) {
                    // flowers?.forEach((flower) => {
                        switch (valittu) {
                            case "nimi":
                                // if (haku[i]===flower.nameFi[i]) {
                                //     let k=0
                                //     k++
                                // if (n.find((pair) => pair[0] !== flower.id) === undefined) {
                                //     n.push([flower.id, k])
                                // }}
                                // tee näin
                                return flowers?.filter((flower) => flower.nameFi.includes(haku)=== true);
                                break;
                            case "ruotsinkielinen nimi":
                                return flowers?.filter((flower) => flower.nameSv.includes(haku)=== true);
                                break;
                            case "englanninkielinen nimi":
                                return flowers?.filter((flower) => flower.nameEn.includes(haku)=== true);
                                break;
                            case "latinankielinen nimi":
                                return flowers?.filter((flower) => flower.latinName.includes(haku)=== true);
                                break;
                            case "väri":
                                return flowers?.filter((flower) => flower.flowerColor.includes(haku)=== true);
                                break;
                            case "kukkimisen alkaminen":
                                return flowers?.filter((flower) => flower.flowerTimeFirst.includes(haku)=== true);
                                break;
                            case "kukkimisen loppuminen":
                                return flowers?.filter((flower) => flower.flowerTimeSecond.includes(haku)=== true);
                                break;
                            case "pituus":
                                return flowers?.filter((flower) => flower.length.includes(haku)=== true);
                                break;
                            case "ruukunkoko":
                                return flowers?.filter((flower) => flower.potSize.includes(haku)=== true);
                                break;
                            case "hinta":
                                return flowers?.filter((flower) => prices?.find((price) => price.id === flower.price)?.amount.includes(haku) === true);
                                break;
                            case "lisäyslähde":
                                return flowers?.filter((flower) => flower.addingSource.includes(haku)=== true);
                                break;
                            case "lisäystapa":
                                return flowers?.filter((flower) => flower.addingWay.includes(haku)=== true);
                                break;
                            case "lisätietoja":
                                return flowers?.filter((flower) => flower.additionalInformation.includes(haku)=== true);
                                break;
                            case "uusi":
                                 return flowers?.filter((flower) => flower.new === true);
                                break;
                        }
                    
            
        // })
        if (haku ===  "") {
                return flowers;
        }
        // } else {
        //     n.sort((a, b) => a[1]- b[1]);
        //     console.log(n)
        //     return flowers?.filter((flower) => flower.id === n.find((pair) => pair[0] === flower.id)?.[0] )
        // } 
    }

    return (
        <Box sx={{  border: "2px solid red", mx: "auto",}}>
            {!error &&
                <>
                    <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, }}>
                        <IconButton sx={{ p: "10px" }} aria-label="menu" onClick={() => setAuki(!auki)} >
                            <img width={"20px"} src={menusvg} />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1, }}
                            placeholder="Hae kukkaa nimellä"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setHaku(event.target.value); } } />
                        <IconButton sx={{ p: "10px"}} aria-label="search" onClick={() => tekstiHaku()}>
                            <img width={"20px"} src={searchsvg}/>
                        </IconButton>
                    </Paper>       
                    {auki &&
                        <RadioGroup 
                        sx={{ p: 1, color: "text.primary"}}
                        row
                        aria-labelledby="search choices grid"
                        name="search choices"
                        value={valittu}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setValittu((event.target as HTMLInputElement).value)}}
                        >  
                            {data.map((item) => (
                                <FormControlLabel value={item.field} control={<Radio /> } label={item.field}  />
                                ))}
                            
                        </RadioGroup>
                    }
                    <FlowerList flowers={tekstiHaku()} />
                </>
            }
        </Box>
    );
};

export default FlowerIndex;