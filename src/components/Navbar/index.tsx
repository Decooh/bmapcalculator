import React from "react";
import { MainContent } from "../styles";
import {
  ButtonMapCalculator,
  NavbarContainer,
  NavbarContent,
  NavbarMenu,
} from "./Styled";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Navbar: React.FC = () => {
  return (
    <>
      <Head>
        <title>BMapCalculator - Bombcrypto Map Calculator</title>
      </Head>
      <NavbarContainer>
        <MainContent>
          <NavbarContent>
            <Link passHref={true} href="/">
              <Image
                alt="image"
                width={135}
                height={68}
                src="/images/bmapcalculator.png"
              />
            </Link>
            <NavbarMenu>
              <ul>
                <li>
                  <Link href="/mapcalculator">MapCalculator</Link>
                </li>
              </ul>
            </NavbarMenu>
          </NavbarContent>
        </MainContent>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
