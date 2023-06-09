import AuthModal from '@/components/client/auth/AuthModal'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Cosmos Code</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>

            <AuthModal />
        </>
    )
}
