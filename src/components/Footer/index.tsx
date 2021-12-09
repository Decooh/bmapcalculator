import { NextPage } from "next";
import HeartSvg from "../HeartSvg";
import { FooterContaner } from "./style";

const Footer: NextPage = () => {
  return (
    <>
      <FooterContaner>
        Made with <HeartSvg size="20px" /> by{" "}
        <a href="https://github.com/decooh">@Decooh</a>
      </FooterContaner>
    </>
  );
};

export default Footer;
