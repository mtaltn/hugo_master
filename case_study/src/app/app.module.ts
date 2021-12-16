import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AddOrderComponent } from './add-order/add-order.component';
import { RemoveOrderComponent } from './remove-order/remove-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { SearchFilterPipe } from './order/search-filter.pipe';






const routes :Routes=[
  {path:"orders",component:OrderComponent},
  {path:"",redirectTo:"orders",pathMatch:"full"},
  {path:"tek",component:OrderComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    NavbarComponent,
    AddOrderComponent,
    RemoveOrderComponent,
    EditOrderComponent,
    SearchFilterPipe,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddOrderComponent]
})
export class AppModule { }
