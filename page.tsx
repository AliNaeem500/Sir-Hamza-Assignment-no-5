import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
<main className="w-100%">
  <div className="bg-[#A29875] w-[1513px] h-[80px] ">
 <Header />
 </div>
  <section>
    {/* left sight */}
      <div className="w-[500px] h-[500px] ">
        <div >
        <p className="W-[496PX] h-[189px] mt-[100px] ml-[100px] font-['Libre_Bodoni'] font-bold text-[40px]
        leading-[65.8px] tracking-[0.025em]">
        IMPECCABLE <br />
        CRAFTSMANSHIP AND<br />
        FINESSE 
        </p>
        </div>
      <div className="w-[902px] h-[147px] ml-[100px] mt-[80px]">
        <h1 className="font-['Libre_Bodoni'] font-medium text-[30px] leading-[49.35px] tracking-[0.025em]
         text-[#787054]">An example of intricate workmanship and detail, elegant <br />
        necklaces and long and short chains form a part
        of our <br />
        desirable collection.</h1>
      </div>
      <div className="ml-[100px] mt-[40px]">
        <button className="px-[10px] py-[10px] font-['Libre-Bodoni'] bg-[#A29875] font-medium text-[30px] 
        rounded-[10px] text-white flex-1 justify-center leading-[37.5px]">Explore Now</button></div>
      </div>
    {/* right sight */}
    <div className="ml-[1050px] w-[360px] mt-[0px] self-center mt-auto mb-auto flex items-start flot-right block flex justify-end flex relative -mt-[440px]">
    <img src="https://i.postimg.cc/Y9wQspxh/asi.png" alt="sorry" width={500} height={300} className="mt-0 block ml-auto absolute right-0 top-5"/>
    </div>
  </section>
</main>
  );
};