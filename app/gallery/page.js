import MiniHeroSection from "@/components/MiniHeroSection";
import Home from "@/view/Gallery/Home";

export default function GalleryPage(){
    return(
        <>
            <div className="bg-countDataBg bg-center bg-cover">
                <MiniHeroSection />
            </div>
            <Home />
        </>
    )
}