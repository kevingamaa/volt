import { SimulacaoComponent } from './pages/simulacao/simulacao.component';
import { EscritoriosPersonalizadosComponent } from './pages/escritorios-personalizados/escritorios-personalizados.component';
import { PostComponent } from './pages/insights/post/post.component';
import { CaseComponent } from './pages/cases/case/case.component';
import { CoworkingComponent } from './pages/coworking/coworking.component';
import { CasesComponent } from './pages/cases/cases.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NosComponent } from './pages/nos/nos.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'nos', component: NosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'coworking', component: CoworkingComponent },
  { path: 'escritorios-personalizados', component: EscritoriosPersonalizadosComponent },
  { path: 'simulacao', component: SimulacaoComponent },

  { path: 'cases/case', component: CaseComponent },
  { path: 'insights/post', component: PostComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {

      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      enableTracing: false,
      useHash: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
