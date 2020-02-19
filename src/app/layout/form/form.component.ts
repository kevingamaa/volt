import { CmsService } from './../../services/cms.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup = this.fb.group({

    subject: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    company: ['', Validators.required],
    cel: ['', Validators.required],
    text: [''],
    msg: [''],
    to_email: ['contato@volt.site'],
    to_name: ['Volt - Lead'],
    cc_emails: [['gmarion@marketingmanager.com.br']],
  });

  public loading: boolean;
  public ok: boolean;

  constructor(private fb: FormBuilder, private Cms: CmsService) {

  }

  public template(data) {
    return `
        <p><strong>Empresa:</strong>${data.company}</p>
        <p><strong>Mensagem:</strong>${data.msg}</p>

    `;
  }



  public submitForm() {
    const data = this.form.value;
    data.text = this.template(data);
    this.loading = true;
    this.Cms.send(data).subscribe(response => {
      this.ok = true;
    }).add(() => this.loading = false);
   }

  ngOnInit() {
  }

}
