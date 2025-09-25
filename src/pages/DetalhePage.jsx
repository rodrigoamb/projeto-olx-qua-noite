import { Link } from "react-router-dom";

export default function DetalhePage() {
  return (
    <main className="flex overflow-hidden">
      <div className="flex justify-center items-center">
        <img
          src="https://m.media-amazon.com/images/I/51VZErxKwkL._AC_SX679_.jpg"
          className="w-[50%]"
        />
      </div>
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Editar anúncio
            </h3>
            <p className="mt-3">
              Edite as informações do seu anúncio e clique em salvar quando
              terminar.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 mt-3 lg:pb-12"
          >
            <div>
              <label className="font-medium">Título anúncio</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Preço</label>
              <input
                type="number"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Descrição Curta</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Descrição Completa</label>
              <textarea
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>

            <div>
              <label className="font-medium">Link da imagem</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                Editar anúncio
              </button>
              <Link
                to={"/meus-anuncios"}
                className="w-full text-center border-1 border-gray-400 py-2 rounded-lg hover:bg-gray-100 duration-150 font-semibold"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
