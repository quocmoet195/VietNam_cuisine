import { Routes } from '@angular/router';
import { SouthComponent } from './components/south/south.component';
import { CentralComponent } from './components/central/central.component';
import { NorthComponent } from './components/north/north.component';
import { IndexComponent } from './components/index/index.component';

export const routes: Routes = [
    { path: 'north', component: NorthComponent },
    { path: 'central', component: CentralComponent },
    { path: 'south', component: SouthComponent },
    { path: 'index', component: IndexComponent },
];
