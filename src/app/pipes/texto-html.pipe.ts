import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'textoHtml'
})
export class TextoHtmlPipe implements PipeTransform {

    transform(value: string, ...args: any[]): string {
        let newTexto = '';
        for (let i = 0; i < value.length; i++) {
            if (value.charCodeAt(i) === 10) {
                newTexto += ' <br> ';
            } else {
                newTexto += value.charAt(i);
            }
        }
        return newTexto;
    }

}
