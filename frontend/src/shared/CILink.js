import { makeStyles } from "@material-ui/core";
import anime from "animejs";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.main,
        cursor: "pointer",
        display: "block",
        fontFamily: "Summer Show",
        fontSize: "3.3vh",
        fontWeight: "400",
        letterSpacing: 0,
        textDecoration: "underline"
    }
}))

const CILink = (props) => {
    const cls = useStyles();

    const labelId = "label" + anime.random(1, 100);

    const handleClick = () => {
        anime({
            targets: "#" + labelId,
            letterSpacing: [1, 0],
            duration: 1000
        });
        props.onClick && props.onClick();
    }

    return <label {...props} className={clsx(cls.root, props.className)} id={labelId} onClick={handleClick} />
}

export default CILink;