import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestComponent } from './test/test.component';

import { MaterialModule } from "./material/material.module";
import { TableComponent } from './table/table.component';
import { TestingPipe } from './testing.pipe';

import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'table',
    children: [{
      path: 'test',
      component: TestComponent
    },
    {
      path: 'profile-editor',
      component: ProfileEditorComponent,
      pathMatch: 'full'
    },
    { path: '', component: TableComponent }
    ]
  }
  // { path: 'test', component: TestComponent },
  // { path: 'profile-editor', component: ProfileEditorComponent },
  // { path: '', redirectTo: '/table', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    TestComponent,
    TableComponent,
    TestingPipe,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
