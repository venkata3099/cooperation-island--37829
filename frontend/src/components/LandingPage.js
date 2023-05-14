import { Grid, makeStyles } from "@material-ui/core";
import CILabel from "../shared/CILabel";

const useStyles = makeStyles({
    grid: {
        position: "absolute",
        height: "100vh",
        widows: "100vw",
        marginTop: "-60vh"
    },
    label: {
        fontSize: "5vh",
        textShadow: "2px 2px 2px black"
    }
});

const LandingPage = () => {
    const cls = useStyles();

    return <Grid className={cls.grid} container justifyContent="center">
        <CILabel className={cls.label}>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </CILabel>
    </Grid>
}

export default LandingPage;