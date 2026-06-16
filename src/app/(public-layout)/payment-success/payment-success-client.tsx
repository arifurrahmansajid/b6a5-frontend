"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { updateDonationStatus } from "@/actions/donate.action";

export function PaymentSuccessClient() {
  const searchParams = useSearchParams();
  const donationId = searchParams.get("donationId");
  const processed = useRef(false);

  useEffect(() => {
    if (donationId && !processed.current) {
      processed.current = true;
      updateDonationStatus(donationId, "COMPLETED").catch(console.error);
    }
  }, [donationId]);

  return null;
}
