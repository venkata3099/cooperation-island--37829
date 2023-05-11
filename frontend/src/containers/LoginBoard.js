import { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import CIButton from "../shared/CIButton";
import CIInput from "../shared/CIInput";
import CILabel from "../shared/CILabel";
import CILink from "../shared/CILink";
import anime from "animejs";

const useStyles = makeStyles({
    board: {
        position: "absolute",
        top: "3%",
        left: "110%",
        height: "94vh",
        width: "30vw",
        padding: "20px",
        background: "url('/images/Board.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
    },
    guide: {
        position: "absolute",
        top: "33.5%",
        left: "-30%",
        height: "70vh",
        width: "22vw",
        transform: "scaleX(-1)"
    },
    header: {
        height: "11vh",
        marginTop: "9vh",
        marginLeft: "3.8vw",
        padding: "0px 14px",
        background: "url('/images/Header.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    },
    body: {
        position: "relative",
        height: "61vh",
        marginLeft: "4.4vw",
        overflow: "hidden",
        textAlign: "center"
    },
    signInSection: {
        position: "absolute",
        marginLeft: "-105%",
        "& button": {
            marginTop: "0.7vh"
        },
        "& input": {
            marginTop: "0.7vh"
        },
        "& label": {
            marginTop: "2.7vh",
            "&:nth-child(5)": {
                marginTop: "5.3vh"
            }
        }
    },
    signUpSection: {
        marginLeft: "105%",
        "& input": {
            marginBottom: "1vh"
        },
        "& button": {
            marginTop: "1vh"
        }
    },
    age: {
        marginTop: "4px",
        marginLeft: "22px",
        width: "2.7vw"
    },
    email: {
        width: "9.1vw"
    },
    footerText: {
        "& label": {
            fontSize: "1.8vh",
            marginLeft: "2px"
        },
        fontSize: "1.8vh",
        marginTop: "1.7vh"
    },
    button: {
        "& label": {
            cursor: "pointer",
            fontSize: "3.3vh"
        },
        background: "none",
        border: "none",
        cursor: "pointer",
        marginTop: "-1vh",
        textAlign: "center",
        zIndex: 2
    },
    tab: {
        position: "absolute",
        top: "11.3vh",
        left: "14.7vw",
        height: "10vh",
        width: "10vw",
        background: "url('/images/Switch.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    }
});


const LoginBoard = () => {
    const cls = useStyles();

    const history = useHistory();

    const location = useLocation();

    const isAllowed = false;

    const [active, setActive] = useState(location.pathname === "/login");

    useEffect(() => {
        history.push(active ? "/login" : "/signup");

        anime({
            targets: "#active-tab",
            left: active ? "6.2vw" : "14.7vw",
            easing: "linear",
            duration: 250
        });
        anime({
            targets: "#sign-in",
            color: active ? "#7C382D" : "#CEB891",
            easing: "linear",
            duration: 250
        });
        anime({
            targets: "#sign-up",
            color: active ? "#CEB891" : "#7C382D",
            easing: "linear",
            duration: 250
        });
        anime({
            targets: "#sign-in-section",
            marginLeft: active ? "0%" : "-105%",
            easing: "linear",
            duration: 250
        });
        anime({
            targets: "#sign-up-section",
            marginLeft: active ? "105%" : "0%",
            easing: "linear",
            duration: 250
        });
    }, [active]);

    const handleSwitch = () => {
        setActive(!active);
    }

    const handleSignIn = () => {
        anime({
            targets: "#guide",
            left: "-30%",
            easing: "easeInQuint",
            duration: 2000,
        });
        anime({
            targets: "#board",
            left: "110%",
            easing: "easeInQuint",
            duration: 2000
        });
        if (!isAllowed) {
            anime({
                targets: "#logo",
                opacity: 0.6,
                top: "-80%",
                left: "50%",
                scale: 1,
                translateX: "-50%",
                translateY: "180%",
                easing: "easeInQuint",
                duration: 2000
            });
        }
        else {
            anime({
                targets: "#logo",
                left: "-50%",
                easing: "easeInQuint",
                duration: 2000,
            });
        }
    }

    return <Grid>
        <img className={cls.guide} id="guide" src="/avatars/Avatar_1.png" />
        <Grid className={cls.board} container id="board">
            <Grid className={cls.header} container item xs={9} alignItems="center" spacing={4} onClick={handleSwitch}>
                <Grid className={cls.tab} id="active-tab" />
                <Grid className={cls.button} item xs={6}>
                    <CILabel id="sign-in">
                        Sign In
                    </CILabel>
                </Grid>
                <Grid className={cls.button} item xs={6}>
                    <CILabel id="sign-up">
                        Sign Up
                    </CILabel>
                </Grid>
            </Grid>
            <Grid className={cls.body} container>
                <Grid className={cls.signInSection} id="sign-in-section">
                    <CILabel>Username</CILabel>
                    <CIInput />
                    <CILabel>Password</CILabel>
                    <CIInput type="password" />
                    <CILink>Forgot Password?</CILink>
                    <CIButton onClick={handleSignIn}>Sign In</CIButton>
                </Grid>
                <Grid className={cls.signUpSection} id="sign-up-section">
                    <CIInput placeholder="Username" />
                    <CIInput placeholder="Password" type="password" />
                    <Grid container>
                        <Grid item xs={7}>
                            <CIInput className={cls.email} placeholder="Email" sm />
                        </Grid>
                        <Grid item xs={3}>
                            <CIInput className={cls.age} placeholder="Age" xs />
                        </Grid>
                    </Grid>
                    <CIButton>Sign Up</CIButton>
                    <CILabel className={cls.footerText}>
                        By Signing Up, you are agreeing to our
                        <CILink>Terms & Conditions</CILink>
                    </CILabel>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default LoginBoard;