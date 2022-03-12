/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private email: string = '';
    private password: string = '';
    loginIsCorrect: boolean = false;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {}

    login(){
        console.log(`email: ${this.email} e senha ${this.password}`);
    }

    setEmail(value){
        this.email = value;
        this.email && this.password ? this.loginIsCorrect = true : this.loginIsCorrect = false;
    }

    setPassword(value){
        this.password = value;
        this.email && this.password ? this.loginIsCorrect = true : this.loginIsCorrect = false;
    }

}
