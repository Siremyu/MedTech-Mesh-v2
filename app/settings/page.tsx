import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Cardd from "@/components/settings/cardd";
import CardDelete from "@/components/settings/cardDelete";
import Image from "next/image";

export default function Settings() {
  return (
    <>
      <Navbar/>
      <main className="pt-[88px] flex flex-col gap-[24px] pb-[75px]">
        <Cardd/>
        <CardDelete/>
      </main>
      <Footer/>
    </>
  );
}