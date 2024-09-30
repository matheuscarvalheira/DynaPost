import { FC, useContext, useEffect, useState } from "react";
import { Post } from "@/components/post";
import * as S from './styles';
import { Header } from "@/components/header";
import { Dropdown } from "@/components/dropdown";
import { Button } from "@/components/button";
import { useSearchParams } from 'next/navigation'
import { Post as IPost} from "@/contexts/backend-context/types";
import { BackendContext } from "@/contexts/backend-context";
import { toast, ToastContent } from "react-toastify";


export const FeedTemplate: FC = () => {

  const searchParams = useSearchParams()

  const { getAllPosts } = useContext(BackendContext);
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
  }, [getAllPosts, search, searchParams]);

  return (
    <S.Home>
      <Header/>
      <Dropdown items={['Turma 1', 'Turma 2', 'Turma 3']}/>
      <Button text={'cadastrar'} onClick={() => console.log('cadastrar')}/>
      <Button buttonType="open-modal" onClick={() => console.log('abrir')}/>
      <Button text={'apagar'} buttonType="delete-post" onClick={() => console.log('apagar')}/>
      <S.Feed>
        <Post />
        <Post />
        <Post />
      </S.Feed>
    </S.Home>
  )
}