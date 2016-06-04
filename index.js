/**
 * Created by Sufiyan on 6/4/2016.
 */
angular.module('scheduleApp', ['firebase'])

    .controller('mainController', function($scope, $firebase) {

        // connect to firebase
        var ref = new Firebase("https://scheduleapp1211.firebaseio.com/days");
        var fb = $firebase(ref);

        // sync as object
        var syncObject = fb.$asObject();

        // three way data binding
        syncObject.$bindTo($scope, 'days');
        });