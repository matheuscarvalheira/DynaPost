import { FC, useContext, useEffect, useState } from "react";
import { Post } from "@/components/post";
import * as S from './styles';
import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { useSearchParams } from 'next/navigation'
import { Post as IPost} from "@/contexts/backend-context/types";
import { BackendContext } from "@/contexts/backend-context";
import { toast, ToastContent } from "react-toastify";
import { Modal } from "@/components/modal";
import { Form } from "@/components/form";
import { AuthContext } from "@/contexts/auth-context";


export const FeedTemplate: FC = () => {
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false);
  const [viewPostModalOpen, setViewPostModalOpen] = useState(false);
  const [editPostModalOpen, setEditPostModalOpen] = useState(false);

  const searchParams = useSearchParams()
  const { getAllPosts } = useContext(BackendContext);
  const { userType } = useContext(AuthContext);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
      async function fetchPosts() {
          setLoading(true);

          const classroomId = searchParams.get('classroomId')?.toString()
          const { getAllPostsOk, message, posts} = await getAllPosts({classroomId, queryString: search});

          if (getAllPostsOk) {
              if (Array.isArray(posts)) {
                setPosts(posts);
                console.log(posts)
              } else {
                  console.error("Erro: fetchPosts não é um array", posts);
              }    
          } else {
              toast.error(message as ToastContent<unknown>, {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
          }
      }

      fetchPosts();
      setLoading(false);
  }, [getAllPosts, search]);

  return (
    <S.Feed>
      <Modal isOpen={createPostModalOpen} handleOpen={setCreatePostModalOpen}>
        <Form />
      </Modal>

      <Modal isOpen={viewPostModalOpen} handleOpen={setViewPostModalOpen}>
        <Post isOnModal={true} userType={userType} />
      </Modal>

      <Modal isOpen={editPostModalOpen} handleOpen={setEditPostModalOpen}>
        <Form/>
      </Modal>

      <Header/>

      <S.FeedList>
        {posts.map(post => (
          <Post
            key={post.id}
            onClick={userType === 'teacher' ? () => setEditPostModalOpen(true) : () => setViewPostModalOpen(true)} userType={userType}
            title={post.title}
            body={post.body}
            createdAt={post.createdAt}
            modifiedAt={post.modifiedAt}
            teacherName={post?.teacher_name}
          />
        ))}
      </S.FeedList>

      <S.ButtonContainer>
        {userType === 'teacher' && <Button buttonType="open-modal" onClick={() => setCreatePostModalOpen(true)} />}
      </S.ButtonContainer>
    </S.Feed>
  )
}