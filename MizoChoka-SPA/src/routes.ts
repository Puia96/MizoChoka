import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { EiturBuatsaihDanComponent } from './app/Eitur/EiturBuatsaihDan/EiturBuatsaihDan.component';
import { AuthGuard } from './app/_guards/auth.guard';
import { DahbelhnaComponent } from './app/Dahbelhna/Dahbelhna.component';
import { EiturDetailedComponent } from './app/Eitur/EiturBuatsaihDan/Eitur-detailed/Eitur-detailed.component';
import { EiturDetailResolver } from './app/_resolvers/eitur-detail.resolver';
import { EiturBuatsaihDan } from './app/_resolvers/EiturBuatsaihDan.resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'EiturBuatsaihDan', component: EiturBuatsaihDanComponent, 
            resolve: {users: EiturBuatsaihDan}},
            {path: 'EiturBuatsaihDan/:id', component: EiturDetailedComponent,
                resolve: {user: EiturDetailResolver}},
            {path: 'Dahbelhna', component: DahbelhnaComponent},
        ]
    },
      {path: '**', redirectTo: '', pathMatch: 'full'},
];
