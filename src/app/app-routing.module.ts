import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ListComponent as ListingListComponent} from './listing/list/list.component';
import { NewComponent as ListingNewComponent } from './listing/new/new.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "listing",
    component: ListingListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "new-listing",
    component: ListingNewComponent,
    canActivate: [AuthGuard]
  },{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
