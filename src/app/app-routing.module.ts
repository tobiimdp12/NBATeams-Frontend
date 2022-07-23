import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { UserTeamComponent } from './components/user-team/user-team.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchPlayerComponent },
  { path: 'myteam', component: UserTeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'add-player', component: AddPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
