import MiniHeroSection from "@/components/MiniHeroSection";
import Home from "@/view/About/Home";

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