import IndexCards from "./IndexCards";
import AcercaCards from "./AcercaCards";
import ProductosCards from "./ProductosCards";
import GaleriaCards from "./GaleriasCards";
import ContactosCards from "./ContactosCards";
import SucursalesCards from "./SucursalesCards";
import Usuarios from "./Usuarios";
import Carrito from "./Carrito";

function Cards({ vista }) {
  switch (vista) {
    case "acerca":
      return <AcercaCards />;

    case "productos":
      return <ProductosCards />;

    case "galeria":
      return <GaleriaCards />;

    case "contactos":
      return <ContactosCards />;

    case "sucursales":
      return <SucursalesCards />;

    case "usuarios":
      return <Usuarios />;

    case "carrito":
      return <Carrito />;

    default:
      return <IndexCards />;
  }
}

export default Cards;