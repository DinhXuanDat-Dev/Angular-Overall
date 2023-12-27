import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DetectLinkPipe } from "./pipes/detect-link.pipe";
import { DigitDecimalNumberDirective } from "./pipes/digit-decimal.pipe";
import { MatIconModule } from "@angular/material";

const PIPES = [
    DetectLinkPipe,
    DigitDecimalNumberDirective
];

// const DIRECTIVES = [

// ];

// const COMPONENTS = [

// ];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [
        ...PIPES,

    ],
    exports: [
        ...PIPES,
    ],

})
export class SharedModule { }