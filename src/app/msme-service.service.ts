import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsmeServiceService {


  constructor(private http: HttpClient) {}
  
  private apiUrl = "https://api.data.gov.in/resource/6e737ceb-34a4-461d-b24d-56df99507bf1?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json";

  getMsmeData(): Observable<any> {
    
    return this.http.get<any>(this.apiUrl);
  }

}
