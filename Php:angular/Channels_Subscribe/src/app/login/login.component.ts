import { Component } from '@angular/core';
import { Author } from '../models/person';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../service/person.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    name : string = "";
    type : string = "document";
    identifier : string = "";
    error : string = "";

    constructor(private router: ActivatedRoute, 
      private userService : PersonService) {}
    
    logIn() : void {
      console.log(this.name);
      if(this.name == "" || this.identifier == "")
          this.error = "Fill in all fields";
      else {
        this.error = "";
        this.userService.authentication(this.name, this.type, this.identifier)
        .subscribe(msg => {
          if(msg == -1)
            this.error = "wrong info";
          else
            window.location.replace('details/' + msg);
        });
      }
    }
    

}
