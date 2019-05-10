import { Component } from '@angular/core';
import {UploadFileService} from './upload/upload-file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bibilography-frontend';
  constructor(private uploadService: UploadFileService) {}

  onServerAdded(serverData: {serverName: string}) {
    console.log('added1' + serverData.serverName);
  }

  onServerAdded2(serverData: {serverName: string}) {
    console.log('added2' + serverData.serverName);
  }

  getLogicM() {
    this.uploadService.getLogic();
  }

}
