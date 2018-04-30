import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  form: FormGroup;

  constructor( public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA ) public data: any) {
      console.log(data);

      this.form = fb.group({
        'titulo': data.titulo,
        'desc': data.desc
      });
    }

  ngOnInit() {
  }

  guardarCambios() {
    this.dialogRef.close( this.form.value );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
