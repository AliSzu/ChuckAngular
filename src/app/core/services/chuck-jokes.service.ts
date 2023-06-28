import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ChuckJoke } from "../models/chuck-joke.model";

@Injectable({
    providedIn: 'root'
})

export class ChuckJokesService {
    constructor(private httpClient: HttpClient) {}


    getRandomJoke(name?: string): Observable<ChuckJoke> {
        return this.httpClient.request('GET', 'https://api.chucknorris.io/jokes/random', {params: {
            ...(name && { name: name }),
        }}) as Observable<ChuckJoke>
    }
}