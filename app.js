"use strict";
var app = angular.module("docsSimpleDirective", [])
    .controller("Controller", ["$scope", function($scope) {


    }])
    .directive("myDirective", function() {

        var categories = chunk3[0];
        var records = _.tail(chunk3);
        var dataObj = {};
        var html = "";

        for (var i = records.length - 1; i >= 0; i--) {

            // var rand = Math.floor((Math.random() * records.length));
            var entry = records[i];

            _(categories).forEach(function(val) {
                var ind = categories.indexOf(val);
                dataObj[val] = entry[ind].toString();
            });
            // console.log(dataObj);

            var markup = "<div class='myCard'>";
            for (var key in dataObj) {
                markup += key + ": " + dataObj[key] + "<br>"

            }
            markup += "</div>"
                // angular.element(document.body).append(markup)
            html += markup;
        }


        return {
            // template: "Name: {{customer.name}} <br> Address: {{customer.address}}"

            template: html
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


var chunk3 = [
    ["id", "first_name", "last_name", "email", "gender", "ip_address"],
    [1, "Lois", "Walker", "lwalker0@shareasale.com", "Female", "20.187.232.138"],
    [2, "Mildred", "Fernandez", "mfernandez1@independent.co.uk", "Female", "177.194.232.209"],
    [3, "Debra", "Perez", "dperez2@businessinsider.com", "Female", "155.196.189.144"],
    [4, "Jeremy", "Franklin", "jfranklin3@businessinsider.com", "Male", "45.244.116.43"],
    [5, "Jeremy", "Allen", "jallen4@hc360.com", "Male", "126.127.191.208"],
    [6, "Irene", "Rogers", "irogers5@youtu.be", "Female", "79.36.178.99"],
    [7, "Debra", "Hayes", "dhayes6@altervista.org", "Female", "234.42.92.60"],
    [8, "Louise", "Patterson", "lpatterson7@posterous.com", "Female", "164.236.150.59"],
    [9, "Kelly", "Black", "kblack8@gov.uk", "Female", "215.38.205.232"],
    [10, "Randy", "Garcia", "rgarcia9@google.com.au", "Male", "22.90.114.184"],
    [11, "Harry", "Cruz", "hcruza@walmart.com", "Male", "132.193.131.90"],
    [12, "Russell", "Daniels", "rdanielsb@miitbeian.gov.cn", "Male", "13.48.134.200"],
    [13, "Cynthia", "Brown", "cbrownc@arstechnica.com", "Female", "232.22.113.253"],
    [14, "Julie", "Richards", "jrichardsd@ibm.com", "Female", "45.65.24.237"],
    [15, "Justin", "Freeman", "jfreemane@constantcontact.com", "Male", "49.118.122.226"],
    [16, "Jose", "White", "jwhitef@amazon.co.jp", "Male", "55.57.212.120"],
    [17, "Billy", "Williams", "bwilliamsg@columbia.edu", "Male", "135.78.136.68"],
    [18, "Joe", "Larson", "jlarsonh@wikia.com", "Male", "161.107.18.251"],
    [19, "Albert", "Harrison", "aharrisoni@lulu.com", "Male", "6.131.143.232"],
    [20, "Angela", "Morrison", "amorrisonj@blog.com", "Female", "175.185.54.55"]
]