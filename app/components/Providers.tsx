"use client";
import { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

export default function CartProviders({ children }: { children: ReactNode }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://akpluselectronics.com/stripe/success"
      cancelUrl="http://akpluselectronics.com/stripe/error"
      currency="INR"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
}
