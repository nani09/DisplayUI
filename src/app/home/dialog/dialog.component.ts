import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { debug } from 'util';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  filterData: any; 
  lengthGraterThanOne: boolean = false;
  fileToUpload = {
  'imagePrice' : '',
  'offerPrice':'',
  'imageName' : '',
  'imagePath':''
  }
  ngOnInit() {
    this.filterData = this.data;
    this.dialogRef.updatePosition({ top: `${this.filterData.top}px`,
    left: `${this.filterData.left}px`});
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  handleFileInput(files: FileList) {
    let temp = {
      'imagePrice' : '',
      'offerPrice':'',
      'imageName' : '',
      'imagePath':''
      }
    temp['imagePath'] = 'assets/uploads/'+files.item(0).name;
    this.filterData.images.push(temp);
    this.fileToUpload = temp;
    this.lengthGraterThanOne = true;
}

}