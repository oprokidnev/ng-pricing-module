
import "angular";

// import {StarComponent} from "./components/star/StarComponent";
import {PriceManagerComponent} from "./components/price-manager/PriceManagerComponent";
import {PriceManagerItemComponent} from "./components/price-manager-item/PriceManagerItemComponent";
import {PriceService, PriceServiceProvider} from "./service/PriceService";
import {RangeValidatorFactory, RangeValidator} from "./directive/RangeValidator";

angular.module("PriceManager", [])
    .component("priceManager", new PriceManagerComponent())
    .component("priceManagerItem", new PriceManagerItemComponent())
    .provider(PriceService.$serviceName, new PriceServiceProvider())
    .directive('rangeValidator', RangeValidatorFactory)
    ;