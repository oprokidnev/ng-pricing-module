
import "angular";

export class PriceRange{
    constructor(public id:string, public from:number, public to:number, public prices:Array<Price>){
        
    }
}
export class ProductType{
    constructor(public id:string, public name:string){
        
    }
}
export class Price{
    constructor(public id:string, public priceIn:number, public priceOut:number,public productTypeId:any){
        
    }
}
export class PriceClass {
    name: string;
    productTypes:Array<any>;
    ranges: Array<PriceRange>;
    addRange() {
        
    }
}

export class PriceService{
    public static $serviceName = '$priceService';
    public static $inject: Array<string> = ['$http'];
    constructor(protected $http: ng.IHttpService){
        console.log(PriceService.$inject);
    }
    public getPriceClasses(): Array<PriceClass> {
        let priceClasses = [];
        priceClasses.push(<PriceClass>{
            name:'test',
            productTypes:[
                new ProductType('test_product','Test product'),
                new ProductType('test_product2','Test product 2')
            ],
            ranges:[
                <PriceRange>{
                    id:'dsadsadsa',
                    from:1,
                    to:10,
                    prices: [
                        new Price(
                            'aaa',
                            3,
                            5,
                            'test_product'
                        ), 
                        new Price(
                            'bbb',
                            2,
                            4,
                            'test_product2'
                        ),
                    ],
                },
                <PriceRange>{
                    id:'dsadsadsb',
                    from:11,
                    to:20,
                    prices: [
                        new Price(
                            'ccc',
                            5,
                            8,
                            'test_product'
                        ), 
                        new Price(
                            'ddd',
                            4,
                            7,
                            'test_product2'
                        ),
                    ],
                },
            ]
        }); 
        return priceClasses;
    }
}

export class PriceServiceProvider implements ng.IServiceProvider {
    $get = ['$http', function ($http){
        return new PriceService( $http );
    }]
}