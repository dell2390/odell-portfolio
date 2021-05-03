import "@fontsource/lato"

import { useEffect } from "react"
import { AppProps } from "next/app"
import Head from "next/head"

import ThemeProvider from "components/scaffold/ThemeProvider"
import CssBaselined from "components/scaffold/CssBaselined"

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side")
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles)
        }
    }, [])

    return (
        <>
            <Head>
                <title>O'Dell Harmon Jr.</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider>
                <CssBaselined>
                    <Component {...pageProps} />
                </CssBaselined>
            </ThemeProvider>
        </>
    )
}

export default App
