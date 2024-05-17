import bottleimg from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import orangeimg from "../assets/images/mobile/image-gallery-orange.jpg";
import coneimg from "../assets/images/mobile/image-gallery-cone.jpg";
import sugarimg from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import desktopbottleimg from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import desktoporangeimg from "../assets/images/desktop/image-gallery-orange.jpg";
import desktopconeimg from "../assets/images/desktop/image-gallery-cone.jpg";
import desktopsugarimg from "../assets/images/desktop/image-gallery-sugarcubes.jpg";



const GraphicDisplay = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4" id="projects" >
        <img className="w-full h-full object-cover xl:hidden" src={bottleimg} alt="" />
        <img className="w-full h-full object-cover xl:hidden" src={orangeimg} alt="" />
        <img className="w-full h-full object-cover xl:hidden" src={coneimg} alt="" />
        <img className="w-full h-full object-cover xl:hidden" src={sugarimg} alt="" />

        <img className="hidden w-full h-full object-cover xl:block" src={desktopbottleimg} alt="" />
        <img className="hidden w-full h-full object-cover xl:block" src={desktoporangeimg} alt="" />
        <img className="hidden w-full h-full object-cover xl:block" src={desktopconeimg} alt="" />
        <img className="hidden w-full h-full object-cover xl:block" src={desktopsugarimg} alt="" />
    </div>
  )
}

export default GraphicDisplay;