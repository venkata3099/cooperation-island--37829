import { Grid, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CILabel from "../shared/CILabel";
import CIInput from "../shared/CIInput";
import CIButton from "../shared/CIButton";
import anime from "animejs";

const useStyles = makeStyles({
    guide: {
        position: "absolute",
        top: "33.5%",
        left: "-30%",
        height: "88vh",
        width: "20vw"
    },
    board: {
        position: "absolute",
        top: "-4%",
        left: "110%",
        width: "30vw",
        height: "100vh",
        padding: "20px",
        rotate: "90deg",
        background: "url('/images/Board.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
    },
    body: {
        "& button": {
            width: "36%"
        },
        "& input": {
            marginTop: "-1vh"
        },
        "& label": {
            "&:first-child": {
                fontSize: "4.5vh",
                fontWeight: "bold",
                letterSpacing: 1,
                marginBottom: "4vh"
            },
            width: "100%"
        },
        rotate: "-90deg",
        height: "61vh",
        marginTop: "30%",
        marginLeft: "4%",
        textAlign: "center"
    }
});

const ResetPassword = () => {
    const cls = useStyles();

    const history = useHistory();

    const handleSave = () => {
        anime
            .timeline()
            .add({
                targets: "#guide",
                left: "-30%",
                easing: "easeInQuint",
                duration: 2000
            })
            .add({
                targets: "#board2",
                left: "110%",
                easing: "easeInQuint",
                duration: 2000
            }, "-=2000")
            .finished.then(() => {
                history.push("/home");
                anime({
                    targets: "#guide",
                    left: "7%",
                    easing: "easeOutQuint",
                    duration: 2000
                });
                anime({
                    targets: "#board",
                    left: "63%",
                    easing: "easeOutQuint",
                    duration: 2000
                });
            });
    }

    return <Grid>
        <img className={cls.guide} id="guide" src="/avatars/Avatar_3.png" />
        <Grid className={cls.board} id="board2">
            <Grid className={cls.body} container justifyContent="center">
                <CILabel>Reset Password</CILabel>
                <CILabel>Email</CILabel>
                <CIInput disabled />
                <CILabel>Password</CILabel>
                <CIInput type="password" />
                <CIButton onClick={handleSave}>Save</CIButton>
            </Grid>
        </Grid>
    </Grid>
}

export default ResetPassword;