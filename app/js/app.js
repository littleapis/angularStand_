var mainApp = angular.module('mainApp',['ui.router']);



angular.module('bmap',[])
    .factory('bmapService', ['$document', '$q', '$rootScope',
        function($document, $q, $rootScope) {
            var map = $q.defer();
            function onScriptLoad() {
                // Load client in the browser
                $rootScope.$apply(function() { map.resolve(window.bmap); });
            }
            // Create a script tag with d3 as the source
            // and call our onScriptLoad callback when it
            // has been loaded
            var scriptTag = $document[0].createElement('script');
            scriptTag.type = 'text/javascript';
            scriptTag.async = true;
            scriptTag.src = 'http://api.map.baidu.com/api?type=quick&ak=XXXX&v=1.0';
            scriptTag.onreadystatechange = function () {
                if (this.readyState == 'complete') onScriptLoad();
            };
            scriptTag.onload = onScriptLoad;

            var s = $document[0].getElementsByTagName('body')[0];
            s.appendChild(scriptTag);

            return {
                bmap: function() { return map.promise; }
            };
        }]);