
import "angular";
import {PriceService,PriceClass,PriceRange} from "../../service/PriceService";

class PriceManagerController{
    static $inject: Array<string> = ['$scope'];
    protected test: string = 'Test over there.'; 
    protected priceClass:PriceClass;
    public onClone: Function;
    public newRange:PriceRange = <PriceRange>{
        from:0,
        to:0,
        prices:[],
    }
    protected populateNewRange(){
        this.newRange = angular.copy(this.newRange);
        let from = 0;
        let to = 0;
        this.priceClass.ranges.forEach(element => {
            from = Math.max(from, element.from);
            to = Math.max(to, element.to);
        });
        
        [this.newRange.from,this.newRange.to] = [to+1,to+10];
    }
    
    public constructor (protected $scope: any){
        
        this.newRange.prices = angular.copy(this.priceClass.ranges[ this.priceClass.ranges.length-1].prices)
        this.populateNewRange();
    }
    
    public addRange(form,newRange){
        this.priceClass.ranges.push(newRange);
        this.populateNewRange();
    }
    
    public clone(){
        this.onClone(angular.copy(this.priceClass)); 
    }
    
}

export class PriceManagerItemComponent implements ng.IComponentOptions{
    public template: string = require('./PriceManagerItemComponent.html'); 
    public controller: Function = PriceManagerController;
    public bindings = {
        priceClass:'<',
        onClone:'&',
    }
    public $onChanges(changesObject:any){
        console.log(changesObject)
    }
}