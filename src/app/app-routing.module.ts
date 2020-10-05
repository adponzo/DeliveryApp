import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
     canActivate: [AuthGuard]  // - se quiser bloquear tudo coloco isso
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./users/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./users/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  }
 // {
 //   path: 'shopping-cart',
 //   loadChildren: () => import('./cardapio/shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
 // }
 // {
 //   path: 'cardapio-list',
 //   loadChildren: () => import('./cardapio/cardapio-list/cardapio-list.module').then( m => m.CardapioListPageModule)
 // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
