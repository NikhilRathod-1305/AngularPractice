import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../common_components/dailogbox/confirm-delete/confirm-delete.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(){
    this.dialog.open(ConfirmDeleteComponent,{
      width:'390px',
      disableClose: true
    })
  }
}
