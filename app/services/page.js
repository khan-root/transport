import MiniHeroSection from "@/components/MiniHeroSection";
import Home from "@/view/Services/Home";

export default function BrowsePage(){
    return(
        <>
            <div className="bg-countDataBg bg-center bg-cover">
                <MiniHeroSection />
            </div>
            <Home />
        </>
    )
}