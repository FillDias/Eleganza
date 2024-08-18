// src/utils/calculateShipping.ts

export async function calculateShipping(zipCode: string, weight: number) {
  const url = 'https://private-anon-a05bb93b82-frenetapi.apiary-mock.com/v1/partner/register';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer D6698BC3R7583R4ECFR8861R185E41A71241' // Substitua com sua chave de API
    },
    body: JSON.stringify({
      nCdEmpresa: "", // Código da empresa, se aplicável
      sDsSenha: "", // Senha, se aplicável
      nCdServico: "40010", // Código do serviço (exemplo: SEDEX)
      sCepOrigem: "29103640", // CEP de origem
      sCepDestino: zipCode, // CEP de destino
      nVlPeso: 1, // Peso em gramas
      nCdFormato: 1, // Formato do pacote (1 para caixa)
      nVlComprimento: 20, // Comprimento em cm
      nVlAltura: 20, // Altura em cm
      nVlLargura: 20, // Largura em cm
      nVlDiametro: 0, // Diâmetro em cm (0 se não for circular)
    })
  });

  if (!response.ok) {
    // Lida com respostas de erro da API
    throw new Error(`Erro na requisição: ${response.statusText}`);
  }

  const data = await response.json();
  console.log(data);
  return data;
}