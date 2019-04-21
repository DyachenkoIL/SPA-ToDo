import { NgModule } from "@angular/core";
import { PercentagePipe } from "./pipes/percentage.pipe";
import { CustomNgIfDirective } from "./directives/custom-if.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PercentagePipe,
        CustomNgIfDirective
    ],
    exports: [
        PercentagePipe,
        CustomNgIfDirective
    ]
})
export class CoreModule { }