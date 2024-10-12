import MiniHeroSection from "@/app/components/MiniHeroSection";
import Home from "@/app/view/Services/Home";

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