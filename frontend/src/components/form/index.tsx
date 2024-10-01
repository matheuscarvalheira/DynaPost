'use-client';
import { ReactNode, useContext, useEffect, useState } from "react";
import { Textarea } from "../textarea";
import * as S from './styles'
import { FormProps } from "./props";
import { BackendContext } from "@/contexts/backend-context";
import { useSearchParams } from 'next/navigation';
import { ToastError } from "@/utils/toast-error";


export const Form = ({currentPost}: FormProps): ReactNode => {
    const [inputValue, setInputValue] = useState<string | undefined>('');
    const [textAreaValue, setTextAreaValue] = useState<string | undefined>('');

    const { deletePost, updatePost, createPost } = useContext(BackendContext);

    const searchParams = useSearchParams();
    const classroomId = searchParams.get('classroomId') ?? undefined;

    useEffect(() => {
        setInputValue(currentPost?.title);
        setTextAreaValue(currentPost?.body);
    }, [currentPost])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(event.target.value);
    }

    const handleDelete = async () => {
        if (currentPost) {
            const result = await deletePost(currentPost);
            if (result.deletePostOk) { 
                window.location.reload(); 
            } else {
                ToastError(result.message);
            }
        }
    };

    const handlePublish = async () => {
        if (currentPost) {
            const result = await updatePost({
                id: currentPost.id,
                title: inputValue,
                body: textAreaValue,
                published: true,
            });
            if (result.updatePostOk) {
                window.location.reload();
            } else {
                ToastError(result.message);
            }
        } else {
            const result = await createPost({
                title: inputValue,
                body: textAreaValue,
                published: true,
                classroom_id: classroomId,
            });
            if (result.createPostOk) {
                window.location.reload();
            } else {
                ToastError(result.message);
            }
        }
    };

  return (
    <S.Form>
        <S.Container>
            <S.Input 
                placeholder="Título" 
                value={inputValue} 
                onChange={handleInputChange} />

            <Textarea 
                defaultValue={currentPost?.body}
                placeholder="Conteúdo" 
                value={textAreaValue} 
                onChange={handleTextAreaChange} /> 

            <S.ButtonContainer>
                {currentPost ? <S.Button buttonType="delete-post" text="Deletar" onClick={handleDelete} /> : null}
                <S.Button text="Publicar" onClick={handlePublish} />
            </S.ButtonContainer>
        </S.Container>
    </S.Form>
  )
}