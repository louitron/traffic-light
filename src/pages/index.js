import Image from "next/image";
import { TrafficLight } from "@/components/TrafficLight";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-500 h-screen w-screen">
      <TrafficLight />
    </div>
  );
}
