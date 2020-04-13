import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";

@Injectable({
    providedIn: "root"
})
export class HelperService {

    constructor() { }

    timestampToDateTime(date) {
        return moment.unix(date).format('MMM Do YYYY, h:mm a');
    }

    timestampToDate(date) {
        return moment.unix(date).format('MMM Do YYYY');
    }

    formatDateTime(date) {
        return moment(date).format('MMM Do YYYY, h:mm a');
    }

    formatDate(date) {
        return moment(date).format('MMM Do YYYY');
    }

    formatUpperCase(value: string) {
        return value.toUpperCase();
    }

    formatLowerCase(value: string) {
        return value.toLowerCase();
    }

    formatPrice(value: any, currency: string) {
        if (parseInt(value) != 0) {
            value = parseInt(value) / 100;
        }
        return value.toLocaleString("en-US", {
            style: "currency",
            currency: currency
        });
    }

}
