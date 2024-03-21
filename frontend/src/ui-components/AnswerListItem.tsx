import { useState } from "react";
import { TextField, ListItem, LinearProgress } from "@mui/material";
import Box from "@mui/material/Box"

type AnswerListItemProps = {
    oikea: string;
};

const AnswerListItem: React.FunctionComponent<AnswerListItemProps> = ({ oikea }) => {
    const [nimi, setNimi] = useState("");

    function kirjaintaOikein(nimi:string, oikea:string) {
        let n = 0; 
        for (let i=0; i<nimi.length; i++) {
            if (nimi[i]===oikea[i]) {
                n++;
            }
        }
        return n;
    }

    const normalise = (value:number) => ((value - 0) * 100) / (oikea.length - 0);

    return (
        <ListItem key={oikea}>
                <Box sx={{ bgcolor: nimi===oikea ? "green" : nimi[0]===oikea[0] ? "blue" : "yellow",  borderRadius: 0.5, p: 3, mx: "auto",  }}>
                    <LinearProgress color="primary" variant="determinate" value={normalise(kirjaintaOikein(nimi, oikea))} />
                    <TextField sx={{ border: "1px solid blue", zIndex: 1}} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setNimi(event.target.value);}} />
                </Box>
        </ListItem>
    )
};
export default AnswerListItem;
