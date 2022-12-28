import { NextPage } from "next/types";
import { SetStateAction, useState } from "react";
import { MainFormContainer } from "../components/forms";
import { ActionsLayout } from "../components/Layout";

const GoalsPage: NextPage = () => {
  const [option, setOption] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      <MainFormContainer
        buttons={["button1", "button2", "button3"]}
        setOption={setOption}
        option={option}
        show={show}
        setShow={setShow}
      />
    </>
  );
};

export default GoalsPage;
