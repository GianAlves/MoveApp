import { Component, Input, OnInit } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'mv-button',
    templateUrl: './mv-button.component.html',
    styleUrls: ['./mv-button.component.scss'],
})
export class MvButtonComponent implements OnInit {

    @Input() text = '';
    @Input() color = '';

    constructor() { }

    ngOnInit() { }

}
