import React, { Suspense } from "react";
import About from "../components/common/About";
import Responsive from "../components/common/Banner";
import Testimonials from "../components/homepage/Testimonials";
import FeatureSection from "../components/homepage/Features";
import Packages from "../components/homepage/Packages";
import TaxiCards from "../components/homepage/TaxiCards";
import Loader from "../components/common/Loader";

export default function Home() {
    return (
        <Suspense fallback={<Loader />}>
            <Responsive />
            <About />
            <TaxiCards />
            <FeatureSection />
            <Packages />
            <Testimonials />
        </Suspense>
    );
}
