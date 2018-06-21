import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
import { RecipeService } from './recipes/recipe.service';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataStorageService } from './shared/data-storage.service';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
  ],
  providers: [
    ShoppingListService,
    AuthService,
    AuthGuard,
    RecipeService,
    DataStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
