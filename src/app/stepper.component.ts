import { Component } from '@angular/core';

@Component({
    selector: 'stepper-component',
    template: `
        <kendo-stepper
            [steps]="steps"
            stepType="full"
            [(currentStep)]="current"
            [linear]="false"
            [style.width.px]="570">
        </kendo-stepper>
    `
})
export class StepperComponent {
    public current = 1;

    public steps = [
        { label: 'Personal Info', icon: 'user' },
        { label: 'Education', icon: 'dictionary-add' },
        { label: 'Attachments', icon: 'attachment', optional : true },
        { label: 'Preview', icon: 'preview' },
        { label: 'Submit', icon: 'file-add' }
    ];
}
