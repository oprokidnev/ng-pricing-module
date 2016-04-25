
import "angular";

export class RangeValidator implements ng.IDirective {
    public static $inject = [];
    public require = 'ngModel';
    public 
    public scope = {
      rangeValidator: '='
    };
    
    public link(scope, elm, attrs, ngModelCtrl:ng.INgModelController){
        
        ngModelCtrl.$validators['RangeValidator'] = (modelValue, viewValue):boolean => {
            console.log(modelValue >= scope.rangeValidator);
             return modelValue >= scope.rangeValidator;
        }
    }
    
    construct(){
        
    }
}

export function RangeValidatorFactory(){
    return new RangeValidator;
}