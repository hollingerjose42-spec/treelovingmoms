import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { getRequestOrigin } from "@/lib/origin.functions";
import { OFFER_AMOUNT, OFFER_URL } from "@/lib/offer";
import logo from "@/assets/dollar-tree-logo.webp";

const SHARE_IMAGE = "/og-cart.jpg";

export const Route = createFileRoute("/")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => {
    const shareImage = loaderData?.origin ? `${loaderData.origin}${SHARE_IMAGE}` : undefined;
    return {
      meta: [
        { title: `$${OFFER_AMOUNT} Dollar Tree Gift Card | TreeOffer` },
        { name: "description", content: `Explore the $${OFFER_AMOUNT} Dollar Tree gift card review offer.` },
        { property: "og:title", content: `$${OFFER_AMOUNT} Dollar Tree Gift Card | TreeOffer` },
        { property: "og:description", content: `Explore the $${OFFER_AMOUNT} Dollar Tree gift card review offer.` },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(shareImage
          ? [
              { property: "og:image", content: shareImage },
              { name: "twitter:image", content: shareImage },
            ]
          : []),
      ],
    };
  },
  component: Index,
});

const steps = [
  ["GET STARTED", "Click the button below to begin your review journey"],
  ["SHARE YOUR DETAILS", "Provide your email and basic information"],
  ["COMPLETE 4 DEALS", "Complete recommended deals tailored for you"],
  ["CLAIM YOUR REWARD", "Receive your Dollar Tree reward instantly"],
];

function Index() {
  return (
    <div className="offer-page">
      <header className="brand-banner">
        <img className="brand-logo" src={logo} alt="Dollar Tree" width="250" height="39" />
      </header>
      <main className="offer-main">
        <p className="offer-eyebrow">Review and Earn!</p>
        <h1 className="offer-title">Claim your ${OFFER_AMOUNT} Dollar Tree Gift Card</h1>
        <ol className="offer-steps">
          {steps.map(([title, copy], index) => (
            <li className="offer-step" key={title}>
              <span className="step-number" aria-hidden="true">{index + 1}</span>
              <div><h2 className="step-title">{title}</h2><p className="step-copy">{copy}</p></div>
            </li>
          ))}
        </ol>
        <Button variant="offer" asChild>
          <a href={OFFER_URL}>GET STARTED</a>
        </Button>
      </main>
    </div>
  );
}
