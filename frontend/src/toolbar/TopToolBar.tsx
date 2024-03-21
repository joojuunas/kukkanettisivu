import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { styled } from "@mui/material"
import RoutedLink from "../ui-components/RoutedLink"
import urls from "../routes/urls"

const ThemedToolbar = styled(Toolbar)(({ theme }) =>
theme.unstable_sx({
    header: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        paddingTop: theme.spacing(3),
    },
    root: {
        // // // justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: "0",
        },
    },
}))

const TopToolbar: React.FunctionComponent = () => {

    return (
        <>
        <AppBar color="secondary">
            <ThemedToolbar sx={{ mx:"auto"}}>
                <RoutedLink sx={{ paddingRight: 5, paddingLeft: 2  }} to={urls.flowers} underline="none" aria-label="Click to go to the flowers page">
                        Flowers
                </RoutedLink>
                <RoutedLink sx={{ paddingRight: 5, paddingLeft: 5  }} to={urls.about} underline="none" aria-label="Click to go to the about page">
                        About
                </RoutedLink>
                <RoutedLink sx={{ paddingRight: 5, paddingLeft: 5  }} to={urls.flowerGame} underline="none" aria-label="Click to go to the flower game page">
                        Flower Game
                </RoutedLink>
            </ThemedToolbar>
        </AppBar>
        </>
    )
}

export default TopToolbar;