// src/utils/calculateShipping.ts

export interface ShippingResponse {
    error: boolean;
    message?: string;
    value?: number;
  }
  
  export async function calculateShipping(zipCode: string): Promise<ShippingResponse> {
    try {
      const response = await fetch(`https://api.correios.com.br/calculofrete?cepDestino=${zipCode}`);
      const data = await response.json();
      console.log('Resposta da API:', data); // Adicione este log para depuração
  
      if (data.error) {
        return { error: true, message: data.message };
      }
  
      const shippingValue = data.valor; // Ajuste conforme a resposta da API
      return { error: false, value: shippingValue };
    } catch (error) {
      console.error('Erro ao calcular frete:', error);
      return { error: true, message: 'Erro ao calcular o frete' };
    }
  }