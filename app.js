var app = angular.module('myModule',[]);

    app.directive('navBar',function(){
        
return {
restrict: "EA",
template: "<ul><li>Home</li><li>About</li><li>Contact</li></ul>",
replace: "false",
    
};
    
        
});
    app.directive('webName', function(){
        
        return{
            restrict:"EA",
            template:"<h1 class='title'>Reddit Copy!</h1>",
            replace:"false",
        };
        
        
        
    });