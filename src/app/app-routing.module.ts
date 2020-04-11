import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/admin/user/signin/signin.component';
import { AddProductComponent } from './components/admin/product/add-product/add-product.component';
import { EditProductComponent } from './components/admin/product/edit-product/edit-product.component';
import { ViewAllComponent } from './components/admin/product/view-all/view-all.component';
import { ViewProductComponent } from './components/admin/product/view-product/view-product.component';
import { AdminProfileComponent } from './components/admin/user/admin-profile/admin-profile.component';
import { EditUserComponent } from './components/admin/user/edit-user/edit-user.component';
import { SignupComponent } from './components/admin/user/signup/signup.component';
import { ViewUsersComponent } from './components/admin/user/view-users/view-users.component';
import { HomeComponent } from './components/public/home/home.component';
import { ProductComponent } from './components/public/product/product.component';
import { ShopComponent } from './components/public/shop/shop.component';
import { StoryComponent } from './components/public/story/story.component';
import { VisitComponent } from './components/public/visit/visit.component';

import { AuthGuard } from "./services/user/auth.guard";

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'visit', component: VisitComponent },
  { path: 'story', component: StoryComponent },
  { path: 'product/:id', component: ProductComponent },

  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminProfileComponent, canActivate: [AuthGuard] },
  { path: 'view-users', component: ViewUsersComponent, canActivate: [AuthGuard] },
  { path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard] },

  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'view-product/:id', component: ViewProductComponent, canActivate: [AuthGuard] },
  { path: 'edit-product/:id', component: EditProductComponent, canActivate: [AuthGuard] },
  { path: 'view-allproducts', component: ViewAllComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
