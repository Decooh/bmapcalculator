import type { NextPage } from "next";
import Link from "next/link";
import { Container, DonationContainer } from "../components/styles";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        Hi Guys! <p>All data provided on this page are approximate numbers.</p>
        <Link href="/mapcalculator">Click here</Link> to calculate your BCOINS!{" "}
      </Container>
      <Container />
      <Container>
        <DonationContainer>
          <h1>Did I help you somehow?</h1>
          <h2>Send me your donation to</h2>
          <h3>0x647ce35b3FA7177d7E6B60945e8d35b0576101F0</h3>
          <span>
            Send me a PM on{" "}
            <a
              href="https://twitter.com/decoohz"
              target="_blank"
              rel="noreferrer"
            >
              twitter
            </a>{" "}
            with the TXID after donating :)
          </span>
        </DonationContainer>
      </Container>
    </>
  );
};

export default Home;
