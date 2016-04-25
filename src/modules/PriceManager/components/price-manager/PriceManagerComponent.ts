
import "angular";
import {PriceService,PriceClass} from "../../service/PriceService";

class PriceManagerController{
    static $inject: Array<string> = [PriceService.$serviceName, '$scope'];
    protected test: string = 'Test over there.'; 
    protected items: Array<PriceClass> = []; 
    
    public clone(priceClass:PriceClass){
        this.items.push(priceClass);
    }
    
    public constructor (protected $priceService: PriceService, protected $scope: any){
        [this.items] = [$priceService.getPriceClasses()];
        
        
        // angular.extend($scope, this);
    }
}
export class PriceManagerComponent implements ng.IComponentOptions{
    public template: string = require('./PriceManagerComponent.html'); 
    public controller: Function = PriceManagerController;
}