import { Component, OnInit, Input } from '@angular/core';
import { CoinsService } from '../services/coins.service';
import { CoinsInterface, CoinsResponse } from '../entities/coinsInterface';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
})
export class CoinsComponent implements OnInit {
  coins: CoinsInterface[] = [];
  coin: CoinsInterface | undefined;
  errorMessage = '';
  searchTerm: string = '';

  constructor(private coinsService: CoinsService) {}

  ngOnInit(): void {
    this.displayCoins();
  }

  selectCoin(coin: CoinsInterface) {
    this.coin = coin;
  }

  displayCoins() {
    this.coinsService.fetchAllCoins().subscribe({
      next: (response) => {
        this.coins = response.data;
      },
      error: (err) => (this.errorMessage = err),
      complete: () => {
        console.log(this.coins);
      },
    });
  }
}
