import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class DashboardService {
    private apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = 'http://localhost:4200/api/values';
    }

    get(): Observable<string[]> {
      return this.http.get<string[]>(this.apiUrl);
    }
}