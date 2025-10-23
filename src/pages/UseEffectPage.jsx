import { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [todosAnuncios, setTodosAnuncios] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchAnuncios() {
    try {
      setLoading(true);

      const response = await fetch(
        "https://dc-classificados.up.railway.app/api/anuncios/getAllAnuncios"
      );

      const data = await response.json();

      setTodosAnuncios(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("Componente renderizado");
    fetchAnuncios();
  }, []);

  console.log(todosAnuncios);

  return (
    <div>
      {loading ? (
        <div>CARREGANDO....</div>
      ) : (
        <div>
          {todosAnuncios.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.titulo}</h1>
                <img src={item.imagem} alt="" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
