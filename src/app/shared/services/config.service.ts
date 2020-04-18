
import { Injectable, isDevMode } from '@angular/core';

@Injectable({
    providedIn: "root"
})

export class ConfigService {
    private readonly apiRoot = isDevMode() ? "http://localhost:5000/api" : "https://mission-go-japan-backend.herokuapp.com/api";

    getAPIRoot() {
        return this.apiRoot;
    }

}