/// <reference path="../typings/_custom.d.ts" />
import {Component, View } from 'angular2/angular2';

import {DemoForm} from "./ts/demo_form";


import "./scss/styles.scss";

@Component({
  selector: 'app'
})

@View({
    directives: [DemoForm],
    templateUrl: './app/app.tpl.html'
})

export class App {

};
