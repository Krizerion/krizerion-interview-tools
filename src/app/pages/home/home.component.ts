import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'kit-app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss'],
  imports: [CardModule, ButtonModule],
})
export class HomeComponent {
  test(): void {
    console.log('test');
  }
}
