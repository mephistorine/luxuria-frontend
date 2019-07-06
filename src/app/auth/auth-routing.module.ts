import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthContainerComponent
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }
