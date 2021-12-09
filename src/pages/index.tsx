import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import { Container } from "../components/styles";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        Hi Guys! <p>All data provided on this page are approximate numbers.</p>
        <Link href="/mapcalculator">Click here</Link> to calculate your BCOINS!{" "}
      </Container>
    </>
  );
};

export default Home;
