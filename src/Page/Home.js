import About from "../components/common/About";
import Responsive from "../components/common/Banner";
import FeatureSection from "../components/homepage/Features";
import Packages from "../components/homepage/Packages";
import TaxiCards from "../components/homepage/TaxiCards";

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
