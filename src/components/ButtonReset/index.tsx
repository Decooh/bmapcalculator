import React from "react";
import { BiReset } from "react-icons/bi";
import { StyleButtonReset } from "./style";

const ButtonReset: React.FC<any> = ({ ...props }) => {
  return (
    <>
      <StyleButtonReset {...props}>
        {/* <BiReset size="18" /> Resetar */}
        RESET
      </StyleButtonReset>
    </>
  );
};

export default ButtonReset;
