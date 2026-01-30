import About from "../components/common/About";
import Responsive from "../components/common/Banner";
import FeatureSection from "../components/home/Features";
import Packages from "../components/home/Packages";
import TaxiCards from "../components/home/TaxiCards";

export default function Home() {
    return (
        <>
            <Responsive />
            <About />
            <TaxiCards />
            <FeatureSection />
            <Packages />
        </>
    );
}
