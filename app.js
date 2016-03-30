'use strict';
var app = angular.module('docsSimpleDirective', [])
    .controller('Controller', ['$scope', function($scope) {

        $scope.dataCard = function() {
            var thischunk = chunk2;
            var categories = thischunk[0];
            var records = _.tail(chunk2);

            for (var i = records.length - 1; i >= 0; i--) {


                // var rand = Math.floor((Math.random() * records.length));
                var entry = records[i];
                var dataObj = {};


                _(categories).forEach(function(val) {
                    var ind = categories.indexOf(val);
                    dataObj[val] = entry[ind]
                });
                // console.log(dataObj);

                var markup = "<div class='myCard'>";
                for (var key in dataObj) {
                    markup += key + ": " + dataObj[key] + "<br>"

                }
                markup += "</div>"
                angular.element(document.body).append(markup)
                
            }
        };

        $scope.chunk = {
            "rows": chunk1[0],
            records: _.tail(chunk1)
        };

    }])
    .directive('myCustomer', function() {

        return {
            // template: 'Name: {{customer.name}} <br> Address: {{customer.address}}'


            template: "<div class='myCard'>{{chunk.rows[0]}}: {{chunk.records[0][0]}}" +
                "<br>{{chunk.rows[1]}}: {{chunk.records[0][1]}}" +
                "<br>{{chunk.rows[2]}}: {{chunk.records[0][2]}}" + "</div>"
        };
    });






var chunk1 = [

    ["_id", "Name", "Favorite Food"],
    ["1", "Frodo", "Pizza"],
    ["2", "Sam", "Pretels"],
    ["3", "Golum", "Rocks"],
    ["4", "Gandalf", "Wizard's Food"],
    ["5", "Aragorn", "Steak"],
    ["6", "Legolas", "Ham"],
    ["7", "Arwen", "Eggs"],
    ["8", "Bilbo", "Spaghetti"],
    ["9", "Galadrielf", "Pizza"],
    ["10", "Gimli", "Pizza"]
];

var chunk2 = [

    ["Order #", "Server", "Subtotal", "Tip"],
    ["124", "Aaron", "214.00", "20.00"],
    ["4136", "Zanzibar", "6.50", "1.00"],
    ["77", "Sinbad", "4.00", "0.75"],
    ["346", "Jason", "20.00", "1.00"],
    ["100", "Theseus", "45.40", "6.00"],
    ["54", "Achilles", "67.67", "33.33"],
    ["1", "Zena", "80.80", "20.000"],
    ["4", "Hera", "20.02", "1.00"],
    ["621", "Dionysus", "19.98", "1.00"]

]