import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class ConfigService {
    // private readonly apiRoot = isDevMode() ? "http://localhost:5000/api/v1/admin" : "https://api.fylo.com";
    private readonly apiRoot = isDevMode() ? "http://192.168.1.5:5000/api/v1/admin" : "https://api.fylo.com";

    getAPIRoot() {
        return this.apiRoot;
    }

}
