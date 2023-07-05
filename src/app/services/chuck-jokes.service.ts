import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, forkJoin, throwError } from "rxjs";
import { ChuckJoke } from "../core/models/chuck-joke.model";
import { environment } from "src/environments/environment";
import { ApiPaths } from "../core/enums/api-paths";

@Injectable({
    providedIn: 'root'
})

export class ChuckJokesService {
    private baseUrl = environment.baseUrl;

    constructor(private httpClient: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
        return throwError(() => error)
    }

    public getRandomJoke(name?: string, category?: string): Observable<ChuckJoke> {
        return this.httpClient.get<ChuckJoke>(`${this.baseUrl}${ApiPaths.Random}` , {params: {
            ...(name && { name: name }),
            ...(category && { category: category})
        }}).pipe(
            catchError(this.handleError)
        ) 
    }

    public downloadJokes(value: number, category?: string, name?: string): Observable<ChuckJoke[]> {
        const requests = Array.from({length: value}, () => this.getRandomJoke(category, name));
        return forkJoin(requests).pipe(catchError(this.handleError))
    }
}