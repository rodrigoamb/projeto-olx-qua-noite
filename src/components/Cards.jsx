import { CircleNotchIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { formatDate } from "../utils/formatDate";

export default function Cards() {
  const [anunciosData, setAnunciosData] = useState([]);
  const [loading, setLoading] = useState(false);

  //dados mockados
  // const anunciosData = [
  //   {
  //     titulo: "Bicicleta Aro 29",
  //     descricaoCurta:
  //       "Bicicleta em ótimo estado, usada apenas em trilhas leves.",
  //     created_at: "01/10/2025",
  //     preco: "R$ 1.200,00",
  //     usuario: {
  //       cidade: "São Paulo",
  //       estado: "SP",
  //     },
  //   },
  //   {
  //     titulo: "Smartphone Galaxy S21",
  //     descricaoCurta:
  //       "Smartphone usado, com tela de 6.2 polegadas e câmera de 64MP.",
  //     created_at: "15/09/2025",
  //     preco: "R$ 2.500,00",
  //     usuario: {
  //       cidade: "Rio de Janeiro",
  //       estado: "RJ",
  //     },
  //   },
  // ];

  async function fetchDataAnuncios() {
    setLoading(true);

    try {
      const response = await fetch(
        "https://dc-classificados.up.railway.app/api/anuncios/getAllAnuncios"
      );

      const data = await response.json();

      if (response.ok) {
        setAnunciosData(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDataAnuncios();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-[#6F0AD5] flex justify-center items-center flex-col ">
          <CircleNotchIcon size={70} className="animate-spin" />
          <p className="text-2xl">Carregando...</p>
        </div>
      ) : (
        <section className="mt-12 max-w-screen-lg mx-auto px-4 md:px-8">
          <div>
            <h1 className="text-gray-800 text-3xl font-semibold">
              Todos os anúncios
            </h1>
          </div>

          <ul className="mt-12 space-y-6">
            {anunciosData.map((item, idx) => (
              <li
                key={idx}
                className="p-5 bg-white rounded-md shadow-sm flex flex-row gap-5"
              >
                <div className="">
                  <img
                    className="w-[200px] h-[200px] object-contain"
                    src={item.imagem}
                    alt={item.descricaoCurta}
                  />
                </div>
                <button className="w-full">
                  <div>
                    <div className="justify-between sm:flex">
                      <div>
                        <h3 className="text-start text-xl font-medium text-cyan-600">
                          {item.titulo}
                        </h3>
                        <p className="text-gray-500 mt-2 pr-2">
                          {item.descricaoCurta}
                        </p>
                      </div>
                      <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                        <span className="flex items-center text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {formatDate(item.created_at)}
                        </span>
                        <span className="flex items-center text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="text-2xl font-bold text-blue-700">
                            {item.preco}
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                      <span className="flex items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item.usuario.cidade},{item.usuario.estado}
                      </span>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
