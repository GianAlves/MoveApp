import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'mv-input',
    templateUrl: './mv-input.component.html',
    styleUrls: ['./mv-input.component.scss'],
})
export class MvInputComponent implements OnInit {

    @Input() label = '';
    @Input() type = '';
    @Output() value = new EventEmitter<string>();

    inputForm!: FormGroup;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.inputForm = this.fb.group({
            field: ['']
        });
    }

    handleInput(event){
        this.value.emit(event.target.value);
    }

}
