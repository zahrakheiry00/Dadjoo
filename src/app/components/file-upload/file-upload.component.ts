import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  file: any;
  public files: NgxFileDropEntry[] = [];

  constructor(private sanitizer: DomSanitizer, private snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {

  }

  public dropped(files: any) {

    this.files = files;
    for (const droppedFile of files) {

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          if (file.size < 3000000) {
            this.convertFile(file).then((base64: any) => {
              this.addFile(base64);
              this.file = this.sanitizer.bypassSecurityTrustResourceUrl(base64);
            });

            let fileReader: FileReader = new FileReader();
            let self = this;
            fileReader.onloadend = function (x) {

            }
            fileReader.readAsDataURL(file);
          }
          else {
            this.snackBar.open('حجم فایل ارسالی خارج از محدوده است', "", {
              duration: 3000,
            });
          }
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }

  convertFile(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  addFile(file: any) {
    const Url = 'http://127.0.0.1:5000/api/';
    const hdrs = new HttpHeaders({ 'Content-Type': 'application/json' });
    var inputJson = {
      desc: 'test',
      form_id: 1,
      file: file,
    }
    this.http.post(Url, inputJson, { headers: hdrs }).subscribe(res => {
      // console.log(res);
    });
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }

}
