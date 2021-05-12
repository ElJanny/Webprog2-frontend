import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { ComponentModule } from './components/component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatmoduleModule } from './matmodule/matmodule.module';
import { HttpClientModule } from '@angular/common/http';
import { DndDirective } from './directives/dnd.directive';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    BrowserAnimationsModule,
    MatmoduleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
