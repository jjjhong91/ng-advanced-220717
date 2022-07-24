import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  data: any = {
    email: null,
    password: null,
    isRememberMe: true
  }

  orig_body_className = document.body.className;
  form!: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_className;
  }

  login(form: NgForm) {

    if (form.valid) {
      localStorage.setItem('token', '123');
      var url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigateByUrl(url);
      this.router.navigate(['/'], {
        state: []
      });
    }
  }

  isInVaild(control: NgModel, form: NgForm) {
    return control.invalid && (control.touched || form.submitted);
  }

  isVaild(control: NgModel) {
    return control.valid;
  }

  disableField(control: NgModel) {
    if (control.disabled) {
      control.control.enable();
    }else {
      control.control.disable();
    }
  }

}
