
"use client";

import { useState } from "react";

const PromoModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#FFE4C4] p-6 rounded-lg shadow-lg max-w-sm w-full relative">
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-700"
                >
                    ✕
                </button>
                <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
                    Ganhe até 15% de desconto!
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Nome
                        </label>
                        <input
                            type="text"
                            placeholder="Seu nome"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            E-mail
                        </label>
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Telefone
                        </label>
                        <input
                            type="tel"
                            placeholder="Seu telefone"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PromoModal;
