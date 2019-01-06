import { BusinessComponent } from './business/business.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ServicesComponent} from './services/services.component';
import { DesignComponent } from './design/design.component';
import { NetworkComponent } from './network/network.component';
import { ProgramComponent } from './program/program.component';
import { ContactComponent } from './contact/contact.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },


  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'services', component: ServicesComponent,
    children: [
      {
        path: 'network',
        component: NetworkComponent
      },
      {
        path: 'design',
        component: DesignComponent
      },
      {
        path: 'program',
        component: ProgramComponent
      },
      {
        path: 'business',
        component: BusinessComponent
      }
    ]
  },
  { path: '**', component: ErrorComponent

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
