import { Article } from "../types/Article";

class ArticleService{
  static readonly URL = 'http://localhost:3000/api/data/articles?timeout=1000'

  async fetch(){
    const res = await fetch(ArticleService.URL)
      .then((res) => res.json())
      .then((res) => res.articles);
  
    return res as Article[];
  }
}

export default new ArticleService()