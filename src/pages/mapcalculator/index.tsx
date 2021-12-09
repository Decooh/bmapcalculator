import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
import {
  BoxList,
  BoxListItem,
  ContainerMapCalculator,
  ContainerResults,
  ButtonMinus,
  ButtonMore,
} from "../../components/styles";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import chestData from "./chestData.json";
import ButtonReset from "../../components/ButtonReset";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

interface IDataCalculator {
  id: number;
  name: string;
  image: string;
  approxValue: number;
  count: number;
}

const MapCalculator: NextPage = () => {
  const [dataCalculator, setDataCalculator] = useState<Array<IDataCalculator>>(
    []
  );
  const [sumCalculator, setSumCalculator] = useState<string>("0");

  const Router = useRouter();
  Router.events?.on("routeChangeStart", (e) => resetDefault());

  useEffect(() => {
    setDataCalculator(chestData);
  }, []);

  const resetDefault = () => {
    chestData.map((chest, index) => {
      chestData[index].count = 0;
    });
    setDataCalculator(chestData);
    setSumCalculator("0");
  };

  const handleData = (value: number, condition: string) => {
    if (condition == "more") {
      //
      dataCalculator[value] = {
        ...dataCalculator[value],
        count: dataCalculator[value].count + 1,
      };

      const resultNewSum =
        Number(sumCalculator) + Number(dataCalculator[value].approxValue);
      setSumCalculator(String(resultNewSum.toFixed(5)));
      setDataCalculator([...dataCalculator]);
      //
    } else if (condition == "minus") {
      //
      const resultNewSum =
        Number(sumCalculator) - Number(dataCalculator[value].approxValue);
      setSumCalculator(String(resultNewSum.toFixed(5)));

      dataCalculator[value] = {
        ...dataCalculator[value],
        count:
          dataCalculator[value].count !== 0
            ? dataCalculator[value].count - 1
            : 0,
      };
      setDataCalculator([...dataCalculator]);
      //
    }
  };

  return (
    <>
      <ContainerMapCalculator>
        <BoxList>
          {dataCalculator?.map((chest, index: number) => {
            return (
              <BoxListItem key={index}>
                <div id="imageContainer">
                  <Image width={30} height={30} alt="image" src={chest.image} />
                  <br />
                  <span>{chest.approxValue}</span>
                </div>
                <ButtonMinus>
                  <AiFillMinusCircle
                    size="25"
                    color="#00609c"
                    onClick={() => handleData(index, "minus")}
                  />
                </ButtonMinus>
                <div className="count">{dataCalculator[index].count}</div>
                <ButtonMore>
                  <AiFillPlusCircle
                    size="25"
                    color="#00a2c9"
                    onClick={() => handleData(index, "more")}
                  />
                </ButtonMore>
              </BoxListItem>
            );
          })}
        </BoxList>
        <ContainerResults>
          {"~"}
          <Image
            alt="image"
            width={30}
            height={30}
            src="https://bombcryptosimulator.com/img/bcoin.png"
          />
          <div>{Number(sumCalculator).toFixed(2)} BC</div>
        </ContainerResults>
        <ButtonReset onClick={() => resetDefault()} />
      </ContainerMapCalculator>
    </>
  );
};

export default MapCalculator;
