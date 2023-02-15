import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { MyHttpService } from 'src/app/services/my_http_service/my-http.service';

@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.page.html',
  styleUrls: ['./work-space.page.scss'],
})
export class WorkSpacePage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  frmCourse!: FormGroup;
  name!: FormControl;
  description!: FormControl;
  price!: FormControl;

  courses!: Course[];

  constructor(
    private alertController: AlertController,
    private http: MyHttpService
  ){
    this.courses = [];
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    if(this.frmCourse.valid) {
      this.modal.dismiss(this.frmCourse.value, 'confirm');
    } else {
      this.presentAlert();
    }
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.http.createCourse(this.name.value, this.description.value, this.price.value).subscribe(
        (data: Course) => {
          console.log(data);
        },
        (error: any) => {
          this.presentAlertCourse();
        }
      );
      
      this.http.getCoursesWorkSpace().subscribe(
        (data: Course[]) => {
          this.courses = data;
        }
      );

      this.frmCourse.reset();
    }
  }

  async presentAlert() {

    let errors = "";

    if(this.name.hasError('required')) errors += "- Nombre del curso: Requerido <br />";
    if(this.description.hasError('required')) errors += "- Descripción: Requerido <br />";
    if(this.price.hasError('required')) errors += "- Precio: Requerido <br />";
    if(this.price.hasError('min')) errors += "- Precio: No puede ser negativo <br />";
    if(this.price.hasError('patern')) errors += "- Precio: Tiene que ser un número decimal <br />";

    const alert = await this.alertController.create({
      header: 'Datos invalidos',
      message: errors,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertCourse() {

    const alert = await this.alertController.create({
      header: 'Ha ocurrido un error',
      message: 'El curso no se ha podido crear',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
    this.name = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.price = new FormControl('', [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]);

    this.frmCourse = new FormGroup({
      name: this.name,
      description: this.description,
      price: this.price
    });

    this.http.getCoursesWorkSpace().subscribe(
      (data: Course[]) => {
        this.courses = data;
      }
    );
  }

}
