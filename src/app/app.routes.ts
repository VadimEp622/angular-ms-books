import { Routes } from '@angular/router'
import { DynamicLayoutComponent } from './layout/dynamic-layout/dynamic-layout.component'

export const routes: Routes = [
    {
        path: '',
        title: 'home',
        pathMatch: 'full',
        component: DynamicLayoutComponent,
        loadChildren: () => import('./pages/home/home.routes').then(m => m.routes)
    },
    {
        path: 'book',
        title: 'book',
        component: DynamicLayoutComponent,
        loadChildren: () => import('./pages/book/book.routes').then(m => m.routes)
    },
    {
        path: 'about',
        title: 'about',
        component: DynamicLayoutComponent,
        loadChildren: () => import('./pages/about/about.routes').then(m => m.routes)
    },
    {
        path: '**',
        title: 'error',
        component: DynamicLayoutComponent,
        loadChildren: () => import('./pages/error/error.routes').then(m => m.routes)
    }
]
