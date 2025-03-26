interface IPost {
  id: string,
  authorId: string,
  content: string,
  title: string,
  published: boolean
}
export class Post {
  constructor (private props: IPost){
    this.props = props
  }
  get authorId() {
    return this.props.authorId
  }
  set authorId(value: string) {
    this.props.authorId = value
  }

  get content() {
    return this.props.content
  }
  set content(value: string) {
    this.props.content = value
  }

  get title() {
    return this.props.title
  }
  set title(value: string) {
    this.props.title = value
  }
  
  get published() {
    return this.props.published
  }
  set published(value: boolean) {
    this.props.published = value
  }
}