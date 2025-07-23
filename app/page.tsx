import Footer from "@/components/footer";
import Categoriee from "@/components/home/categoriee";
import ProductGrid from "@/components/home/product-grid";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar/>
      <main className="pt-[88px] flex flex-col gap-[32px] pb-[75px]">
        <Categoriee/>
        
        {/* Other/semua produk */}
        <ProductGrid/>
      </main>
      <Footer/>
    </>
  );
}
