/// <reference path="../../typings/_custom.d.ts" />
import {Component, View} from "angular2/angular2";
import {FORM_DIRECTIVES} from "angular2/angular2";

@Component({
  selector: 'demo-form'
})

@View({
  directives: [FORM_DIRECTIVES],
  templateUrl: 'app/form/demo_form.tpl.html'
})

export class DemoForm {

  onSubmit(value) {
    console.log( value );
  }
}
