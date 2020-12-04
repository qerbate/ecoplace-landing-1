import {  BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { WhoComponent } from './who/who.component';
import { FeatureComponent } from './feature/feature.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { WhoPageComponent } from './who-page/who-page.component';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactStatComponent } from './contact-stat/contact-stat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { ChartsModule } from 'ng2-charts';
import {ModalModule} from 'ngx-bootstrap/modal';

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { NgxScrollTopModule } from 'ngx-scrolltop';

import { UserService } from './shared/user.service';
import { AuthGuard } from './auth/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AboutComponent,
    WhoComponent,
    FeatureComponent,
    ContactComponent,
    AddContactComponent,
    ContactDetailsComponent,
    EditContactComponent,
    ContactStatComponent,
    InfoComponent,
    FooterComponent,
    WhoPageComponent,
    FeaturePageComponent,
    ContactPageComponent,
    PaginaNaoEncontradaComponent,
    
   
  
   
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatStepperModule,
    ChartsModule,
    ModalModule.forRoot(),
    ScheduleModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
    NgxScrollTopModule
    
   
    
  ],
  providers: [AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
