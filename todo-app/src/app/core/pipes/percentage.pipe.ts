import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'percentage' })
export class PercentagePipe implements PipeTransform {

    private POSTFIX: string;    

    constructor() {        
        this.POSTFIX = '%';        
    }

    transform(value: number | string): string {
        if (value) {  
            return value + this.POSTFIX;
        }
        return '';
    }
}
