import {DatePipe} from '@angular/common';
export interface BookVM {

  isbn: number;
  book_title: string;
  book_description: string;
  book_price: number;
  publication_date: string;
  image_path: string;
  popular_book: boolean;
  author_lastname: string;
  author_firstname: string;
  editor_name: string;
  category_name: string;

  listCopy: number[];

  book_authorId: number;
  book_editorId: number;
  book_categoryId: number;

}
