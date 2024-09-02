"use client";

import { useEffect, useState } from "react";
import { loadMercadoPago } from "@mercadopago/sdk-js";

declare global {
    interface Window {
        MercadoPago: any;
    }
}

const postCredit = async (
    token: string,
    issuer_id: string,
    payment_method_id: string,
    amount: number,
    installments: number,
    email: string,
    identificationType: string,
    identificationNumber: string,
    address: {
        street: string;
        number: string;
        neighborhood: string;
        city: string;
        state: string;
        postalCode: string;
    }
) => {
    try {
        const response = await fetch('/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token,
                issuer_id,
                payment_method_id,
                transaction_amount: amount,
                installments,
                payer: {
                    email,
                    identification: {
                        type: identificationType,
                        number: identificationNumber,
                    },
                },
                shipping: {
                    address,
                },
            }),
        });

        return await response.json();
    } catch (error) {
        console.error('Error processing payment:', error);
        throw error;
    }
};

const CartaoCredito = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
    const [address, setAddress] = useState({
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
        postalCode: '',
    });

    useEffect(() => {
        const initializeCardForm = async () => {
            await loadMercadoPago();
            const mp = new window.MercadoPago('TEST-b8117f9a-5720-4d88-b716-f74139f6905f');

            const cardForm = mp.cardForm({
                amount: '1270.9',
                iframe: true,
                form: {
                    id: 'form-checkout',
                    cardNumber: {
                        id: 'form-checkout__cardNumber',
                        placeholder: 'Número do cartão',
                    },
                    expirationDate: {
                        id: 'form-checkout__expirationDate',
                        placeholder: 'MM/YY',
                    },
                    securityCode: {
                        id: 'form-checkout__securityCode',
                        placeholder: 'Código de segurança',
                    },
                    cardholderName: {
                        id: 'form-checkout__cardholderName',
                        placeholder: 'Titular do cartão',
                    },
                    issuer: {
                        id: 'form-checkout__issuer',
                        placeholder: 'Banco emissor',
                    },
                    installments: {
                        id: 'form-checkout__installments',
                        placeholder: 'Parcelas',
                    },
                    identificationType: {
                        id: 'form-checkout__identificationType',
                        placeholder: 'Tipo de documento',
                    },
                    identificationNumber: {
                        id: 'form-checkout__identificationNumber',
                        placeholder: 'Número do documento',
                    },
                    cardholderEmail: {
                        id: 'form-checkout__cardholderEmail',
                        placeholder: 'E-mail',
                    },
                },
                callbacks: {
                    onFormMounted: (error: any) => {
                        if (error) return console.warn('Form Mounted handling error: ', error);
                        console.log('Form mounted');
                    },
                    onSubmit: (event: any) => {
                        event.preventDefault();

                        const {
                            paymentMethodId: payment_method_id,
                            issuerId: issuer_id,
                            cardholderEmail: email,
                            amount,
                            token,
                            installments,
                            identificationNumber,
                            identificationType,
                        } = cardForm.getCardFormData();

                        setIsSubmitting(true);
                        postCredit(
                            token,
                            issuer_id,
                            payment_method_id,
                            Number(amount),
                            Number(installments),
                            email,
                            identificationType,
                            identificationNumber,
                            address
                        ).then(response => {
                            console.log("Payment response:", response);
                            setPaymentStatus('Pagamento realizado com sucesso!');
                            setIsSubmitting(false);
                        }).catch((error: Error) => {
                            console.error("Payment error:", error);
                            setPaymentStatus('Erro ao processar pagamento. Tente novamente.');
                            setIsSubmitting(false);
                        });
                    },
                    onFetching: (resource: any) => {
                        console.log('Fetching resource: ', resource);

                        // Animate progress bar
                        const progressBar = document.querySelector('.progress-bar');
                        if (progressBar) {
                            progressBar.removeAttribute('value');
                            return () => {
                                progressBar.setAttribute('value', '0');
                            };
                        }
                    },
                },
            });
        };

        initializeCardForm();
    }, [address]);

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Informações de Pagamento</h1>
                <form id="form-checkout" className="space-y-6">
                    {/* Payment Fields */}
                    <div className="flex flex-col mb-4">
                        <label htmlFor="form-checkout__cardNumber" className="text-sm font-medium text-gray-700">Número do Cartão</label>
                        <div id="form-checkout__cardNumber" className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col">
                            <label htmlFor="form-checkout__expirationDate" className="text-sm font-medium text-gray-700">Validade</label>
                            <div id="form-checkout__expirationDate" className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100"></div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="form-checkout__securityCode" className="text-sm font-medium text-gray-700">Código de Segurança</label>
                            <div id="form-checkout__securityCode" className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100"></div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="form-checkout__cardholderName" className="text-sm font-medium text-gray-700">Nome do Titular</label>
                        <input 
                            type="text" 
                            id="form-checkout__cardholderName" 
                            className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100" 
                            placeholder="Nome do Titular" 
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col">
                            <label htmlFor="form-checkout__issuer" className="text-sm font-medium text-gray-700">Banco Emissor</label>
                            <select id="form-checkout__issuer" className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100"></select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="form-checkout__installments" className="text-sm font-medium text-gray-700">Parcelas</label>
                            <select id="form-checkout__installments" className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100"></select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col">
                            <label htmlFor="form-checkout__identificationType" className="text-sm font-medium text-gray-700">Tipo de Documento</label>
                            <select id="form-checkout__identificationType" className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100"></select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="form-checkout__identificationNumber" className="text-sm font-medium text-gray-700">Número do Documento</label>
                            <input 
                                type="text" 
                                id="form-checkout__identificationNumber" 
                                className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100" 
                                placeholder="Número do Documento" 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="form-checkout__cardholderEmail" className="text-sm font-medium text-gray-700">E-mail</label>
                        <input 
                            type="email" 
                            id="form-checkout__cardholderEmail" 
                            className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100" 
                            placeholder="E-mail" 
                        />
                    </div>
                    {/* Address Fields */}
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Endereço de Entrega</h2>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="street" className="text-sm font-medium text-gray-700">Rua</label>
                        <input 
                            type="text" 
                            id="street" 
                            name="street"
                            value={address.street}
                            onChange={handleAddressChange}
                            className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100" 
                            placeholder="Rua" 
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col">
                            <label htmlFor="number" className="text-sm font-medium text-gray-700">Número</label>
                            <input 
                                type="text" 
                                id="number" 
                                name="number"
                                value={address.number}
                                onChange={handleAddressChange}
                                className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100" 
                                placeholder="Número" 
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="neighborhood" className="text-sm font-medium text-gray-700">Bairro</label>
                            <input 
                                type="text" 
                                id="neighborhood" 
                                name="neighborhood"
                                value={address.neighborhood}
                                onChange={handleAddressChange}
                                className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100" 
                                placeholder="Bairro" 
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col">
                            <label htmlFor="city" className="text-sm font-medium text-gray-700">Cidade</label>
                            <input 
                                type="text" 
                                id="city" 
                                name="city"
                                value={address.city}
                                onChange={handleAddressChange}
                                className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100" 
                                placeholder="Cidade" 
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="state" className="text-sm font-medium text-gray-700">Estado</label>
                            <input 
                                type="text" 
                                id="state" 
                                name="state"
                                value={address.state}
                                onChange={handleAddressChange}
                                className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100" 
                                placeholder="Estado" 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="postalCode" className="text-sm font-medium text-gray-700">CEP</label>
                        <input 
                            type="text" 
                            id="postalCode" 
                            name="postalCode"
                            value={address.postalCode}
                            onChange={handleAddressChange}
                            className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100" 
                            placeholder="CEP" 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
                    >
                        {isSubmitting ? 'Processando...' : 'Pagar'}
                    </button>
                    {paymentStatus && (
                        <div className={`mt-4 ${paymentStatus.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
                            {paymentStatus}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default CartaoCredito;
