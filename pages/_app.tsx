import { AppProps } from "next/app"
import "../styles/globals.css"
import PropTypes from "prop-types"
import Head from "next/head"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import theme from "../src/theme"
import createEmotionCache from "../src/createEmotionCache"
import "swiper/css/bundle"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props

    const [show_screen, setShowScreen] = useState(false)

    useEffect(() => {
        setShowScreen(true)
    }, [])

    return (
        <>
            {show_screen ? (
                <>
                    <CacheProvider value={emotionCache}>
                        <Head>
                            <meta
                                name="viewport"
                                content="initial-scale=1, width=device-width"
                            />
                        </Head>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </CacheProvider>
                </>
            ) : (
                <Loading />
            )}
        </>
    )
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
}

export default MyApp
