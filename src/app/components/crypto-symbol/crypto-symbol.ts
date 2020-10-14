import { Component, Input } from '@angular/core'

@Component({
  selector: 'crypto-symbol',
  templateUrl: 'crypto-symbol.html'
})
export class CryptoSymbolComponent {
  @Input()
  public readonly symbol: string

  public symbolURL: string = './assets/symbols/generic-coin.svg'

  constructor() {
    /* */
  }

  public ngAfterViewInit() {
    this.loadImage()
  }

  public ngOnChanges() {
    this.loadImage()
  }

  public loadImage() {
    const imageUrl = './assets/symbols/' + this.symbol.toLowerCase() + '.svg'
    const img = new Image()
    img.onload = () => {
      this.symbolURL = imageUrl
    }
    img.src = imageUrl
  }
}
