import React from "react";
import { CryptosTableComponent } from "./CryptosTable.styles";
import { CryptosTableProps } from "./CryptosTable.types";
import { Button } from "../lib";
import Image from "next/image";
import { convertToDolarFormat } from "@/src/utils/convertToDolarFormat";
import { formatPercentage } from "@/src/utils/formatPercentage";

export const CryptosTable: React.FC<CryptosTableProps> = ({ coins }) => {
  return (
    <CryptosTableComponent>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Crypto</th>
          <th scope="col">Price</th>
          <th scope="col">Change</th>
          <th scope="col">Trade</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <tr key={index}>
            <td>{String(index + 1).padStart(2, "0")}</td>
            <td>
              <div>
                <Image src={coin.image || ""} width={32} height={32} alt="" />
                {coin.name}
                <span>{coin.acronym}</span>
              </div>
            </td>
            <td>US {convertToDolarFormat(coin.price_usd)}</td>
            {Number(coin.variation) > 0 ? (
              <td className="positive">{formatPercentage(coin.variation)}</td>
            ) : (
              <td className="negative">{formatPercentage(coin.variation)}</td>
            )}
            <td>
              <Button text="Buy" color="green" sizeWidth="small" />
            </td>
          </tr>
        ))}
      </tbody>
    </CryptosTableComponent>
  );
};
