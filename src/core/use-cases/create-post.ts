import type { Post } from "../entities/post";
import type { PostRepository } from "../repositories/post-repository";

export class CreatePost {
  constructor(
    private postRepository : PostRepository
  ) {
    this.postRepository = postRepository
  }

  async execute(post: Post): Promise<void> {
    await this.postRepository.create(post)
  }
}