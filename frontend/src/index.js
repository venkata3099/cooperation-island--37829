import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import CITheme from "./styles/CITheme";
import App from "./App";
import "./styles/index.scss";

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={CITheme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
