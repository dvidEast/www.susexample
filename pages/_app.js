import "../styles/page.module.css"
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
        <Head>
            <title>UBC Science Undergraduate Society</title>
            <meta
                name="description"
                content="The Science Undergraduate Society is a student-led organization for science students at the University of British Columbia in Vancouver."
            />
            <meta property="og:title" content="UBC Science Undergraduate Society" key="ogtitle" />
            <meta
                property="og:description"
                content="The Science Undergraduate Society is a student-led organization for science students at the University of British Columbia in Vancouver."
                key="ogdescription"
            />
            <meta property="og:image" content="/path/to/your/image.jpg" key="ogimage" />
            <meta property="og:url" content="https://www.yourwebsite.com" key="ogurl" />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </>
  );
};

export default MyApp;