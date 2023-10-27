import { Component, Input } from '@angular/core';
import { CoinsInterface } from '../entities/coinsInterface';

@Component({
  selector: 'app-coins-modal',
  templateUrl: './coins-modal.component.html',
  styleUrls: ['./coins-modal.component.css'],
})
export class CoinsModalComponent {
  @Input() coin: CoinsInterface | undefined;
}
