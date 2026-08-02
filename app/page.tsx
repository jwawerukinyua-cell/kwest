import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import CategoryGrid from "./components/home/CategoryGrid";

import FeaturedBusinesses from "./components/businesses/FeaturedBusinesses";
import ListYourBusiness from "./components/businesses/ListYourBusiness";

import CommunitySpotlight from "./components/community/CommunitySpotlight";
import CommunityUpdates from "./components/community/CommunityUpdates";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50">
        <Hero />
        <CategoryGrid />
        <FeaturedBusinesses />
        <CommunitySpotlight />
        <CommunityUpdates />
        <ListYourBusiness />
      </main>

      <Footer />
    </>
  );
}