import {BookCopyVM} from '../models/BookCopyVM';
import {categoryVM} from '../models/CategoryVM';
import {EditorVM} from '../models/EditorVM';
import {AuthorVM} from '../models/authorVM';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LibraryVM} from '../models/libraryVM';
import {MemberVM} from '../models/memberVM';
import {HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError, retry} from 'rxjs/operators';
import {IdentifiantsVM} from '../models/identifiantsVM';
import {ResearchVM} from '../models/researchVM';
import {BookVM} from '../models/bookVM';
import {MessageService} from './message.service';
import {BASE_URL} from '../app-constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class BackendService {

  private URL: string = BASE_URL;


  constructor(private http: HttpClient, private msService: MessageService) {}

  Login(identifiantsVm: IdentifiantsVM): Observable<any> {
    console.log(identifiantsVm);
    return this.http.post<IdentifiantsVM>(this.URL + 'login', identifiantsVm, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }


  getRecommendedBooks(): Observable<any> {
    return this.http.get<BookVM>(this.URL + 'recommendedbooks', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }



  getBooksByKeyword(keyword: any): Observable<any> {
    console.log('keyword');
    console.log(keyword);
    return this.http.post<any>(this.URL + 'resultat', keyword, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }



  getMembers(): Observable<any> {
    return this.http.get<MemberVM[]>(this.URL + 'member/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getLibrary(): Observable<any> {
    return this.http.get<LibraryVM[]>(this.URL + 'library/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  addBooks(bookVM: BookVM): Observable<any> {
    return this.http.put<BookVM[]>(this.URL + 'book/add', bookVM, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  updateBook(bookVM: BookVM): Observable<any> {
    console.log(bookVM);
    return this.http.post<any>(this.URL + 'book/update', bookVM, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  deleteBook(id: number): Observable<any> {
    console.log(id);
    return this.http.delete<any>(this.URL + 'book/delete/' + id, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getBooks(): Observable<any> {
    return this.http.get<BookVM[]>(this.URL + 'book/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getBookById(id): Observable<any> {
    return this.http.post<BookVM>(this.URL + 'book/getOne', id, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getMembre(id): Observable<any> {
    return this.http.post<MemberVM>(this.URL + 'member/getOne', id, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }


  getBookCopies(): Observable<any> {
    return this.http.get<BookCopyVM[]>(this.URL + 'bookcopy/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }
  getBorrows(): Observable<any> {
    return this.http.get<BookVM[]>(this.URL + 'borrow/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getAuthor(): Observable<any> {
    return this.http.get<AuthorVM>(this.URL + 'author/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getEditor(): Observable<any> {
    return this.http.get<EditorVM>(this.URL + 'editor/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getCategory(): Observable<any> {
    return this.http.get<categoryVM>(this.URL + 'category/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  newMember(memberVM: MemberVM): Observable<any> {
    return this.http.put<MemberVM>(this.URL + 'member/add', memberVM, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }

  handleData(data: any) {
    if (data.isSucces) {
      // resquest suceed in server
      console.log(data.message);
      this.msService.displaySuccessfullMessage(data.message);
    } else {
      console.error(data.message);
      this.msService.displayErrorMessage(data.message);
    }
  }
}
