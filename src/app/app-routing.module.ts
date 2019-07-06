import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
