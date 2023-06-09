import Image from "next/image";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
function Home() {
  return (
    <main>
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
        <Body />
      </>
    </main>
  );
}

export default Home;
