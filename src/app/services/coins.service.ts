import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoinsResponse } from '../entities/coinsInterface';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  constructor(private http: HttpClient) {}

  url = 'https://api.coincap.io/v2/assets';

  fetchAllCoins() {
    return this.http.get<CoinsResponse>(this.url);
  }
}
