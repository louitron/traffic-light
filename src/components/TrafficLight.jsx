import { useState } from "react";
import clsx from "clsx";

export function TrafficLight() {
  const [color, setColor] = useState("red");
  return (
    <div className="flex flex-col justify-center items-center animate-wiggle">
      <div className="bg-black h-[200px] w-[25px]"></div>
      <div className="flex flex-col bg-gradient-to-b from-black to-gray-900 bg-black h-[400px] w-[150px]">
        <div
          className={clsx(
            "h-1/3 w-full scale-75 aspect-square bg-red-600 rounded-full",
            color === "red" && " bg-red-500 shadow-2xl shadow-red-200/50"
          )}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={clsx(
            "h-1/3 w-full scale-75 aspect-square bg-yellow-600 rounded-full",
            color === "yellow" &&
              " bg-yellow-500 shadow-2xl shadow-yellow-200/50"
          )}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={clsx(
            "h-1/3 w-full scale-75 aspect-square bg-green-600 rounded-full",
            color === "green" && " bg-green-500 shadow-2xl shadow-green-00/50"
          )}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
}
