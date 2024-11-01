import { Catalogw } from "../components/catalog";
import { Headerw } from "../components/header";
import { Sliderw } from "../components/Slider";

export function HomePage(){
    return(
        <section className="main">
        <Headerw/>
        <Sliderw/>
        <Catalogw/>
        </section>
    )
}