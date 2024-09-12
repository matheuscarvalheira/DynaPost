import { FC } from "react";
import { Header } from "./header";
import { Cursos } from "./cursos";

export const HomeTemplate: FC = () => {
  return (
    <>
      <Header/>
      <Cursos/>
    </>
  )
}