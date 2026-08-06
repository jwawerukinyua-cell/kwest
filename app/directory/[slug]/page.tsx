import { notFound } from "next/navigation";

import { businesses } from "../../data/businesses";
import { categories } from "../../data/categories";

import BusinessHero from "../../components/businesses/BusinessHero";
import BusinessAbout from "../../components/businesses/BusinessAbout";
import BusinessContact from "../../components/businesses/BusinessContact";
import BusinessOpeningHours from "../../components/businesses/BusinessOpeningHours";
import BusinessCommunityFeedback from "../../components/businesses/BusinessCommunityFeedback";

type BusinessPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BusinessPage({
  params,
}: BusinessPageProps) {
  const { slug } = await params;

  const business = businesses.find(
    (business) => business.slug === slug
  );

  if (!business) {
    notFound();
  }

  const category = categories.find(
    (category) => category.id === business.categoryId
  );

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">

      <BusinessHero
        name={business.name}
        category={category?.name ?? "Uncategorized"}
        landmark={business.landmark}
        verified={business.verified}
        rating={business.rating}
      />

      <BusinessAbout
        description={business.description}
      />

      <BusinessContact
        phone={business.phone}
        whatsapp={business.whatsapp}
      />

      <BusinessOpeningHours
        openingHours={business.openingHours}
      />

      <BusinessCommunityFeedback />

    </main>
  );
}