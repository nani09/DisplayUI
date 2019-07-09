import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  filterData: any; 
  
  ngOnInit() {
    this.filterData = this.data;
    this.dialogRef.updatePosition({ top: `${this.filterData.top}px`,
    left: `${this.filterData.left}px`});
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}