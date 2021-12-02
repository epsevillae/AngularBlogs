import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'espar'
})
export class EsParPipe implements PipeTransform{
    transform(value:any){
        if(value%2==0){
            return "El año es par: "+value;
        }else{
            return "El año es impar: "+value;
        }
    }
}