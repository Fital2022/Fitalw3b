import { NextPage } from "next/types";
import { ActionsLayout } from "../components/Layout";

const GoalsPage: NextPage = () => {
  return (
    <ActionsLayout
      title={"Fital - Metas"}
      pageDescription={"Página de gestion de metas"}
    >
      GoalsPage
    </ActionsLayout>
  );
};

export default GoalsPage;
