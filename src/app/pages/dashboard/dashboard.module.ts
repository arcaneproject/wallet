import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import { TranslateModule } from '@ngx-translate/core'

import { ComponentsModule } from '../../components/components.module'

import { DashboardPage } from './dashboard'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    TranslateModule,
    RouterModule.forChild([{ path: '', component: DashboardPage }])
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
