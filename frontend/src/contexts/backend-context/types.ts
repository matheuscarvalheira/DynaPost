export interface BackendContextProps {
    getClassrooms: () => Promise<GetClassroomsResult>
    getAllPosts: ({ classroomId, queryString }: GetAllPostsProps) => Promise<GetAllPostsResult>
    getPost: ({ postId }: GetPostProps) => Promise<GetPostResult>
    createPost: ({ title, body, published, classroom_id }: Post) => Promise<CreatePostResult>
    updatePost: ({ id, title, body, published }: Post) => Promise<UpdatePostResult>
    deletePost: ({ id }: Post) => Promise<DeletePostResult>
}

export interface BackendProviderProps {
    children: React.ReactNode
}

export interface GetClassroomsResult {
    getClassroomsOk: boolean,
    message?: string | undefined | unknown,
    classrooms: Classroom[]
}

export interface GetAllPostsProps {
    classroomId: string | undefined | unknown
    queryString?: string | undefined | unknown
}

export interface GetAllPostsResult {
    getAllPostsOk: boolean,
    message?: string | undefined | unknown,
    posts: Post[]
}

export interface GetPostProps {
    postId: string
}

export interface GetPostResult {
    getPostOk: boolean,
    message?: string | undefined | unknown,
    post: Post | null,
}

export interface CreatePostResult {
    createPostOk: boolean,
    message?: string | undefined | unknown,
    post: Post | null,
}

export interface UpdatePostResult {
    updatePostOk: boolean,
    message?: string | undefined | unknown,
    post: Post | null,
}

export interface DeletePostResult {
    deletePostOk: boolean,
    message?: string | undefined | unknown,
}

export interface Classroom {
    id: string,
    name: string,
}

export interface Post {
    id?: string,
    title?: string,
    body?: string,
    published?: boolean,
    createdAt?: string,
    modifiedAt?: string,
    teacher_id?: string,
    classroom_id?: string,
}