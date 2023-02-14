import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth_service/auth.service';
import { MyHttpService } from 'src/app/services/my_http_service/my-http.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  frmLogIn!: FormGroup;
  email!: FormControl;
  password!: FormControl;
  hasLoggedIn: boolean = false;

  constructor(
    public auth: AuthService, 
    private alertController: AlertController, 
    private http: MyHttpService
  ) { 

  }

  logIn(): void {
    if(this.frmLogIn.valid){
      this.http.logIn(this.email.value, this.password.value).subscribe(
        (data: UserToken) => {
          console.log(data);
          this.auth.logIn(data);
        },
        (error: ApiError) => {
          this.hasLoggedIn = true;
        }
      );
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {

    let errors = "";

    if(this.email.hasError('required')) errors += "- Email: Requerido <br />";
    if(this.email.hasError('email')) errors += "- Email: El correo es incorrecto <br />";
    if(this.password.hasError('required')) errors += "- Password: Requerido <br />";
    if(this.password.hasError('minlength')) errors += "- Password: Contraseña debe ser mínimo de 8 caracteres <br />";

    const alert = await this.alertController.create({
      header: 'Datos invalidos',
      message: errors,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.password = new FormControl('', [
      Validators.required, 
      Validators.minLength(8)
    ]);
    
    this.frmLogIn = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

}
