// pages/api/payment.js
import axios from 'axios';

const BASE_PATH = "https://api.mercadopago.com";
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN; // Certifique-se de definir isso no seu arquivo .env

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {
            token,
            issuer_id,
            payment_method_id,
            transaction_amount,
            installments,
            payer
        } = req.body;

        try {
            const response = await axios.post(`${BASE_PATH}/v1/payments`, {
                token,
                issuer_id,
                payment_method_id,
                transaction_amount,
                installments,
                description: "Descrição do produto",
                payer,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${MP_ACCESS_TOKEN}`,
                    'X-Idempotency-Key': 'unique-idempotency-key', // Use uma chave única para evitar duplicações
                },
            });

            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error processing payment:', error.response?.data || error.message);
            res.status(error.response?.status || 500).json({ error: 'Error processing payment' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}