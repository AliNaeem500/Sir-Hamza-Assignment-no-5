import Header from "./components/Header";
import Image from "next/image";
import asi from '../app/assets/asi.png'

export default function Home() {
  return (

<div className="max-w-screen-2xl mx-auto">
  <div className="h-[80px] bg-[#A29875]">
    <Header />
      </div>

  <div className="flex flex-col-reverse sm:flex-row items-center px-4 sm:px-24 mt-10 sm:mt-20 gap-10">
        
        <div className="flex-1">
          <p className="font-['Libre_Bodoni'] font-bold text-[30px] sm:text-[40px] leading-tight tracking-[0.025em]">
            IMPECCABLE <br />
            CRAFTSMANSHIP AND <br />
            FINESSE
          </p>

          <h1 className="mt-10 font-['Libre_Bodoni'] font-medium text-[18px] sm:text-[24px] text-[#787054] leading-snug tracking-[0.025em]">
            An example of intricate workmanship and detail, elegant <br className="hidden sm:block" />
            necklaces and long and short chains form a part <br className="hidden sm:block" />
            of our desirable collection.
          </h1>

          <button className="mt-10 px-5 py-3 bg-[#A29875] text-white rounded-[10px] font-['Libre_Bodoni'] text-[20px] sm:text-[24px]">
            Explore Now
          </button>

          </div>
          <>
          <Image src={asi} alt="Sorry"/>
          </>
        </div>
      </div>

  );
}