import { FC } from "react"
import {
    ThemeProvider as MuiThemeProvider,
    createMuiTheme,
    responsiveFontSizes,
} from "@material-ui/core"

const ThemeProvider: FC = ({ children }) => {
    const theme = responsiveFontSizes(
        createMuiTheme({
            typography: {
                fontFamily: ["Lato", "sans-serif"].join(","),
            },
            palette: {
                primary: {
                    main: "#FFA726",
                },
            },
            overrides: {
                MuiButton: {
                    label: {
                        textTransform: "none",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                    },
                },

                MuiLink: {
                    root: {
                        color: "inherit",
                    },
                },
            },
        })
    )

    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
