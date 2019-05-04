// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import {DetailsUploadComponent} from './upload/details-upload/details-upload.component';
// import {FormUploadComponent} from './upload/form-upload/form-upload.component';
// import {ListUploadComponent} from './upload/list-upload/list-upload.component';
// import {UploadFileService} from './upload/upload-file.service';
// import {HttpClientModule} from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NgxFileHelpersModule} from 'ngx-file-helpers';
// import {FileDropzoneDemoComponent} from './file-dropzone-demo/file-dropzone-demo.component';
// import {FilePickerDemoComponent} from './file-picker-demo/file-picker-demo.component';
// import {FormsModule} from '@angular/forms';
// // import {MatCheckboxModule} from '@angular/material';
// // import {MatButtonModule} from '@angular/material/typings/button';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { FileHelpersModule } from 'ngx-file-helpers';

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
import {ListUploadComponent} from './upload/list-upload/list-upload.component';

@NgModule({
  // declarations: [
  //   AppComponent,
  //   DetailsUploadComponent,
  //   FormUploadComponent,
  //   ListUploadComponent
  // ],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,
  //   HttpClientModule,
  //   BrowserAnimationsModule,
  //   NgxFileHelpersModule,
  //
  // ],
  declarations: [
    AppComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    ReadModePipe,
    FilePickerDemoComponent,
    FileDropzoneDemoComponent
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
    FileHelpersModule
  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
