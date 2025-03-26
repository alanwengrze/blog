import {expect, test} from 'vitest'
import { Post } from "./post";

test('Deve criar um post', () => {
  const post = new Post({
    id: '1',
    authorId: '1',
    content: 'Conteúdo do post',
    title: 'Titulo do post',
    published: false
  })
  expect(post).toBeTruthy()
})