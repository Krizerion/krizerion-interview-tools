import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kit-summary',
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {}
