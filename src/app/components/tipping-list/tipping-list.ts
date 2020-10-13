import { Component, Input } from '@angular/core'

@Component({
  selector: 'tipping-list',
  templateUrl: 'tipping-list.html',
  styleUrls: ['./tipping-list.scss']
})
export class TippingListComponent {
  @Input()
  public displayRawData: boolean = false
}
