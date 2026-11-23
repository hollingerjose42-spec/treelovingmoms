import { describe, expect, it } from "vitest";
import { OFFER_AMOUNT, OFFER_URL } from "@/lib/offer";

describe("Gift card offer", () => {
  it("offers a $500 gift card", () => {
    expect(OFFER_AMOUNT).toBe(500);
  });
  it("sends Get Started to the supplied destination", () => {
    expect(OFFER_URL).toBe("https://linkthem.net/?offer_id=1982&aff_id=5383&source=d500");
  });
});