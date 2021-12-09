import { NextPage } from "next";
import HeartSvg from "../HeartSvg";
import { FooterContaner } from "./style";

const Footer: NextPage = () => {
  return (
    <>
      <FooterContaner>
        This is a free unofficial app.
        <h2>
          Made with <HeartSvg size="30px" /> by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Decoohz"
          >
            @Decoohz
          </a>
        </h2>
      </FooterContaner>
    </>
  );
};

export default Footer;
