import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { EiturBuatsaihDanComponent } from './app/EiturBuatsaihDan/EiturBuatsaihDan.component';
import { AuthGuard } from './app/_guards/auth.guard';
import { DahbelhnaComponent } from './app/Dahbelhna/Dahbelhna.component';

export const appRoutes: Routes = [
    {path: '', component: EiturBuatsaihDanComponent },
    {path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'Dahbelhna', component: DahbelhnaComponent},
        ]
    },
      {path: '**', redirectTo: '', pathMatch: 'full'},
];
