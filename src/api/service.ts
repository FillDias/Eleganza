import axios from "axios";

const BASE_PATH = "http://localhost:3000";

export async function postCriarPix(body: any) {
    return await axios.post(`${BASE_PATH}/criar-pix`, { body });
}

export async function postCredit(
    token: string,
    issuer_id: string,
    payment_method_id: string,
    transaction_amount: number,
    installments: number,
    email: string,
    identificationType: string,
    identificationNumber: string
) {
    const body = {
        token,
        issuer_id,
        payment_method_id,
        transaction_amount: transaction_amount,
        installments: Number(installments),
        description: "Capa para notebook",
        payer: {
            email,
            identification: {
                type: identificationType,
                number: identificationNumber,
            },
        },
    };

   
    console.log("Dados enviados para o pagamento:", body);

    return await axios.post(`${BASE_PATH}/process_payment`, { body });
}


(async () => {
    const token = "seu_token_aqui";
    const issuer_id = "seu_issuer_id_aqui";
    const payment_method_id = "visa";
    const transaction_amount = 100;
    const installments = 1;
    const email = "email@exemplo.com";
    const identificationType = "CPF";
    const identificationNumber = "00000000000";

    try {
        const response = await postCredit(
            token,
            issuer_id,
            payment_method_id,
            transaction_amount,
            installments,
            email,
            identificationType,
            identificationNumber
        );
        console.log("Resposta postCredit:", response.data);
    } catch (error) {
        console.error("Erro em postCredit:", error);
    }
})();