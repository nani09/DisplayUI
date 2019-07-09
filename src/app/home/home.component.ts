
import {Component,OnInit, ElementRef, ViewChild} from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
  }
  paths = [[{'path':['assets/elephants/img1.jpg'],'name':'img1'},{'path':['assets/elephants/img2.jpg'],'name':'img2'},{'path':['assets/elephants/img3.jpg'],'name':'img3'},{'path':['assets/elephants/img4.jpeg'],'name':'img4'}],
  [{'path':['assets/giraffies/img1.jpg'],'name':'img1'},{'path':['assets/giraffies/img2.jpg'],'name':'img2'},{'path':['assets/giraffies/img3.png'],'name':'img3'},{'path':['assets/giraffies/img4.png'],'name':'img4'}]]

  constructor(public dialog: MatDialog) {} 

  openDialog(event,path,i,j): void { 
    let pos = event.target.getBoundingClientRect();
    const filterData = {
      top : pos.top ,
      left : pos.left-pos.width/2,
      images : path 
      };
    let  dialogRef = this.dialog.open(DialogComponent, {
        width: `${pos.width*3}px`,
        height: `${pos.height*1.5}px`,
        data: filterData,
        hasBackdrop: false,
        panelClass: 'filter-popup'
      });
    dialogRef.afterClosed().subscribe(result => {
      this.paths[i][j]['path'].push('assets/uploads/'+result);
      console.log(this.paths); 
    });
  }

}
