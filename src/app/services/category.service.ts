import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../core/enums/api-paths';
import { Category } from '../core/enums/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  public getCategories(): Observable<Category[]> {
    return this.httpClient
      .get<Category[]>(`${this.baseUrl}${ApiPaths.Category}`)
      .pipe(catchError(this.handleError));
  }
}
