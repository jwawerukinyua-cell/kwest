import Hero from "./components/home/Hero";
import CategoryGrid from "./components/home/CategoryGrid";
import FeaturedBusinesses from "./components/businesses/FeaturedBusinesses";
import CommunitySpotlight from "./components/community/updates/CommunitySpotlight";
import CommunityUpdates from "./components/community/updates/CommunityUpdates";
import ListYourBusiness from "./components/businesses/ListYourBusiness";
import Footer from "./components/layout/Footer";

export default function HomePage() {
  return (
    <main>

      <Hero />

      <CategoryGrid />

      <FeaturedBusinesses />

      <CommunitySpotlight />

      <CommunityUpdates />

      <ListYourBusiness />

      <Footer />

    </main>
  );
}