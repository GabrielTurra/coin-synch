import React from "react";
import { CryptosTableComponent } from "./CryptosTable.styles";
import { CryptosTableProps } from "./CryptosTable.types";
import { Button } from "../lib";
import Image from "next/image";

export const CryptosTable:React.FC<CryptosTableProps> = ({ coins }) => {
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
            <td>{index < 9 ? 0 + `${index + 1}`: index + 1 }</td>
            <td>
              <div>
                <Image 
                  src={coin.image || ''}
                  width={32}
                  height={32}
                  alt=""
                />
                {coin.name}
                <span>{coin.acronym}</span>
              </div>
            </td>
            <td>US {coin.price_usd}</td>
            {Number(coin.variation) > 0 
              ? <td className="positive">+{coin.variation}%</td>
              : <td className="negative">{coin.variation}%</td>
            }
            <td>
              <Button text="Buy" color="green" size="small" />
            </td>
          </tr>
        ))}
      </tbody>
    </CryptosTableComponent>
  );
};
