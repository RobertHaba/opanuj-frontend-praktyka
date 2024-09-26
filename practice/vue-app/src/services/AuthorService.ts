import { Author } from "../types/Authors";

class AuthorService{
  static readonly URL = 'http://localhost:3000/api/data/authors?timeout=2000'

  async fetch(){
    const res = await fetch(AuthorService.URL)
      .then((res) => res.json())
      .then((res) => res.authors);
  
    return res as Author[];
  }
}

export default new AuthorService()