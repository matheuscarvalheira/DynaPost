import { FC } from "react";
import { Header } from "./header";
import { Cursos } from "./cursos";

export const CriarContaTemplate: FC = () => {
  return (
    <>
      <Header/>
      <Cursos/>
    </>
  )
}