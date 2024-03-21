import { Box, List, ListItem } from "@mui/material";
import { useImageAddresses } from "../hooks/images";
import AnswerListItem from "../ui-components/AnswerListItem"

const FlowerGame: React.FunctionComponent = () => {
    const [imageAddresses, imageError] = useImageAddresses();
    
    return (
        <Box sx={{ display: "grid", justifyContent: "center", mx: "auto", }}>
            {imageAddresses && !imageError && imageAddresses.map(iA =>
                <List key={iA.id} sx={{ mx: "auto"}}>
                    <ListItem key={iA.id} >{<img width="500px" src={`http://127.0.0.1:800/${iA.name}.jpeg`}/>}</ListItem>
                    <AnswerListItem oikea={iA.name} />
                </List>
                )
            }
        </Box>
    );
}
export default FlowerGame;
