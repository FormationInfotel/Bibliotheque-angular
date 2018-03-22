import { DatePipe } from '@angular/common';
export interface BookVM {

ISBN: number;
book_title: string;
book_description: string;
book_price: number;
publication_date: string;
image_path: string;
popular_book: boolean;

book_authorId: number;
book_editorId: number;
book_categoryId: number;

}
