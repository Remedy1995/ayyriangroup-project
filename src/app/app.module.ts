import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path : '', component : UsersComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
