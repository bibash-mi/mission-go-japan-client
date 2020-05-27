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

    getDistricts() {
        return [
            'Achham',
            'Arghakhanchi',
            'Baglung',
            'Baitadi',
            'Bajhang',
            'Bajura',
            'Banke',
            'Bara',
            'Bardiya',
            'Bhaktapur',
            'Bhojpur',
            'Chitwan',
            'Dadeldhura',
            'Dailekh',
            'Dang Deokhuri',
            'Darchula',
            'Dhading',
            'Dhankuta',
            'Dhanusa',
            'Dolakha',
            'Dolpa',
            'Doti',
            'Gorkha',
            'Gulmi',
            'Humla',
            'Ilam',
            'Jajarkot',
            'Jhapa',
            'Jumla',
            'Kailali',
            'Kalikot',
            'Kanchanpur',
            'Kapilvastu',
            'Kaski',
            'Kathmandu',
            'Kavrepalanchok',
            'Khotang',
            'Lalitpur',
            'Lamjung',
            'Mahottari',
            'Makwanpur',
            'Manang',
            'Morang',
            'Mugu',
            'Mustang',
            'Myagdi',
            'Nawalpur',
            'Nuwakot',
            'Okhaldhunga',
            'Palpa',
            'Panchthar',
            'Parbat',
            'Parsa',
            'Parasi',
            'Pyuthan',
            'Ramechhap',
            'Rasuwa',
            'Rautahat',
            'Rolpa',
            'East Rukum',
            'West Rukum',
            'Rupandehi',
            'Salyan',
            'Sankhuwasabha',
            'Saptari',
            'Sarlahi',
            'Sindhuli',
            'Sindhupalchok',
            'Siraha',
            'Solukhumbu',
            'Sunsari',
            'Surkhet',
            'Syangja',
            'Tanahu',
            'Taplejung',
            'Terhathum',
            'Udayapur'
        ]
    }

}
