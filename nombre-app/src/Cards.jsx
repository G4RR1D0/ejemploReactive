import IndexCards from "./IndexCards";
import AcercaCards from "./AcercaCards";
import ProductosCards from "./ProductosCards";
import GaleriaCards from "./GaleriasCards";
import ContactosCards from "./ContactosCards";
import SucursalesCards from "./SucursalesCards";

function Cards({ vista }) {
  if (vista === "acerca") return <AcercaCards />;
  if (vista === "productos") return <ProductosCards />;
  if (vista === "galeria") return <GaleriaCards />;
  if (vista === "contactos") return <ContactosCards />;
  if (vista === "sucursales") return <SucursalesCards />;

  return <IndexCards />;
}

export default Cards;

