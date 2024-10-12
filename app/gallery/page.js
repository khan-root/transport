import MiniHeroSection from "@/app/components/MiniHeroSection";
import Home from "@/app/view/Gallery/Home";

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