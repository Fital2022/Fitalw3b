import { ActionsLayout } from "../../components/Layout";
import { ModalView } from "../../components/Ui";
// import { Fireworks } from "../../components/Ui";

const patrimony = () => {
  return (
    <ActionsLayout
      title={"Fital - Modal y Confetti"}
      pageDescription={"Pruebas"}
    >
      <ModalView text="Este es una prueba del modal y del confetti en el sistema de Fital"></ModalView>
      {/* <Fireworks></Fireworks> */}
    </ActionsLayout>
  );
};

export default patrimony;
