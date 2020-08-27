import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './auth.guard';
import {viewpropertyModule } from './views/viewproperty/viewproperty.module'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'allUsers',
        loadChildren: './views/user/user.module#UserModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'property',
        loadChildren: './views/property/property.module#PropertyModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'editproperty/:id',
        loadChildren: './views/editproperty/editproperty.module#EditpropertyModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'category',
        loadChildren: './views/category/category.module#CategoryModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'categorydetails/:categoryId',
        loadChildren: './views/sub-category/sub-category.module#SubCategoryModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'marketing',
        loadChildren: './views/marketing/marketing.module#MarketingModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'content',
        loadChildren: './views/content/content.module#ContentModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'changepassword',
        loadChildren: './views/change-pwd/change-pwd.module#ChangePwdModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'subadmin',
        loadChildren: './views/subadmin/subadmin.module#SubAdminModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'currency',
        loadChildren: './views/currency/currency.module#CurrencyModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'language',
        loadChildren: './views/language-management/language.module#LanguageModule',
        canActivate: [AuthGuard]  
      },
      {
        path: 'viewproperty/:propertyId',
        loadChildren: './views/viewproperty/viewproperty.module#viewpropertyModule',
        canActivate: [AuthGuard]  
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
