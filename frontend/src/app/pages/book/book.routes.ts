import { Routes } from "@angular/router"
import { BookIndexComponent } from "./book-index/book-index.component"
import { bookIndexResolver } from "../../resolvers/book-index.resolver"

export const routes: Routes = [
    {
        path: '',
        component: BookIndexComponent,
        resolve: { booksByGenres: bookIndexResolver }
    }
]