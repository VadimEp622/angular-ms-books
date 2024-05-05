import { Routes } from "@angular/router"
import { HomeComponent } from "./home.component"
import { homePageResolver } from "../../resolvers/home-page.resolver"

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: { booksByGenres: homePageResolver }
    }
]