import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { ReadModePipe } from './read-mode.pipe';
import { FilePickerDemoComponent } from './file-picker-demo/file-picker-demo.component';
import { FileDropzoneDemoComponent } from './file-dropzone-demo/file-dropzone-demo.component';
import {FileHelpersModule} from 'ngx-file-helpers';
import {UploadFileService} from './upload/upload-file.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {DetailsUploadComponent} from './upload/details-upload/details-upload.component';
import {FormUploadComponent} from './upload/form-upload/form-upload.component';
import { InformationComponent } from './information/information.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {AuthGuard} from './services/protect/auth-guard.service';
import { SecuredComponent } from './secured/secured.component';
import {LogingService} from './services/loging.service';
import { CockpitComponent } from './cockpit/cockpit.component';
import { SummaryComponent } from './summary/summary.component';
import {MatTableModule} from '@angular/material/table';
import { PublicationsComponent } from './summary/publications/publications.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import {AdminService} from './services/adminService';
import { AdminInformationComponent } from './admin/admin-information/admin-information.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ReadModePipe,
    FilePickerDemoComponent,
    FileDropzoneDemoComponent,
    InformationComponent,
    HeaderComponent,
    HomeComponent,
    AuthenticationComponent,
    SecuredComponent,
    CockpitComponent,
    SummaryComponent,
    PublicationsComponent,
    AdminInformationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    FileHelpersModule,
    MatTableModule,
    PlotlyModule
  ],
  providers: [UploadFileService, AuthGuard, LogingService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
