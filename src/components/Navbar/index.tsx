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

const Navbar: React.FC = () => {
  return (
    <>
      <NavbarContainer>
        <MainContent>
          <NavbarContent>
            <Link passHref={true} href="/">
              <Image
                alt="image"
                width={125}
                height={50}
                src="https://bombcrypto.io/wp-content/uploads/2021/09/1-logo.png"
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
