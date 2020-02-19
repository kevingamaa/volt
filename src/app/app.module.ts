import { CustomStepperModule } from './layout/custom-stepper/custom-stepper.module';
import { CmsService } from './services/cms.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HelperService } from './services/helper.service';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NosComponent } from './pages/nos/nos.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { CasesComponent } from './pages/cases/cases.component';
import { CaseComponent } from './pages/cases/case/case.component';
import { CoworkingComponent } from './pages/coworking/coworking.component';
import { PostComponent } from './pages/insights/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './layout/form/form.component';
import { BannerComponent } from './layout/banner/banner.component';
import { EscritoriosPersonalizadosComponent } from './pages/escritorios-personalizados/escritorios-personalizados.component';
import { SimulacaoComponent } from './pages/simulacao/simulacao.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent,
    NosComponent,
    InsightsComponent,
    CasesComponent,
    CaseComponent,
    CoworkingComponent,
    PostComponent,
    FormComponent,
    BannerComponent,
    EscritoriosPersonalizadosComponent,
    SimulacaoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    CustomStepperModule,
    HttpClientModule
    // FormsModule,
    // FormBuilder,
    // FormGroup,
    // FormControl

  ],
  providers: [HelperService, CmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
