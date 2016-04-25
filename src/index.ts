import "./modules/PriceManager/Module";
// import "./modules/tweets/angular/index";
// import "./modules/about/angular/index";
import "angular";
import "angular-xeditable";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "angular-xeditable/dist/css/xeditable.css";
import "./styles/screen.scss";

angular.module("app", ["PriceManager", 'xeditable']);
angular.bootstrap(document, ["app"], {
    strictDi: true
});