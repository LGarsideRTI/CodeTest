import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Url } from "url";

export interface Launch {
    id: string;
    name: string;
    date_utc: Date;
    flight_number: number;
    details: string;
    links?: Link;
}

export interface Link{
    presskit?: string;
}