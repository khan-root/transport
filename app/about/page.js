import MiniHeroSection from "@/app/components/MiniHeroSection";
import Home from "@/app/view/About/Home";

export default function AboutPage(){
    return(
       <>
            <div className="bg-countDataBg bg-center bg-cover">
                <MiniHeroSection />
            </div>
            <Home />
       </>
    )
}