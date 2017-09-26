import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { MainComponent } from './components/main/main.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { DetailsComponent } from './components/vendor/details/details.component';
import { BasicDetailsComponent } from './components/vendor/basic-details/basic-details.component';
import { CompanyComponent } from './components/vendor/company/company.component';
import { EquipmentsComponent } from './components/vendor/equipments/equipments.component';

import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [
    {
        path: 'home',
        component: MainComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'registerVendor',
                component: RegisterComponent
            },
            {
                path: 'forgotPassword',
                component: ForgotPasswordComponent
            },
            {
                path: 'resetPassword?code&type&vendorId',
                component: ResetPasswordComponent
            },
            {
                path: 'confirmPassword?code&type&vendorId',
                component: ConfirmPasswordComponent
            },
            {
                path: '',
                redirectTo: '/home/login',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: '/home/login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'vendor',
        component: VendorComponent,
        canActivate: [AuthGaurdService],
        children: [
            {
                path: 'dashboard',
                component: LoginComponent
            },
            {
                path: 'details',
                component: DetailsComponent,
                children: [
                    {
                        path: 'user',
                        component: BasicDetailsComponent
                    },
                    {
                        path: 'company',
                        component: CompanyComponent
                    },
                    {
                        path: 'equipment',
                        component: EquipmentsComponent
                    },
                    {
                        path: '',
                        redirectTo: '/vendor/details/user',
                        pathMatch: 'full'
                    },
                    {
                        path: '**',
                        redirectTo: '/vendor/details/user',
                        pathMatch: 'full'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/vendor/details',
                pathMatch: 'full'
            },
            {
                path: '**',
                component: LoginComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: MainComponent
    }
];

// { enableTracing: true }

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})

export class AppRoutingModule {
}
