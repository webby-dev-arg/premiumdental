import Image from "next/image";

import { Montserrat } from "next/font/google";
const mont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className="bg-red-600 text-white h-screen w-screen flex flex-col items-center justify-center px-9">
      <Image
        alt="Logo Premium"
        width={600}
        height={50}
        src={"Logo_Premium.svg"}
      />
      <h2 className={`${mont.className} font-bold text-xl mt-10 text-center`}>
        Estamos actualizanco nuestro sitio...
      </h2>
    </main>
  );
}
