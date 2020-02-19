import { Component, OnInit, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
    selector: 'app-custom-stepper',
    templateUrl: './custom-stepper.component.html',
    styleUrls: ['./custom-stepper.component.scss'],
    providers: [
        {
            provide: CdkStepper,
            useExisting: CustomStepperComponent
        }
    ]
})
export class CustomStepperComponent extends CdkStepper {
    @Input() public navigation = true;
    onClick(index: number): void {
        this.selectedIndex = index;
        // console.log(this.steps.length)
    }

    test(ind): void {
        console.log(this.steps.length, this.selectedIndex);
    }
}
