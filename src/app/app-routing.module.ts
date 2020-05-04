import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'accuiel', loadChildren: './pages/accuiel/accuiel.module#AccuielPageModule' },
  { path: 'donnor', loadChildren: './pages/donnor/donnor.module#DonnorPageModule' },
  { path: 'listechercheur', loadChildren: './pages/listechercheur/listechercheur.module#ListechercheurPageModule' },
  { path: 'listedonnor', loadChildren: './pages/listedonnor/listedonnor.module#ListedonnorPageModule' },
  { path: 'loginch', loadChildren: './pages/loginch/loginch.module#LoginchPageModule' },
  { path: 'logout', loadChildren: './pages/logout/logout.module#LogoutPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'partdonnor', loadChildren: './pages/partdonnor/partdonnor.module#PartdonnorPageModule' },
  { path: 'profil', loadChildren: './pages/profil/profil.module#ProfilPageModule' },
  { path: 'forgetpass', loadChildren: './pages/forgetpass/forgetpass.module#ForgetpassPageModule' },
  { path: 'centresong', loadChildren: './pages/centresong/centresong.module#CentresongPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
