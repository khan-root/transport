import Hero from "@/components/Hero";
import Home from "@/view/Home/Home";

export default function HomePage(){
  return(
    <div className="flex-1">
      <Hero />
      <Home />
    </div>
  )
}