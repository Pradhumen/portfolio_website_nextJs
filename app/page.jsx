import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"

// components
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"

const Home = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
              <div className="text-center xl:text-left">
                <span className="text-xl">Software Developer</span>
                <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Pradhumen Singh</span></h1>
                <p className="max-w-[500px] mb-9 text-white/80">I am excel at crafting elegant digital experience and I am proficient in various programming languages and technologys.</p>
                {/* button and social  */}
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button variant="outline" size="lg" className="uppercase flex item-center gap-2 "> 
                    <span>Download CV</span>
                    <FiDownload className="text-xl"/>
                  </Button>
                  <div className="mb-8 xl:mb-0">
                      <Socials containerStyles="flex gap-6"  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                  </div>
                </div>
              </div>
              <div>
                <Photo />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Home