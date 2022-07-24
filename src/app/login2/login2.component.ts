import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, NgModel, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  data = {
    email: 'test@example.com',
    password: '1234',
    // city: 'Taipei',
    isRememberMe: true
  }

  orig_body_className = document.body.className;

  form = this.fb.group({
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    password: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(6), Validators.maxLength(32)]
    }),
    isRememberMe: this.fb.control(true, {
    }),

    profiles: this.fb.array([
      this.fb.group({
        city: this.fb.control('Taipei', { validators: [Validators.required]}),
        tel: this.fb.control('0900-000000', { validators: [Validators.required]}),
      }),
      this.fb.group({
        city: this.fb.control('Taichung', { validators: [Validators.required]}),
        tel: this.fb.control('0900-111111', { validators: [Validators.required]}),
      }),
    ])
  });

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }
  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    setTimeout(() => {
      // this.form.setValue(this.data);
      this.form.patchValue(this.data);
    }, 2000);
  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_className;
  }

  fc(name: string) {
    return this.form.get(name) as FormControl;
  }

  fg(name: string) {
    return this.form.get(name) as FormGroup;
  }

  fa(name: string) {
    return this.form.get(name) as FormArray;
  }

  resetForm() {
    this.form.reset(this.data);
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
