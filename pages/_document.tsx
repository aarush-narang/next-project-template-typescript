import {
    Head, Html, Main, NextScript,
} from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {
                    process.env.NODE_ENV === 'production' ? (
                        <>
                            {/* eslint-disable-next-line @next/next/next-script-for-ga */}
                            <script async src="https://www.googletagmanager.com/gtag/js?id=G-VRZ0JZKJ39" />

                            {/* eslint-disable-next-line react/no-danger */}
                            <script dangerouslySetInnerHTML={{
                                __html: `window.dataLayer = window.dataLayer || [];
                                        function gtag(){dataLayer.push(arguments);}
                                        gtag('js', new Date());
                                    
                                        gtag('config', 'G-VRZ0JZKJ39');`,
                            }}
                            />
                        </>
                    ) : null
                }
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
