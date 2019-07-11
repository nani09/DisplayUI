
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
  paths = [[
  [{'imagePath':'assets/elephants/img1.jpg','imagePrice':'','offerPrice':'','imageName':''}],
  [{'imagePath':'assets/elephants/img2.jpg','imagePrice':'','offerPrice':'','imageName':''}],
  [{'imagePath':'assets/elephants/img3.jpg','imagePrice':'','offerPrice':'','imageName':''}],
  [{'imagePath':'assets/elephants/img4.jpeg','imagePrice':'','offerPrice':'','imageName':''}]],

  [[{'imagePath':'assets/giraffies/img1.jpg','imagePrice':'','offerPrice':'','imageName':''}],
  [{'imagePath':'assets/giraffies/img2.jpg','imagePrice':'','offerPrice':'','imageName':''}],
  [{'imagePath':'assets/giraffies/img3.png','imagePrice':'','offerPrice':'','imageName':''}],
  [{'imagePath':'assets/giraffies/img4.png','imagePrice':'','offerPrice':'','imageName':''}]]
]

  constructor(public dialog: MatDialog) {} 

  openDialog(event,i,j): void { 
    let pos = event.target.getBoundingClientRect();
    const filterData = {
      top : pos.top ,
      left : pos.left-pos.width/2,
      images : this.paths[i][j] 
      };
    let  dialogRef = this.dialog.open(DialogComponent, {
        width: `${pos.width*3}px`,
        height: `${pos.height*1.5}px`,
        data: filterData,
        hasBackdrop: false,
        panelClass: 'filter-popup'
      });
    dialogRef.afterClosed().subscribe(result => {
      this.paths[i][j].push(result);
      console.log(this.paths); 
    });
  }

}
