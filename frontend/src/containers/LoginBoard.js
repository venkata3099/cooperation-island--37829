import { useContext, useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AppContext } from "../App";
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
        width: "30vw",
        height: "94vh",
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
    guide2: {
        position: "absolute",
        top: "44%",
        left: "52%",
        height: "70vh",
        width: "22vw",
        transform: "scale(0)"
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
        marginLeft: "1.4vw",
        overflow: "hidden",
        textAlign: "center"
    },
    signInSection: {
        "& button": {
            marginTop: "1vh"
        },
        "& input": {
            marginTop: "0.7vh"
        },
        "& label": {
            "&:nth-child(5)": {
                marginTop: "5.6vh"
            },
            marginTop: "2.7vh"
        },
        position: "absolute",
        zIndex: 2,
        marginLeft: "11.5%"
    },
    signUpSection: {
        "& input": {
            marginBottom: "1vh"
        },
        "& button": {
            marginTop: "1vh"
        },
        zIndex: 2,
        marginLeft: "105%"
    },
    resetSection: {
        "& label": {
            "&:first-child": {
                fontSize: "4.5vh",
                fontWeight: "bold",
                letterSpacing: 1
            },
            "&:nth-child(2)": {
                marginTop: "8vh",
                marginBottom: "0.7vh"
            },
            width: "100%"
        },
        "& button": {
            width: "45%"
        },
        "& div": {
            width: "100vw"
        },
        "& input": {
            marginBottom: "3vh"
        },
        alignContent: "baseline",
        opacity: 0,
        rotate: "-90deg",
        marginTop: "-195%",
        marginLeft: "-48%",
        width: "105%"
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
            fontSize: "2vh",
            marginLeft: "2px"
        },
        fontSize: "2vh",
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

    const [active, setActive] = useState(window.location.pathname === "/login");

    const { user, setUser } = useContext(AppContext);

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
            marginLeft: active ? "11.5%" : "-105%",
            easing: "linear",
            duration: 250
        });
        anime({
            targets: "#sign-up-section",
            marginLeft: active ? "105%" : "11.5%",
            easing: "linear",
            duration: 250
        });
    }, [active]);

    const handleSwitch = () => {
        setActive(!active);
    }

    const handleLink = () => {
        anime({
            targets: "#guide",
            scaleX: [-1, 0],
            scaleY: 0,
            left: "30%",
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: "#guide2",
            scale: [0, 1],
            top: "0%",
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: "#board",
            top: "16%",
            left: "38%",
            width: "27vw",
            height: "97vh",
            rotate: 90,
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: [`.${cls.header}`, `.${cls.signInSection}`, `.${cls.signUpSection}`],
            opacity: 0,
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: `.${cls.body}`,
            height: "80vh",
            duration: 0
        });
        anime({
            targets: [`.${cls.resetSection}`, `.${cls.signInSection}`, `.${cls.signUpSection}`],
            zIndex: (_, i) => i ? 1 : 2,
            duration: 0
        });
        anime({
            targets: "#reset-section",
            opacity: 1,
            marginLeft: "64%",
            easing: "easeOutQuint",
            duration: 2000
        });
    }

    const handleCancel = () => {
        anime({
            targets: "#guide",
            scaleX: -1,
            scaleY: 1,
            left: "7%",
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: "#guide2",
            scale: 0,
            top: "44%",
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: "#board",
            top: "3%",
            left: "63%",
            width: "30vw",
            height: "94vh",
            rotate: 0,
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: [`.${cls.header}`, `.${cls.signInSection}`, `.${cls.signUpSection}`],
            opacity: 1,
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: `.${cls.body}`,
            height: "61vh",
            duration: 0
        });
        anime({
            targets: [`.${cls.resetSection}`, `.${cls.signInSection}`, `.${cls.signUpSection}`],
            zIndex: (_, i) => i ? 2 : 1,
            duration: 0
        });
        anime({
            targets: "#reset-section",
            opacity: 0,
            marginLeft: "-48%",
            easing: "easeOutQuint",
            duration: 2000
        });
    }

    const handleSignIn = () => {
        setUser({ active: true, access: false });

        anime({
            targets: "#guide",
            left: "-30%",
            easing: "easeInQuint",
            duration: 2000
        });
        anime({
            targets: "#board",
            left: "110%",
            easing: "easeInQuint",
            duration: 2000
        });

        if (!user.access) {
            history.push("/home");
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
                duration: 2000
            });
        }
    }

    return <Grid>
        <img className={cls.guide} id="guide" src="/avatars/Avatar_1.png" />
        <img className={cls.guide2} id="guide2" src="/avatars/Avatar_2.png" />
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
                    <CILink onClick={handleLink}>Forgot Password?</CILink>
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
                    <CIButton onClick={handleSignIn}>Sign Up</CIButton>
                    <CILabel className={cls.footerText}>
                        By Signing Up, you are agreeing to our
                        <CILink>Terms & Conditions</CILink>
                    </CILabel>
                </Grid>
                <Grid className={cls.resetSection} container id="reset-section" justifyContent="center">
                    <CILabel>Forgot Password?</CILabel>
                    <CILabel>Email</CILabel>
                    <CIInput />
                    <Grid container spacing={1} justifyContent="space-between">
                        <CIButton>Send</CIButton>
                        <CIButton onClick={handleCancel}>Cancel</CIButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default LoginBoard;