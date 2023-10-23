"use client";

import { calculatePoint, generateArray } from "@/src/utils";
import { FC, useEffect } from "react";

export interface ICalculatorPageProps {}

const maxPoints = generateArray(2, 6).map((e) => e * 50);
const maxTimes = generateArray(1, 10).map((e) => e * 10);

const CalculatorPage: FC<ICalculatorPageProps> = () => {
  return (
    <div className="justify-center items-center w-full flex">
      <table>
        <tr>
          <th className="w-60 px-4 py-1 border border-black text-center">Max Point</th>
          <th className="w-60 px-4 py-1 border border-black text-center">Max Time</th>
          <th className="w-60 px-4 py-1 border border-black text-center">Answer Time</th>
          <th className="w-60 px-4 py-1 border border-black text-center">Point</th>
        </tr>
        {maxTimes.map((maxTime) => {
          return maxPoints.map((maxPoint) => {
            return generateArray(0, maxTime).map((answerTime) => (
              <tr>
                <td className="w-60 px-4 py-1 border border-black text-center">{maxPoint}</td>
                <td className="w-60 px-4 py-1 border border-black text-center">{maxTime + " s"}</td>
                <td className="w-60 px-4 py-1 border border-black text-center">{answerTime + " s"}</td>
                <td className="w-60 px-4 py-1 border border-black text-center">{calculatePoint({ answerTime, maxPoint, maxTime })}</td>
              </tr>
            ));
          });
        })}
      </table>
    </div>
  );
};

CalculatorPage.displayName = "CalculatorPage";

export default CalculatorPage;
