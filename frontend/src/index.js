import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";
import CITheme from "./styles/CITheme";
import App from "./App";
import "./styles/index.scss";

ReactDOM.render(
    <ThemeProvider theme={CITheme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
