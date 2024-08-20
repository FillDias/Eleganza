"use client";

import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useCart } from "@/app/context/CartContext"; 

const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

if (!CLIENT_ID) {
  throw new Error("PayPal Client ID não definido. Verifique suas variáveis de ambiente.");
}

const initialOptions = {
  clientId: CLIENT_ID,
  currency: "BRL",
  intent: "CAPTURE",
};

const PayPalButton = () => {
  const { cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          if (!actions?.order) {
            return Promise.reject(new Error("Ações do pedido não estão disponíveis"));
          }
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "BRL",
                  value: calculateTotal(),
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          if (!actions?.order) {
            console.error("Ações do pedido não estão disponíveis");
            return;
          }
          try {
            const details = await actions.order.capture();
            alert("Pagamento realizado com sucesso!");
          } catch (error) {
            console.error("Erro ao capturar o pedido:", error);
            alert("Ocorreu um erro ao processar o pagamento.");
          }
        }}
        onError={(err) => {
          console.error("Erro no pagamento:", err);
          alert("Ocorreu um erro ao processar o pagamento.");
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;