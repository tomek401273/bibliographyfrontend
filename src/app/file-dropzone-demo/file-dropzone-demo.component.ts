import {Component, EventEmitter, Output, ViewChild} from '@angular/core';

// @ts-ignore
import {FilePickerDirective, ReadFile, ReadMode} from 'ngx-file-helpers';
import {UploadFileService} from '../upload/upload-file.service';
import {HttpEventType} from '@angular/common/http';

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

  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

constructor(private uploadService: UploadFileService) {}
  @Output() dataOutput = new EventEmitter<{file: File}>();

  @ViewChild('filePicker')
  private filePicker: FilePickerDirective;

  addFile(file: ReadFile) {
    // this.filesArray.push(file.underlyingFile);
    this.file = file.underlyingFile;
  }

  sendFile() {
    this.dataOutput.emit({
      file: this.file
    });


    // this.progress.percentage =0;
    // this.currentFileUpload = this.file;
    //
    // this.uploadService.pushFileToStorage(this.file)
    //   .subscribe(
    //     value => {
    //       console.log(value);
    //       if (value.type === HttpEventType.UploadProgress) {
    //         this.progress.percentage = Math.round(100 * value.loaded / value.total);
    //       } else {
    //         console.log('File is completely uploaded');
    //       }
    //     },
    //       error1 => console.log(error1));
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
