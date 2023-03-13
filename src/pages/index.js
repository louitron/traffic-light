import Image from "next/image";
import { TrafficLight } from "@/components/TrafficLight";

export default function Home() {
  return (
    <div className="flex flex-col  items-center bg-gradient-to-br from-yellow-600 to bg-black h-screen w-screen">
      <TrafficLight />
    </div>
  );
}
