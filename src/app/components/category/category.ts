import { Component, Input } from '@angular/core'

@Component({
  selector: 'category',
  templateUrl: 'category.html',
  styleUrls: ['./category.scss']
})
export class CategoryComponent {
  @Input()
  public displayRawData: boolean = false
}
