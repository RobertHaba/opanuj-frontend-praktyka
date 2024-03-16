import { Comment } from "../types/Comment";

class CommentService{
  static readonly URL = 'http://localhost:3000/api/data/comments?timeout=500'

  async fetch(){
    const res = await fetch(CommentService.URL)
      .then((res: Response) => res.json())
      .then((res) => res?.comments);

    return res?.length ?  res as Comment[] : [];
  }

  async add(comment: Comment){
    const res = await fetch(CommentService.URL, {
      method: 'POST',
      body: JSON.stringify(comment),
    })

    if(!res.ok) throw new Error('Network response was not ok')

    return res
  }
}

export default new CommentService()