import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMedicineInfo } from 'src/app/_models/IMedicineInfo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicineInfoService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFlixotide() {
    return this.http.get(this.baseUrl + 'medicineinfo/1');
  }

  getVentoline() {
    return this.http.get(this.baseUrl + 'medicineinfo/2');
  }

  resetFlixotide(flixInfo: IMedicineInfo): any {
    const response = this.http.put(`${this.baseUrl}medicineinfo/1`, flixInfo).subscribe((data) => {
      return data;
    });
    return response;
  }

  resetVentoline(venInfo: IMedicineInfo): any {
    const response = this.http.put(`${this.baseUrl}medicineinfo/2`, venInfo).subscribe((data) => {
      return data;
    });
    return response;
  }
}
