export function FlickityNextDirective(
    FlickityService
) {
    'ngInject';

    const directive = {
        restrict: 'A',
        require: '^bcFlickity',
        scope: {
            bcFlickityNext: '=?',
        },
        link: linkFunction,
    };

    return directive;


    /**
     * Link
     */
    function linkFunction(
        $scope, $element, $attrs, $controller
    ) {
        'ngInject';

        // If no boolean was passed in, set to a default
        if (typeof $scope.bcFlickityNext !== 'boolean') {
            $scope.bcFlickityNext = true;
        }

        // Trigger next() method
        $element.on('click', () => {
            FlickityService.next($controller.flickityId, $scope.bcFlickityNext);
        });

    }



}



