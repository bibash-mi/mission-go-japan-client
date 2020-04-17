
import { Injectable, isDevMode } from '@angular/core';

@Injectable({
    providedIn: "root"
})

export class ConfigService {
    private readonly apiRoot = isDevMode() ? "http://localhost:5000/api" : "https://api.missiongojapan.com";
    // private readonly apiRoot = isDevMode() ? "http://192.168.1.5:5000/api/v1/admin" : "https://api.missiongojapan.com";

    getAPIRoot() {
        return this.apiRoot;
    }

}