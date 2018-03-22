
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

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class BackendService {

  constructor(private http: HttpClient, private msService: MessageService) {}

  Login(identifiantsVm: IdentifiantsVM): Observable<any> {
    console.log(identifiantsVm);
    return this.http.post<IdentifiantsVM>('http://localhost:8080/ProjetFinal/login', identifiantsVm, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }


    getRecommendedBooks(): Observable<any> {
    return this.http.get<BookVM>('http://localhost:8080/ProjetFinal/recommendedbooks', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getMember(): Observable<any> {
    return this.http.get<MemberVM>('http://localhost:8080/ProjetFinal/member/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getLibrary(): Observable<any> {
    return this.http.get<LibraryVM[]>('http://localhost:8080/ProjetFinal/library/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  addBooks(bookVM: BookVM): Observable<any> {
    return this.http.put<BookVM[]>('http://localhost:8080/ProjetFinal/book/add', bookVM, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getBooks(): Observable<any> {
    return this.http.get<BookVM[]>('http://localhost:8080/ProjetFinal/book/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getAuthor(): Observable<any> {
    return this.http.get<AuthorVM>('http://localhost:8080/ProjetFinal/author/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getEditor(): Observable<any> {
    return this.http.get<EditorVM>('http://localhost:8080/ProjetFinal/editor/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  getCategory(): Observable<any> {
    return this.http.get<categoryVM>('http://localhost:8080/ProjetFinal/category/get', httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  newMember(memberVM: MemberVM): Observable<any> {
    return this.http.put<MemberVM>('http://localhost:8080/ProjetFinal/member/add', memberVM, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  Research(researchVM: ResearchVM): Observable<any> {
    console.log(researchVM + 'researchVM');
    console.log('keyword' + researchVM.keyword);
    return this.http.post<BookVM>('http://localhost:8080/ProjetFinal/research/' + researchVM.keyword, httpOptions)
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
