import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
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

  constructor(
    private http: MyHttpService,
    private alertController: AlertController,
    private router: Router
  ){
  }

  onBuyCourse() {
    this.http.buyCourse(this.course._id, this.course.price).subscribe(
      (data: Cart) => {
        this.router.navigate(['/courses/tabs/own_courses']);
      },
      (error: any) => {
        this.presentAlertCourse();
      }
    );
  }

  updateCourse() {
    console.log("updateCourse");
  }

  deleteCourse() {
    console.log("deleteCourse");
  }

  async presentAlertCourse() {

    const alert = await this.alertController.create({
      header: 'Ha ocurrido un error',
      message: 'El curso no se ha podido comprar',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {}

}
