export default function FormAddAnuncio() {
  return (
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

      <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
        Adicionar anúncio
      </button>
    </form>
  );
}
