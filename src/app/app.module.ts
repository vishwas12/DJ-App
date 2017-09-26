import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { AllMaterialModulesModule } from './all-material-modules/all-material-modules.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/Shared/components/header/header.component';
import { FooterComponent } from './components/Shared/components/footer/footer.component';
import { ContactUsComponent } from './components/Shared/components/contact-us/contact-us.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';

import { RequestInterceptorService } from './services/request-interceptor.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { VendorApiserviceService } from './services/vendor-apiservice.service';
import { OauthApiServiceService } from './services/oauth-api-service.service';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { AuthenticationService } from './services/authentication.service';
import { UtilityApiServiceService } from './services/utility-api-service.service';
import { CategoryModule } from './modules/category/category.module';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { MainComponent } from './components/main/main.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { DetailsComponent } from './components/vendor/details/details.component';
import { BasicDetailsComponent } from './components/vendor/basic-details/basic-details.component';
import { CompanyComponent } from './components/vendor/company/company.component';
import { EquipmentsComponent } from './components/vendor/equipments/equipments.component';
import { VendorHeaderComponent } from './components/Shared/components/vendor-header/vendor-header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ConfirmPasswordComponent,
    MainComponent,
    VendorComponent,
    DetailsComponent,
    BasicDetailsComponent,
    CompanyComponent,
    EquipmentsComponent,
    VendorHeaderComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AllMaterialModulesModule,
    CategoryModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptorService,
    multi: true
  }, VendorApiserviceService, OauthApiServiceService, AuthenticationService, UtilityApiServiceService, AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
