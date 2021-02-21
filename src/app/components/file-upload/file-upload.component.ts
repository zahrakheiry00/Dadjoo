import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  file: any;
  public files: NgxFileDropEntry[] = [];
  name: any;

  constructor(private sanitizer: DomSanitizer, private snackBar: MatSnackBar, private http: HttpClient, private userService: UserService) { }

  ngOnInit() {

  }

  public dropped(files: any) {

    this.files = files;
    for (const droppedFile of files) {

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          if (file.size < 3000000) {
            this.name = file.name;
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
    const Url = 'http://127.0.0.1:5000/api/dadjoo_insert_file';
    const hdrs = new HttpHeaders({ 'Content-Type': 'application/json' });
    var inputJson = {
      filename: this.name,
      fileupload: file,
    }
    this.http.post(Url, { intext: JSON.stringify(inputJson) }, { headers: hdrs }).subscribe((res: any) => {
      this.userService.fileList.push({id:res.data,name:this.name});
      this.userService.fileTrigger$.next([]);
    });
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }

}
