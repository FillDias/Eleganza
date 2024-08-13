import Image from 'next/image';

export const Rodape = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-[#d3d3d3] to-[#f5f5f5] py-6">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Seção de Navegação */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-[#363535] mb-2">Navegação</h4>
            <ul>
              <li className="mb-1">
                <a href="/" className="text-[#363535] hover:text-[#007bff]">Home</a>
              </li>
              <li className="mb-1">
                <a href="/contato" className="text-[#363535] hover:text-[#007bff]">Contato</a>
              </li>
             
             
            </ul>
          </div>

          {/* Seção de Meios de Pagamento */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-[#363535] mb-2">Meios de Pagamento</h4>
            <div className="flex gap-2 flex-wrap">
              <Image src="/images/visa.png" alt="Visa" width={50} height={30} />
              <Image src="/images/mastercard.png" alt="MasterCard" width={50} height={30} />
              <Image src="/images/elo.png" alt="Elo" width={50} height={30} />
              <Image src="/images/pix.png" alt="Pix" width={70} height={15} />
            </div>
          </div>

          {/* Seção de Contato */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-[#363535] mb-2">Contato</h4>
            <p className="text-[#363535] mb-1">
              <span>Telefone:</span> 27 996543826
            </p>
            <p className="text-[#363535]">
              RUA BOGOTA, 321, LOJA , ARAÇAS, VILA VELHA ES / 29103800
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-[#363535]">
            &copy; 2024 Elleganza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;