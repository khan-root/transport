import Hero from "@/app/components/Hero";
import Home from "@/app/view/Home/Home";

export default function HomePage(){
  return(
    <div className="flex-1">
      <Hero />
      <Home />
    </div>
  )
}