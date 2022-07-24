import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, NgForm, NgModel, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  data = {
    email: 'test@example.com',
    password: '1234',
    isRememberMe: true
  }

  orig_body_className = document.body.className;
  form = this.fb.group(this.data);

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }
  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_className;
  }

  // login(form: NgForm) {

  //   if (form.valid) {
  //     localStorage.setItem('token', '123');
  //     var url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  //     this.router.navigateByUrl(url);
  //     this.router.navigate(['/'], {
  //       state: []
  //     });
  //   }
  // }

  isInVaild(control: NgModel, form: NgForm) {
    return control.invalid && (control.touched || form.submitted);
  }

  isVaild(control: NgModel) {
    return control.valid;
  }

  // disableField(control: NgModel) {
  //   if (control.disabled) {
  //     control.control.enable();
  //   }else {
  //     control.control.disable();
  //   }
  // }

}
