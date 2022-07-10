import * as React from "react"
import { RenderPageResult } from "next/dist/shared/lib/utils"
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentInitialProps,
} from "next/document"
import createEmotionServer from "@emotion/server/create-instance"
import createEmotionCache from "../src/createEmotionCache"
import theme from "../src/theme"

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="ja">
                <Head>
                    {/* PWA primary color */}
                    <title>Portfolio</title>
                    <meta name="Portfolio" content="made by T.M" />
                    <link rel="icon" href="/favicon.png" />
                    <meta
                        name="theme-color"
                        content={theme.palette.primary.main}
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap"
                        rel="stylesheet"
                    ></link>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                </Head>
                <body>
                    <script> </script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
    const originalRenderPage = ctx.renderPage
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
        originalRenderPage({
            enhanceApp:
                (App: any) =>
                (props): JSX.Element =>
                    <App emotionCache={cache} {...props} />,
        })

    const initialProps = await Document.getInitialProps(ctx)
    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            key={style.key}
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ))
    return {
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles),
            ...emotionStyleTags,
        ],
    }
}
