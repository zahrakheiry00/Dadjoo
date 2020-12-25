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

  constructor(private sanitizer: DomSanitizer, private snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {

  }

  public dropped(files: any) {
    var validFormat = ['pdf', 'zip'];
    if (validFormat.includes(files[0].fileEntry.name.split('.')[files[0].fileEntry.name.split('.').length - 1])) {

      this.files = files;
      for (const droppedFile of files) {

        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            if (file.size < 3000000) {
              let formData = new FormData();
              formData.append('file', file);
              this.changeFile(file).then((base64: any) => {
                this.addFile(base64);
                this.file = this.sanitizer.bypassSecurityTrustResourceUrl(base64);
              });

              let fileReader: FileReader = new FileReader();
              let self = this;
              fileReader.onloadend = function (x) {
                //self.imageURL = fileReader.result;
                //self.changeStyle();
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
          //console.log(droppedFile.relativePath, fileEntry);
        }
      }
    }
    else {
      this.snackBar.open('فرمت فایل ورودی اشتباه است', "", {
        duration: 3000,
      });
    }
  }

  changeFile(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  addFile(file: any) {
    console.log(file);

    const Url = 'http://127.0.0.1:5000/api/addFormFile';
    const hdrs = new HttpHeaders({ 'Content-Type': 'application/json' });
    var inputJson = {
      desc: 'formImg',
      form_id: 1,
      file: file,
    }
    this.http.post(Url, inputJson,{ headers: hdrs }).subscribe(res=>{
      console.log(res);
    });
    // let paramsHandler = new ParamsHandler();
    // var inputJson = JSON.stringify({
    //   desc: 'formImg',
    //   form_id: this.formID,
    //   file: file,
    // })
    // paramsHandler.addParam("data", inputJson);
    // this.formService.addSubmitFile(paramsHandler).subscribe(res => {
    //   if (res.status == 0) {
    //     this.value = res.data;
    //     this.changeStyle();
    //     // this.dialogRef.close(1);
    //   }
    //   if (res.status == -1) {
    //     // this._snackBar.open(res.data, null, {
    //     //     duration: 3000,
    //     //   });
    //   }
    //   if (res.status == -2) {
    //     //localStorage.removeItem('token');
    //   }
    // })
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }

}
