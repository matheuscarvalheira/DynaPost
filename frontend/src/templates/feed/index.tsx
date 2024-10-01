import { FC, useContext, useEffect, useState } from "react";
import { Post } from "@/components/post";
import * as S from './styles';
import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { useSearchParams } from 'next/navigation'
import { Post as IPost} from "@/contexts/backend-context/types";
import { BackendContext } from "@/contexts/backend-context";
import { Modal } from "@/components/modal";
import { Form } from "@/components/form";
import { AuthContext } from "@/contexts/auth-context";
import { Loader } from "@/components/loader";
import { ToastError } from "@/utils/toast-error";


export const FeedTemplate: FC = () => {
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false);
  const [viewPostModalOpen, setViewPostModalOpen] = useState(false);
  const [editPostModalOpen, setEditPostModalOpen] = useState(false);

  const searchParams = useSearchParams()
  const { getAllPosts } = useContext(BackendContext);
  const { userType } = useContext(AuthContext);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentPost, setCurrentPost] = useState<IPost>();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const handleOpenPost = (post: IPost) => {
    if (userType === 'teacher') {
      setEditPostModalOpen(true);
    } else {
      setViewPostModalOpen(true);
    }
    setCurrentPost(post);
  }

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
                  setPosts([]);
              }    
          } else {
              ToastError(message);
          }
      }

      fetchPosts();
      setLoading(false);
  }, [getAllPosts, search, searchParams]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <S.Feed>
      <Modal isOpen={createPostModalOpen} handleOpen={setCreatePostModalOpen}>
        <Form />
      </Modal>

      <Modal isOpen={viewPostModalOpen} handleOpen={setViewPostModalOpen}>
        <Post isOnModal={true} userType={userType} currentPost={currentPost}/>
      </Modal>

      <Modal isOpen={editPostModalOpen} handleOpen={setEditPostModalOpen}>
        <Form currentPost={currentPost}/>
      </Modal>

      <Header/>

      <S.SearchInput showIcon={true} value={search} onChange={handleSearchInputChange} />

      <S.FeedList>
        {posts.length === 0 && !loading ? <S.Text>Nenhum post.</S.Text> : null}
        {loading ? <Loader /> : null}
        {posts.map(post => (
          <Post
            key={post.id}
            onClick={() => handleOpenPost(post)}
            userType={userType}
            currentPost={post}
          />
        ))}
      </S.FeedList>

      <S.ButtonContainer>
        {userType === 'teacher' && <Button buttonType="open-modal" onClick={() => setCreatePostModalOpen(true)} />}
      </S.ButtonContainer>
    </S.Feed>
  )
}