import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth_service/auth.service';
import { MyHttpService } from 'src/app/services/my_http_service/my-http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  frmSignUp!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  email!: FormControl;
  password!: FormControl;

  hasLoggedIn: boolean = false;

  constructor(
    public auth: AuthService, 
    private alertController: AlertController, 
    private http: MyHttpService
  ) { 

  }

  signUp() {
    if(this.frmSignUp.valid) {
      this.http.signUp(this.firstName.value, this.lastName.value, this.email.value, this.password.value).subscribe(
        (data: UserToken) => {
          this.frmSignUp.reset();
          this.hasLoggedIn = false;
          this.auth.logIn(data);
          this.frmSignUp.reset();
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

    if(this.firstName.hasError('required')) errors += "- Nombre: Requerido <br />";
    if(this.lastName.hasError('required')) errors += "- Apellidos: Requerido <br />";
    if(this.email.hasError('required')) errors += "- Correo: Requerido <br />";
    if(this.email.hasError('email')) errors += "- Correo: El correo es incorrecto <br />";
    if(this.password.hasError('required')) errors += "- Contraseña: Requerido <br />";
    if(this.password.hasError('minlength')) errors += "- Contraseña: Contraseña debe ser mínimo de 8 caracteres <br />";

    const alert = await this.alertController.create({
      header: 'Datos invalidos',
      message: errors,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
    this.firstName = new FormControl('', [
      Validators.required
    ]);
    this.lastName = new FormControl('', [
      Validators.required
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.password = new FormControl('', [
      Validators.required, 
      Validators.minLength(8)
    ]);
    
    this.frmSignUp = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });
  }

}
