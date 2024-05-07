import { Routes } from "@angular/router"
import { BookIndexComponent } from "./book-index/book-index.component"
import { bookIndexResolver } from "../../resolvers/book-index.resolver"
import { BookDetailsComponent } from "./book-details/book-details.component"


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'genre/love',
        pathMatch: 'full'
    },
    {
        path: 'genre/:genre',
        component: BookIndexComponent,
        resolve: { booksByGenre: bookIndexResolver }
    },
    {
        path: 'works/:id',
        component: BookDetailsComponent,
        // resolve: { book: bookDetailsResolver }
    }
]