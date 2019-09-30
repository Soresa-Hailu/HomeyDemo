import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material';

@NgModule({
  exports: [ MatMenuModule, MatDialogModule ]
})
export class MatComponentsModule { }
