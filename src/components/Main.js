import Banner from "./content/Banner"
import Specials from "./content/Specials"
import Testimonials from "./content/Testimonials"
import About from "./content/About"
export default function Main() {
    return (
        <>
            <main>
                <Banner></Banner>
                <Specials></Specials>
                <Testimonials></Testimonials>
                <About></About>
            </main>
        </>
    )
}