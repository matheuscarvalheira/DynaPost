import { createContext, useContext } from "react";
import { BackendContextProps, BackendProviderProps, CreatePostResult, DeletePostResult, GetAllPostsProps, GetAllPostsResult, GetClassroomsResult, GetPostProps, GetPostResult, Post, UpdatePostResult } from "./types";
import { AuthContext } from "../auth-context";
import { api } from "@/api/backend";

export const BackendContext = createContext({} as BackendContextProps)

export function BackendProvider({ children }: BackendProviderProps){

    const { userId, userType } = useContext(AuthContext)

    async function getClassrooms(): Promise<GetClassroomsResult> {
        if (userId.trim() === '') {
            return {getClassroomsOk: true, classrooms: []}
        } else {
            try {
                const route = userType === 'teacher' ? 'teachers' : 'students';
                const { data } = await api.get(`classrooms/${route}/${userId}`);
                return { getClassroomsOk: true, classrooms: data }
            } catch (error) {
                console.error('Failed to get Classrooms:', error);
                return { getClassroomsOk: false, message: 'Falha ao obter as Turmas. Tente novamente mais tarde.', classrooms: [] }
            }
        }
    }
 
    async function getAllPosts({ classroomId, queryString }: GetAllPostsProps): Promise<GetAllPostsResult> {
        try {
            const { data } = await api.get(`/posts/search/${classroomId}?q=${queryString}`)
            return { getAllPostsOk: true, posts: data }
        } catch (error) {
            console.error('Failed to get Posts:', error)
            return { getAllPostsOk: false, message: 'Falha ao obter as Postagens. Tente novamente mais Tarde.', posts: [] }
        }
    }

    async function getPost({ postId }: GetPostProps): Promise<GetPostResult> {
        try {
            const { data } = await api.get(`posts/${postId}`)
            return { getPostOk: true, post: data }
        } catch (error) {
            console.error('Failed to get Post:', error)
            return { getPostOk: false, message: 'Falha ao obter as Postagens. Tente novamente mais Tarde.', post: null }
        }
    }

    async function createPost({ title, body, published, classroom_id }: Post): Promise<CreatePostResult> {
        try {
            const { data } = await api.post('posts', { title, body, published, classroom_id, teacher_id: userId })
            return{ createPostOk: true, message: 'Postagem Criada com Sucesso!', post: data}
        } catch (error) {
            console.error('Failed to Create Post:', error)
            return { createPostOk: false, message: 'Falha na Criação da Postagem. Tente novamente mais Tarde.', post: null }
        }
    }

    async function updatePost({ id, title, body, published }: Post): Promise<UpdatePostResult> {
        try {
            const { data } = await api.put(`posts/${id}`, { title, body, published })
            return{ updatePostOk: true, message: 'Postagem Alterada com Sucesso!', post: data }
        } catch (error) {
            console.error('Failed to Create Post:', error)
            return { updatePostOk: false, message: 'Falha na Criação da Postagem. Tente novamente mais Tarde.', post: null }
        }
    }

    async function deletePost({ id }: Post): Promise<DeletePostResult> {
        try {
            const { status } = await api.delete(`posts/${id}`)
            if (status === 204) {
                return { deletePostOk: true, message: 'Postagem Apagada com Sucesso!' }
            } else {
                return{ deletePostOk: false, message: 'Falha ao Apagar a Postagem. Tente novamente mais Tarde.' }
            }
        } catch (error) {
            console.error('Failed to Create Post:', error)
            return { deletePostOk: false, message: 'Falha ao Apagar a Postagem. Tente novamente mais Tarde.' }
        }
    }
    
    return (
        <BackendContext.Provider value={{ getClassrooms, getAllPosts, getPost, createPost, updatePost, deletePost }}>
            { children }
        </BackendContext.Provider>
    )
}
