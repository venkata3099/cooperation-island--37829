import { useContext, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AppContext } from "../App";
import anime from "animejs";

const useStyles = makeStyles((theme) => ({
    BG: {
        opacity: 0,
        height: "100vh",
        width: "100vw"
    },
    logo: {
        position: "absolute",
        top: "-80%",
        left: "50%",
        height: "60vh",
        width: "60vw",
        transform: "translateX(-50%) translateY(-50%)"
    },
    root: {
        background: theme.palette.primary.BG
    }
}));

const HomePage = () => {
    const cls = useStyles();

    const history = useHistory();

    const { user } = useContext(AppContext);

    useEffect(() => {
        anime
            .timeline({
                delay: 200
            })
            .add({
                targets: "#background",
                opacity: 1,
                easing: "linear",
                duration: 2000
            })
            .add({
                targets: "#logo",
                top: "58%",
                easing: "easeOutElastic",
                duration: 2000
            }, "-=2000")
            .finished.then(() => {
                anime({
                    targets: "#background",
                    opacity: 0.2,
                    easing: "linear",
                    duration: 2000
                });
                if (!user.active) {
                    if (window.location.pathname === "/")
                        history.push("/login");

                    anime({
                        targets: "#logo",
                        top: "-12%",
                        left: "-12%",
                        scale: 0.45,
                        translateX: ["-50%", "0%"],
                        translateY: ["-50%", "0%"],
                        easing: "easeOutQuint",
                        duration: 2000
                    });
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
                    anime({
                        targets: "#board2",
                        left: "50%",
                        easing: "easeOutQuint",
                        duration: 2000
                    });
                }
                else {
                    if (window.location.pathname === "/reset-password")
                        anime({
                            targets: "#logo",
                            top: "-12%",
                            left: "-12%",
                            scale: 0.45,
                            translateX: ["-50%", "0%"],
                            translateY: ["-50%", "0%"],
                            easing: "easeOutQuint",
                            duration: 2000
                        });
                    else if (window.location.pathname === "/home")
                        anime({
                            targets: "#logo",
                            opacity: 0.6,
                            easing: "easeInQuint",
                            duration: 2000
                        });
                    else if (window.location.pathname === "/") {
                        if (!user.access) {
                            history.push("/home");
                            anime({
                                targets: "#logo",
                                opacity: 0.6,
                                easing: "easeInQuint",
                                duration: 2000
                            });
                        }
                        else {
                            anime({
                                targets: "#logo",
                                top: "150%",
                                easing: "easeInElastic",
                                duration: 2000
                            });
                        }
                    }

                    anime({
                        targets: "#guide",
                        left: "7%",
                        easing: "easeOutQuint",
                        duration: 2000
                    });
                    anime({
                        targets: "#board2",
                        left: "50%",
                        easing: "easeOutQuint",
                        duration: 2000
                    });
                }
            });
    }, []);

    return <Grid className={cls.root} container>
        <img className={cls.BG} id="background" src="/images/Application_BG.jpg" />
        <img className={cls.logo} id="logo" src="/images/Logo_Text.png" />
    </Grid>
}

export default HomePage;