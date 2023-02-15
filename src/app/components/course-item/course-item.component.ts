import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MyHttpService } from 'src/app/services/my_http_service/my-http.service';

@Component({
  standalone: true,
  imports: [ CommonModule ],
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CourseItemComponent implements OnInit {

  @Input() course!: Course;
  @Input('owner') isOwnCourse: boolean = false;
  @Input('buy') isBuyCourse: boolean = false;
  @Output() updateEmitter: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() refresh: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private http: MyHttpService,
    private alertController: AlertController,
    private router: Router
  ){
  }

  onBuyCourse() {
    this.http.buyCourse(this.course._id, this.course.price).subscribe(
      (data: Cart) => {
        this.refreshPage();
        this.router.navigate(['/courses/tabs/own_courses']);
      },
      (error: any) => {
        this.presentAlertCourse();
      }
    );
  }

  updateCourse() {
    this.updateEmitter.emit(this.course);
  }

  deleteCourse() {
    this.http.deleteCourse(this.course._id).subscribe(
      (data: Course) => {
        console.log(data);
        this.refreshPage();
      }, (error: ApiError) => {
        this.presentAlertDeleteCourse();
      }
    );
  }

  refreshPage() {
    this.refresh.emit();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Borrar!',
      message: '¿Estás seguro de que quieres borrar este curso?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete cancelled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.deleteCourse();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async presentAlertCourse() {

    const alert = await this.alertController.create({
      header: 'Ha ocurrido un error',
      message: 'El curso no se ha podido comprar',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertDeleteCourse() {

    const alert = await this.alertController.create({
      header: 'Ha ocurrido un error',
      message: 'El curso no se ha podido borrar',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {}

}
