export function makeFindAllPostUseCase() {
  const postRepository = new PostRepository()
  const findAllPostUseCase = new FindAllPostUseCase(postRepository)

  return findAllPostUseCase
}
