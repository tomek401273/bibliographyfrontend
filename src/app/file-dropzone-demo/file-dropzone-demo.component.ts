import {Component, ViewChild} from '@angular/core';

import {FilePickerDirective, ReadFile, ReadMode} from 'ngx-file-helpers';

@Component({
  selector: 'app-file-dropzone-demo',
  templateUrl: './file-dropzone-demo.component.html',
  styleUrls: ['./file-dropzone-demo.component.css']
})
export class FileDropzoneDemoComponent {
  public readMode = ReadMode.dataURL;
  public isHover: boolean;
  public files: Array<ReadFile> = [];

  // public readMode = ReadMode.dataURL;
  public picked: ReadFile;
  public status: string;



  @ViewChild('filePicker')
  private filePicker: FilePickerDirective;

  addFile(file: ReadFile) {
    console.log('file file');
    console.log(file.name);
    this.files.push(file);
  }

  onReadStart(fileCount: number) {
    this.status = `Reading ${fileCount} file(s)...`;
  }

  onFilePicked(file: ReadFile) {
    this.picked = file;
  }

  onReadEnd(fileCount: number) {
    this.status = `Read ${fileCount} file(s) on ${new Date().toLocaleTimeString()}.`;
    this.filePicker.reset();
  }

}
