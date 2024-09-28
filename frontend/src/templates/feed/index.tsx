import { FC, useState } from "react";
import { Post } from "@/components/post";
import * as S from './styles';
import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { Modal } from "@/components/modal-new";
import { Form } from "@/components/form";

export const FeedTemplate: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <S.Feed>
      <Modal isOpen={modalOpen} handleOpen={setModalOpen}>
        <Form />
      </Modal>
      <Header/>
      <S.FeedList>
        <Post />
        <Post />
        <Post />
      </S.FeedList>
      <S.ButtonContainer>
        <Button buttonType="open-modal" onClick={() => setModalOpen(true)}/>
      </S.ButtonContainer>
    </S.Feed>
  )
}