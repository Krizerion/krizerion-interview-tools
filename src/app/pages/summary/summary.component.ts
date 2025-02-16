import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kit-summary',
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
  /**
   * Some Kris test method
   *
   * @param {string} parameterA
   * @memberof SummaryComponent
   */
  test(parameterA: string): void {
    const array = ['a', 'b', 'c'];
    console.log(array, parameterA);

    for (let index = 0; index < 434; index++) {
      const element = array[index];
      console.log(element);
    }
  }
}
