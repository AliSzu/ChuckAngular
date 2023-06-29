import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { ChuckJoke } from "../models/chuck-joke.model";
import { environment } from "src/environments/environment";
import { ApiPaths } from "../enums/api-paths";

@Injectable({
    providedIn: 'root'
})

export class ChuckJokesService {
    private baseUrl = environment.baseUrl;

    constructor(private httpClient: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
        return throwError(() => error)
    }

    public getRandomJoke(name?: string): Observable<ChuckJoke> {
        return this.httpClient.request<ChuckJoke>('GET', `${this.baseUrl}${ApiPaths.Random}` , {params: {
            ...(name && { name: name }),
        }}).pipe(
            catchError(this.handleError)
        ) 
    }
}