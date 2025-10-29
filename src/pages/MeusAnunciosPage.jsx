import HeaderLogado from "../components/HeaderLogado";
import SectionAddAnuncio from "../components/SectionAddAnuncio";
import CardsLogado from "../components/CardsLogado";
import Footer from "../components/Footer";
import Drawer from "../components/Drawer";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { data } from "react-router-dom";

export default function MeusAnunciosPage() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [anunciosData, setAnunciosData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);

    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://dc-classificados.up.railway.app/api/anuncios/getallmyanuncios?userId=${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setAnunciosData(data);
      }
    } catch (error) {
      console.error(error);
      toast.error(data.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <HeaderLogado />
      <SectionAddAnuncio setOpenDrawer={setOpenDrawer} />
      <CardsLogado
        setOpenModalDelete={setOpenModalDelete}
        anunciosData={anunciosData}
        loading={loading}
      />
      <Footer />

      <Drawer open={openDrawer} setOpen={setOpenDrawer} fetchData={fetchData} />
      <Modal open={openModalDelete} setOpen={setOpenModalDelete} />
    </div>
  );
}
