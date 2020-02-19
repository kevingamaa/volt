import { CustomStepperComponent } from './custom-stepper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
    declarations: [
        CustomStepperComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        CdkStepperModule
    ],
    exports: [
        CustomStepperComponent,
        CdkStepperModule
    ]
})
export class CustomStepperModule { }
