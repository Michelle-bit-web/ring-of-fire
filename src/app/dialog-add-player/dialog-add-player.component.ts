import { Component, Input } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    MatDialogModule,
    FormsModule
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent {
  name: string = '';

  onNoClick(){
    console.log('onNoclick() started')
  }
}
