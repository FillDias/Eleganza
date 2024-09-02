// src/components/PayPalProvider.tsx
"use client";

import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialOptions = {
    clientId: "YOUR_PAYPAL_CLIENT_ID", // Substitua com sua Client ID do PayPal
    currency: "BRL",
    intent: "capture", // O tipo de transação
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
};

export default PayPalProvider;