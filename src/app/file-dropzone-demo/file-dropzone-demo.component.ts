import {Component, ViewChild} from '@angular/core';

// @ts-ignore
import {FilePickerDirective, ReadFile, ReadMode} from 'ngx-file-helpers';
import {UploadFileService} from '../upload/upload-file.service';

@Component({
  selector: 'app-file-dropzone-demo',
  templateUrl: './file-dropzone-demo.component.html',
  styleUrls: ['./file-dropzone-demo.component.css']
})
export class FileDropzoneDemoComponent {
  public readMode = ReadMode.dataURL;
  public isHover: boolean;
  public files: Array<ReadFile> = [];
  public filesArray: Array<File> = [];
  public file: File;

  // public readMode = ReadMode.dataURL;
  public picked: ReadFile;
  public status: string;

constructor(private uploadService: UploadFileService) {}

  @ViewChild('filePicker')
  private filePicker: FilePickerDirective;

  addFile(file: ReadFile) {
    // this.filesArray.push(file.underlyingFile);
    this.file = file.underlyingFile;
  }

  sendFile() {
    this.uploadService.pushFileToStorage(this.file)
      .subscribe(
        value => console.log(value),
          error1 => console.log(error1));
  }


  onReadStart(fileCount: number) {
    this.status = `Reading ${fileCount} file(s)...`;
  }

  onFilePicked(file: ReadFile) {
    this.file = file.underlyingFile;
  }

  onReadEnd(fileCount: number) {
    this.status = `Read ${fileCount} file(s) on ${new Date().toLocaleTimeString()}.`;
    this.filePicker.reset();
  }



}
