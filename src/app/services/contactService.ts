import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class contactService {
  private apiUrl = 'https://localhost:7073/api/Email';

  constructor(private http: HttpClient) {}

  public updateData(contactData: Object): Observable<Object> {
    console.log(contactData);
    return this.http.post<Object>(this.apiUrl, contactData);
  }
}
