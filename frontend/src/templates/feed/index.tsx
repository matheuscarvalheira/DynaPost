import { FC, useState } from "react";
import { Post } from "@/components/post";
import * as S from './styles';
import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { Modal } from "@/components/modal-new";
import { Form } from "@/components/form";

export const FeedTemplate: FC = () => {
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false);
  const [viewPostModalOpen, setViewPostModalOpen] = useState(false);
  const [editPostModalOpen, setEditPostModalOpen] = useState(false);

  return (
    <S.Feed>
      <Modal isOpen={createPostModalOpen} handleOpen={setCreatePostModalOpen}>
        <Form />
      </Modal>

      <Modal isOpen={viewPostModalOpen} handleOpen={setViewPostModalOpen}>
        <Post/>
      </Modal>

      <Modal isOpen={editPostModalOpen} handleOpen={setEditPostModalOpen}>
        <Form/>
      </Modal>

      <Header/>

      <S.FeedList>
        <Post onClick={() => setViewPostModalOpen(true)} />
        <Post onClick={() => setViewPostModalOpen(true)} />
        <Post onClick={() => setViewPostModalOpen(true)} />
      </S.FeedList>

      <S.ButtonContainer>
        <Button buttonType="open-modal" onClick={() => setCreatePostModalOpen(true)} />
      </S.ButtonContainer>
    </S.Feed>
  )
}