import { Comment } from "../types/Comment";

class CommentService{
  static readonly URL = 'http://localhost:3000/api/data/comments?timeout=2000'

  async fetch(){
    const res = await fetch(CommentService.URL)
      .then((res: Response) => res.json())
      .then((res) => res?.comments);

    return res as Comment[];
  }

  async add(comment: Comment){
    return await fetch(CommentService.URL, {
      method: 'POST',
      body: JSON.stringify(comment),
    });
  }
}

export default new CommentService()