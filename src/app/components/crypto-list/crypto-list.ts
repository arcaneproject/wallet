import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { DataService, DataServiceKey } from '../../services/data/data.service'
import { ReplaySubject } from 'rxjs'
import { AirGapMarketWallet } from '@bobo-wallet/coin-lib'
interface WalletGroup {
  mainWallet: AirGapMarketWallet
  subWallets: AirGapMarketWallet[]
}
@Component({
  selector: 'crypto-list',
  templateUrl: 'crypto-list.html',
  styleUrls: ['./crypto-list.scss']
})
export class CryptoListComponent {
  @Input() walletGroups: ReplaySubject<WalletGroup[]> = new ReplaySubject(1)

  public displayRawData: boolean = false

  constructor(private readonly router: Router, private readonly dataService: DataService) {}
  public openDetail(mainWallet: AirGapMarketWallet, subWallet?: AirGapMarketWallet) {
    const info = subWallet
      ? {
          mainWallet,
          wallet: subWallet
        }
      : {
          wallet: mainWallet
        }
    this.dataService.setData(DataServiceKey.WALLET, info)
    this.router.navigateByUrl('/account-transaction-list/' + DataServiceKey.WALLET).catch(console.error)
  }
}
