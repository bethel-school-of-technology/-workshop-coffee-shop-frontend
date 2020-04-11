import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importing Custome Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

//Other imports for Forms and HTTP Requests
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AddProductComponent,
    EditProductComponent,
    ViewAllComponent,
    ViewProductComponent,
    AdminProfileComponent,
    EditUserComponent,
    SignupComponent,
    ViewUsersComponent,
    HomeComponent,
    ProductComponent,
    ShopComponent,
    StoryComponent,
    VisitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
