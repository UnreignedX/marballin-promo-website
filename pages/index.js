import Head from 'next/head';
import Header from '.../components/Header';
import Footer from '.../components/Footer';
import '../styles/styletest.css'; // If you're using your custom CSS

export default function Home() {
  return (
    <>
      <Head>
        <title>Marballin</title>
        <link rel="icon" href="/assets/marballin.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="background">
        <div className="background-image"></div>
      </div>

      <Header />

      <div className="spacer"></div>

      <div className="wrapper">
        <div className="container">
          <div className="content">
            <div className="header_subheader">
              <h1>Marballin</h1>
              <p>Available now on PC!</p>
            </div>
            <a href="/assets/Marballin (Open and Extract) May 18th.zip" download>
              <img src="/assets/download_img.png" alt="Download Marballin" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
