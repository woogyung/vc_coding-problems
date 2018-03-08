/*

    ANGRY PRofessor

    2  (num of inputs)
    4 3  (N, K) - N: num of students, K: cancel if less than K students on time
    -1 -3 4 2  (arrival times) - negative/zero: on time, positive: late
    4 2
    0 -1 2 1

*/

// Each: [ [4,3], [-1,-3,4,2] ]
function decideCancellation (classInfo) {
    var K = classInfo[0][1];
    var numOfStudentsOnTime = 0;

    classInfo[1].forEach(function (individualArrivalTime) {
        if (individualArrivalTime <= 0) {
            numOfStudentsOnTime++;
        }
    });

    if (numOfStudentsOnTime >= K) {
        console.log("NO");
    } else {
        console.log("YES");
    }
}

function prettyFormat(input) {
    //Enter your code here
    var output = [];

    input = input.split("\n").slice(1);

    input.forEach(function (item, i, arr) {
        if (i % 2 === 0) {
            output.push([item.split(" "), arr[i + 1].split(" ")]);
        }
    });

    return output;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   _input = prettyFormat(_input);
   _input.forEach(function (classInfo) {
        decideCancellation(classInfo);
   });
});


/* Tree growth cycle */

'use strict';

function calculateEvenCycleGrowth (currentHeight) {
    return currentHeight * 2;
}

function calculateOddCycleGrowth (currentHeight) {
    return currentHeight + 1;
}

function calculateGrowth (n) {
    var height = 1;
    var numOfCycles = 0;

    while (numOfCycles < n) {
        if (numOfCycles % 2 === 0) {
            height = calculateEvenCycleGrowth(height);
        } else {
            height = calculateOddCycleGrowth(height);
        }

        numOfCycles++;
    }

    console.log(height);
}

function processData(input) {
    var parse_fun = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    var T = parse_fun(lines.shift());

    var data = lines.splice(0, T).map(parse_fun);

    // logic here
    data.forEach(calculateGrowth);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });



/* --------------------------------------------------------------------------------------

    Linked List

-------------------------------------------------------------------------------------- */

function Node (val) {
    this.value = val;
    this.next = null;
}

function LinkedList () {
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.add = function (val) {
    var newNode = new Node(val);

    if (!this.head) {
        this.head = newNode;
    } else {
        var currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        this.tail = currentNode.next = newNode;
    }
};

LinkedList.prototype.remove = function (val) {
    var targetNode = this.head;

    if (targetNode.value === val) {
        this.head = null;
        return;
    }

    while (targetNode.next.value !== val) {
        targetNode = targetNode.next;
    }

    if (this.tail === targetNode.next) {
        this.tail = targetNode;
        targetNode.next = null;
        return;
    } else {
        targetNode.next = targetNode.next.next;
    }
};

LinkedList.prototype.contains = function (val) {
    var currentNode = this.head;
    var found = false;

    if (currentNode.value === val) {
        found = true;
    } else {
        while (currentNode.next) {
            if (currentNode.next.value === val) {
                found = true;
            }

            currentNode = currentNode.next;
        }
    }

    return found;
};

// Write a test mocha browser to test data structures

function Queue () {
    var that = this;

    var inStack = [];
    var outStack = [];

    that.enqueue = function (val) {
        inStack.unshift(val);
        console.log("IN STACK:", inStack);
    };

    that.dequeue = function () {
        if (outStack.length === 0) {
            var totalLength = inStack.length;

            for(var i = 0; i < totalLength; i++) {
                outStack.unshift(inStack.shift());
            }
        }

        var removed = outStack.shift();

        console.log(outStack);
        console.log(inStack);

        return removed;
    };
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

// O(n) time, O(n) space
function validateParens (str) {
    var stack = [];
    var result = false;
    var openers = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    Array.prototype.forEach.call(str, function (letter, i) {
        if (openers[stack[0]] === letter) {
            stack.shift();
        } else {
            stack.unshift(letter);
        }

        if (stack.length === 0) {
            result = true;
        } else {
            result = false;
        }
    });

    return result;
}

function isAnyPermPalindrome (str) {
    var letterMap = {};
    var result = false;

    Array.prototype.forEach.call(str, function (letter, i) {
        if (letterMap[letter]) {
            letterMap[letter]++;
        } else {
            letterMap[letter] = 1;
        }
    });

    for (var letter in letterMap) {

    }

    return result;
}

"aabbbcc"
function compressString (str) {
    var compressed = "";
    var count = 1;

    for (var i = 0; i < str.length; i++) {
        var letter = str[i];

        if (str[i + 1] === letter) {
            count++;
        } else {
            compressed += (letter + count);
            count = 1;
        }
    }

    return compressed;
}





abcd

a

bcd

b

cd

c

d

cd, dc

bcd, cbd, cdb, bdc, dbc, dcb



// "abc" - ["abc", "acb", "bac", "bca", "cab", "cba"]
function findPermutations (strArr) {
    var result = [];

    if (strArr.length === 1) {
        return [strArr];
    }

    for (var i = 0; i < strArr.length; i++) {
        var subPermutations = findPermutations(strArr.slice(0, i).concat(strArr.slice(i + 1)));

        for (var j = 0; j < subPermutations.length; j++) {
            subPermutations[j].unshift(strArr[i]);
            result.push(subPermutations[j]);
        }
    }

    return result;
}

var arg = "abcd".split("");
findPermutations(arg);


// Fibonacci - iterative
// Factorial
// Num of Palindrome in a given string
// calculate string
// how to detect palindrome
// OOP javascript
// Greatest common divider or similar
// first repeated char
// linked list, reverse it
// Write throttle function

// stack
// queue
// queue using two stacks
// nth from the last
// promise implementation
// Find a value in a tree
// Cracking The Coding Interview problems

// Recursive
function fibonacci (n) {
    var result = 0;

    if (n <= 1) {
        result = n;
    } else {
        result = fibonacci(n - 1) + fibonacci(n - 2);
    }

    return result;
}

// Iterative
function fibonacci (n) {
    var result = 0;
    var a = 0;
    var b = 1;

    if (n === 0 || n === 1) {
        result = n;
    } else {
        for(var i = 2; i <= n; i++) {
            result = a + b;
            a = b;
            b = result;
        }
    }

    return result;
}
 // 01234
// "abcd"
function isPalindrome (str) {
    var pivotIndex = Math.floor(str.length - 1 / 2);
    var result = true;

    for (var i = 0; i <= pivotIndex; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            result = false;
            i = str.length;
        }
    }

    return result;
}

"abcd"

"abcd"
"abc"
"ab"
"a"

"bcd"
"bc"
"b"

"cd"
"c"

"d"

function FindNumOfPalindromes (str) {
    var found = {};

    for (var i = 0; i < str.length; i++) {
        for(var j = i + 1; j <= str.length; j++) {
            if (!found[str.substring(i, j)] && isPalindrome(str.substring(i, j))) {
                console.log("SUBSTRING:",str.substring(i, j), i, j);
                found[str.substring(i, j)] = true;
            }
        }
    }

    return Object.keys(found).length;
}



"5 + 1"

"5 - 1"

"10 / 2"

"5 * 2"

function add (str) {
    return str.split(" + ").reduce(function (prev, cur) {
        return parseInt(prev) + parseInt(cur);
    });
}

function subtract (str) {
    return str.split(" - ").reduce(function (prev, cur) {
        return parseInt(prev) - parseInt(cur);
    });
}

function divide (str) {
    return str.split(" / ").reduce(function (prev, cur) {
        return parseInt(prev) / parseInt(cur);
    });
}

function multiply (str) {
    return str.split(" * ").reduce(function (prev, cur) {
        return parseInt(prev) * parseInt(cur);
    });
}

"10 + 100 / 25 - 4 + 5 * 2 + 200 * 5" // 1020

function calculateStr (str) {
    var tempResult = 0;

    str = str.split(" ");

    for (var i = 0; i < str.length; i++) {
        if (str[i] === "*") {
            tempResult = parseInt(str[i - 1]) * parseInt(str[i + 1]);
            str.splice(i - 1, 3, tempResult);
            i -= 1;
        } else if (str[i] === "/") {
            tempResult = parseInt(str[i - 1]) / parseInt(str[i + 1]);
            str.splice(i - 1, 3, tempResult);
            i -= 1;
        }
    }

    for (var j = 0; j < str.length; j++) {
        if (str[j] === "+") {
            tempResult = parseInt(str[j - 1]) + parseInt(str[j + 1]);
            str.splice(j - 1, 3, tempResult);
            j -= 1;
        } else if (str[j] === "-") {
            tempResult = parseInt(str[j - 1]) - parseInt(str[j + 1]);
            str.splice(j - 1, 3, tempResult);
            j -= 1;
        }
    }

    return parseInt(str[0]);
}


// my_array     = [3, 4, 6, 10, 11, 15]
// alices_array = [1, 5, 8, 12, 14, 19]

// print merge_arrays(my_array, alices_array)
// # prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]


function mergeTwoArrays (firstArray, secondArray) {
    // Error out if not arrays

    var mergedArray = [];

    if (firstArray.length === 0 && secondArray.length === 0) {
        return [];
    } else if (firstArray.length === 0) {
        return secondArray;
    } else if (secondArray.length === 0) {
        return firstArray;
    }

    var i = 0;
    var j = 0;
    var done = false;

    while (!done) {
        if (firstArray[i] < secondArray[j]) {
            mergedArray.push(firstArray[i]);
            i++;
        } else {
            mergedArray.push(secondArray[j]);
            j++;
        }

        if (i === firstArray.length) {
            mergedArray = mergedArray.concat(secondArray.slice(j));
            done = true;
        } else if (j === secondArray.length) {
            mergedArray = mergedArray.concat(firstArray.slice(i));
            done = true;
        }
    }

    return mergedArray;
}

function mergeArrays () {
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function (prev, curr) {
        return mergeTwoArrays(prev, curr);
    });
}






// Define the Person constructor
var Person = function(firstName) {
  this.firstName = firstName;
};

// Add a couple of methods to Person.prototype
Person.prototype.walk = function(){
  console.log("I am walking!");
};

Person.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName);
};

// Define the Student constructor
function Student(firstName, subject) {
  // Call the parent constructor, making sure (using Function#call)
  // that "this" is set correctly during the call
  Person.call(this, firstName);

  // Initialize our Student-specific properties
  this.subject = subject;
};

// Create a Student.prototype object that inherits from Person.prototype.
// Note: A common error here is to use "new Person()" to create the
// Student.prototype. That's incorrect for several reasons, not least
// that we don't have anything to give Person for the "firstName"
// argument. The correct place to call Person is above, where we call
// it from Student.
Student.prototype = Object.create(Person.prototype); // See note below

// Set the "constructor" property to refer to Student
Student.prototype.constructor = Student;

// Replace the "sayHello" method
Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + ". I'm studying "
              + this.subject + ".");
};

// Add a "sayGoodBye" method
Student.prototype.sayGoodBye = function(){
  console.log("Goodbye!");
};

// Example usage:
var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

// Check that instanceof works correctly
console.log(student1 instanceof Person);  // true
console.log(student1 instanceof Student); // true


function Person (name) {
    this.name = name;
}

Person.prototype.logName = function () {
    console.log(this.name);
};

function Student (name, school) {
    Person.call(this, name);
    this.school = school;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.logSchool = function () {
    console.log(this.school);
};

var student = new Student("Ken", "OSU");
student.logName();
student.logSchool();

var person1 = new Person("Someone");
person1.logName();

console.log(student instanceof Person);
console.log(student instanceof Student);
console.log(person1 instanceof Person);


// Greatest common divider
// 3, 1 = 1
// 5, 10 = 5
// 20, 16 = 4

function findGCD (a, b) {
    var smaller;
    var bigger;
    var GCD = 1;

    if (a <= 0 || b <= 0) {
        throw new Error("Please enter positive integers.");
    }

    if (a > b) {
        smaller = b;
        bigger = a;
    } else {
        smaller = a;
        bigger = b;
    }

    for (var i = 2; i <= smaller; i++) {
        if (smaller % i === 0 && bigger % i === 0) {
            GCD = i;
        }
    }

    return GCD;
}


"nnh"
function findFirstRepeatedChar (str) {
    if (typeof str !== "string") {
        throw new Error("Please enter STRING");
    }

    var found = {};
    var result = "";

    for (var i = 0; i < str.length; i++) {
        if (!found[str[i]]) {
            found[str[i]] = true;
        } else {
            result = str[i];
            i = str.length;
        }
    }

    return result;
}




// var throttled = _.throttle(updatePosition, 100);
// $(window).scroll(throttled);

var throttle = function (func, wait) {
    var isLimited = false;

    return function () {
        if (!isLimited) {
            isLimited = true;
            var args = Array.prototype.slice.call(arguments);
            func.apply(this, args);

            setTimeout(function () {
                isLimited = false;
            }, wait);
        }
    };
};



// linked list, reverse it
// head -> 1 -> 2 -> 3 -> 4 -> null
function reverseLinkedList (linkedlist) {
    var node = linkedlist;
    var previousNode = null;
    var nextNode = null;

    while (node) {
        nextNode = node.next;
        node.next = previousNode;
        previousNode = node;
        node = nextNode;
    }

    return linkedlist;
}

// This is not good. Shift is inefficient. Use an object as storage.
function Stack () {
    this.storage = [];
}

Stack.prototype.pop = function () {
    return this.storage.shift();
};

Stack.prototype.push = function (val) {
    this.storage.unshift(val);
};

// new Stack() - []
// stack.push(1) - [1]
// stack.push(2) - [1,2]
// stack.pop() - [1], return 2
// stack.pop() - [], return 1
// stack.pop() - [], return undefined
function Stack () {
    this.top = 0;
    this.storage = {};
}

Stack.prototype.push = function (data) {
    this.storage[++this.top] = data;
};

Stack.prototype.pop = function () {
    var temp;

    if (this.top <= 0) {
        return;
    }

    temp = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return temp;
};

Stack.prototype.peek = function () {
    return this.storage[this.top];
};


function Queue () {
    this.inStack = new Stack();
    this.outStack = new Stack();
}

Queue.prototype.enqueue = function (val) {
    this.inStack.push(val);
    return this.inStack.storage;
};

Queue.prototype.dequeue = function () {
    var that = this;

    if (that.outStack.storage.length > 0) {
        return that.outStack.pop();
    } else {
        while (that.inStack.storage.length > 0) {
            that.outStack.push(that.inStack.pop());
        }

        return that.outStack.pop();
    }
};

// Queue
// q.enqueue(1) - [1] - storage[0] = 1, this.last = 1
// q.enqueue(2) - [1,2] - storage[1] = 2, this.last = 2
// q.enqueue(3) - [1,2,3] - storage[2] = 3, this.last = 3
// q.dequeue() - [2,3], return 1 - this.first = 0, this.last = 3 - temp = storage[0] (1), this.first = 1
// q.dequeue() - [3], return 2 - this.first = 1, this.last = 3 - temp = storage[1] (2), this.first = 2
// q.dequeue() - [], return 3 - this.first = 2, this.last = 3 - temp = storage[2] (3), this.first = 3
// q.dequeue() - [], return undefined - this.first = 3, this.last = 3 - return undefined

function Queue () {
    this.first = 0;
    this.last = 0;
    this.storage = {};
}

Queue.prototype.enqueue = function (data) {
    this.storage[this.last] = data;
    this.last++;
};

Queue.prototype.dequeue = function () {
    if (this.first === this.last) {
        return;
    }

    var temp = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return temp;
};

// Anagram
// "Mary" "Army"
function isAnagram (a, b) {
  var result = true;

  a = a.split("");
  b = b.split("");

  for (var i = 0; i < a.length; i++) {
    var indexA = b.indexOf(a[i]);

    if (indexA === -1) {
      result = false;
      i = a.length;
    } else {
      a.splice(i, 1);
      b.splice(indexA, 1);
      i -= 1;
    }
  }

  return result;
}


Array.prototype.reduce = function (callback) {
    var temp = this[0];

    for (var i = 1; i < this.length; i++) {
        temp = callback(temp, this[i]);
    }

    return temp;
};


// Naive -> Test -> Fix -> Edge Cases -> Fix -> Test
function mergeTwoArrays (firstArray, secondArray) {
    // Error out if not arrays

    var mergedArray = [];

    if (firstArray.length === 0 && secondArray.length === 0) {
        return [];
    } else if (firstArray.length === 0) {
        return secondArray;
    } else if (secondArray.length === 0) {
        return firstArray;
    }

    var i = 0;
    var j = 0;
    var done = false;

    while (!done) {
        if (firstArray[i] < secondArray[j]) {
            mergedArray.push(firstArray[i]);
            i++;
        } else {
            mergedArray.push(secondArray[j]);
            j++;
        }

        if (i === firstArray.length) {
            mergedArray = mergedArray.concat(secondArray.slice(j));
            done = true;
        } else if (j === secondArray.length) {
            mergedArray = mergedArray.concat(firstArray.slice(i));
            done = true;
        }
    }

    return mergedArray;
}

function mergeArrays () {
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function (prev, curr) {
        return mergeTwoArrays(prev, curr);
    });
}

















































// QUESTION #1 -- Lebron or Durant "Median-ation"
// Lebron James and Kevin Durant have each averaged 35 ppg over their last nine games. However, one of them has a higher median value across those last nine games -- so which is it, Lebron or Durant?

// Develop:
// In JavaScript, write a function getPlayerMedian() that takes in an array of numbers and returns the median value (for reference) of the array (note: for even length arrays the function should take the average of the two median values, odd length arrays should simply take the median value).

// function getPlayerMedian(playerArray) {
//     var median;
// // write the remainder of the function (save in this DOC)
// return median;
// };

// // Player scores
// var Lebron = [27, 37, 34, 51, 32, 22, 31, 35, 46];
// var Durant = [42, 31, 26, 40, 38, 33, 30, 36, 43];

// // Output the median score for Kevin Durant (9 player scores)

// // Output the median score for Lebron James (9 player scores)

// // Output the median score for both players (18  player scores)

// NOTE:  We encourage (and appreciate) the use of sites such as JSFiddle or Codepen.io that are designed to aid in showing your work as well as executing functioning code.  Feel free to include a link to your solutions there as an alternative to embedding the code within this document.

var getAverage = function (a, b) {
    if (!Number(a) || !Number(b)) {
        throw new Error("Input type must be Number.");
    }

    return (a + b) / 2;
};

var getPlayerMedian = function (playerArray) {
    if (!Array.isArray(playerArray)) {
        throw new Error("Input type must be Array.");
    }

    var numOfScores = playerArray.length;
    var middleIndex = Math.round(numOfScores / 2) - 1;
    var median;

    playerArray = playerArray.sort(function (a, b) { return a - b; });

    if (numOfScores % 2 !== 0) {
        median = playerArray[middleIndex];
    } else {
        median = getAverage(playerArray[middleIndex], playerArray[middleIndex + 1]);
    }

    return median;
};

var getMedianOfTwoPlayers = function (playerA, playerB) {
    if (!Array.isArray(playerA) || !Array.isArray(playerB)) {
        throw new Error("Input type must be Array.");
    }

    var sumArray = playerA.concat(playerB);
    return getPlayerMedian(sumArray);
};






//
// QUESTION #2 -- Fantasy Optimal Lineup

// Matt is playing in a fantasy league with the following scoring:

// Passing TD = 4 pts
// Passing yards = 1 point per 25 yards
// Rushing TD = 6 pts
// Rushing yards = 1 point per 10 yards
// Receiving TD = 6 pts
// Receiving yards = 1 point per 10 yards

// Example:  Any Running Back that rushes for 125 yards and scores 3 TDs would earn 30 fantasy points (12+18 = 30 points).

// Develop:  Using JavaScript (and jQuery, if preferred) parse the following JSON file of player scores:
// http://espn.go.com/users/recruiting/fantasy-sample-data.json

// Once you've written the necessary JavaScript to parse the above JSON, your task is to deduce which players were the top fantasy performers at their respective position.

// Save the following functions (and any additional functions that you may need) below in this document:

// Write a function loadPlayerJSON() that loads and parses the JSON and populates a list of players and their stats and then computes and stores their fantasy score for that week.

// Write another function bestRoster() that accesses the player list and finds the optimal line-up of the best QB, RB, WR, and TE and outputs that optimal score as well as each individual player's scores.

// <insert all JS here for review>

// Output:   Make sure that the bestRoster() function outputs in the following fashion (example):

// Optimal Roster: QB-FullName=30, RB-FullName=28, WR-FullName=22, TE-FullName=16, Total=96

// NOTE:  We encourage (and appreciate) the use of sites such as JSFiddle or Codepen.io that are designed to aid in showing your work as well as executing functioning code.  Feel free to include a link to your solutions there as an alternative to embedding the code within this document.

(function () {
    "use strict";

    var FantasyOptimalLineup = function (dataURL) {
        var PLAYER_DATA_URL = dataURL;
        var playersData = {};

        var calculateFantasyPts = function (playerStats) {
            var passingYardPts = Math.floor(playerStats["passing-yards"] / 25);
            var passingTDPts = playerStats["passing-touchdowns"] * 4;
            var rushingYardsPts = Math.floor(playerStats["rushing-yards"] / 10);
            var rushingTDPts = playerStats["rushing-touchdowns"] * 6;
            var receivingYardsPts = Math.floor(playerStats["receiving-yards"] / 10);
            var receivingTDPts = playerStats["receiving-touchdowns"] * 6;

            return passingYardPts + passingTDPts + rushingYardsPts + rushingTDPts + receivingYardsPts + receivingTDPts;
        };

        var storePlayerFantasyPts = function (data) {
            var playerData = data.player;
            var playerStats = playerData["player-stats"];
            var fantasyPts = calculateFantasyPts(playerStats);
            var position = playerStats.position;

            playersData[position] = playersData[position] || [];

            playersData[position].push({
                fullName: playerData["player-name"],
                points: fantasyPts
            });
        };

        var computeFantasyScores = function (data) {
            data.players.forEach(storePlayerFantasyPts);
        };

        var errorHandler = function (error) {
            throw new Error(error);
        };

        var loadPlayerJSON = function (callback) {
            $.ajax({
                url: PLAYER_DATA_URL,
                dataType: "json",
                success: computeFantasyScores,
                fail: errorHandler,
                complete: callback
            });
        };

        var getBestPlayer = function (position) {
            playersData[position].sort(function (a,b) {
                return b.points - a.points;
            });

            return playersData[position][0];
        };

        var getTotalPts = function (roster) {
            var total = 0;

            Object.keys(roster).forEach(function (position) {
                total += roster[position].points;
            });

            return total;
        };

        var bestRoster = function () {
            var roster = {
                QB: getBestPlayer("QB"),
                RB: getBestPlayer("RB"),
                WR: getBestPlayer("WR"),
                TE: getBestPlayer("TE")
            };

            roster.total = getTotalPts(roster);
            console.log(roster);
            return roster;
        };

        this.loadPlayerJSON = loadPlayerJSON;
        this.bestRoster = bestRoster;
    }

    var PLAYER_DATA_URL = "http://espn.go.com/users/recruiting/fantasy-sample-data.json";
    var fantasyOptimalLineupMaker = new FantasyOptimalLineup(PLAYER_DATA_URL);

    fantasyOptimalLineupMaker.loadPlayerJSON(fantasyOptimalLineupMaker.bestRoster);
})();

Cam Newton = QB, 226/25 + 12 + 8 + 6 = 35
Aaron Rodgers = QB, 327/25 + 12 + 2 = 27
Drew Brees = QB, 375/25 + 16 + 2 = 33






// Find the largest prime factor of n
function findLargestPrimeFactor(n) {
    var i;

    if (n < 0) {
        throw new Error();
    }

    if (n <= 3) {
        return n;
    }

    i = 2;
    while (i <= n) {
        if (n % i === 0) {
            n = n / i;
        } else {
            i++;
        }
    }

    return i;
}


// Find an element from sorted array
// [1,2,3,4,5, (6) ,7,8,9,10] - L:10, L/2: 5
// [0,1,2,3,4, (5), 6,7,8,9,10] - L:11, L/2: 5.5

// [1,2,3,4,5], target = 5
function find (target, array) {
    var result;

    function searchFromAndTo(start, end) {
        var index;
        var middle = start + Math.floor((end - start) / 2);

        if (target < array[middle]) {
            index = searchFromAndTo(start, middle-1);
        } else if (target > array[middle]) {
            index = searchFromAndTo(middle+1, end);
        } else {
            index = middle;
        }

        return index;
    }

    result = searchFromAndTo(0, array.length - 1);

    return result;
}


// Find an element from sorted/rotated array
// [4,5,6,7,8,9,1,2,3] find 2
// [7,8,9,1,2]

// [4,5,6,7,8,1,2,3] find 3
// 1. [4,5,6,7], [8,1,2,3]
    // sorted
    // - binary search

    // unsorted
    // half -> recursive call to divide half -> one side is sorted, the other is not sorted
function rotatedBinarySearch(arr, k) {
    var m;
    var l = 0;
    var r = arr.length - 1;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        if (arr[m] == k) {
            return m;
        }

        // Left side is sorted
        if (arr[l] < arr[m]) {

            // if K belongs to left side
            if (arr[l] <= k && k < arr[m]) {
                // change right index value since we don't need to search in right side
                r = m - 1;

            // if K does not belong to left side, meaning K belongs to right side which is not sorted
            } else {
                // change left index value since we need to search right side
                l = m + 1;
            }

        // arr[l] >= arr[m] meaning left side is not sorted, also meaning ** right side must be sorted. ** One of two sides must be sorted.
        } else {

            // if K belongs to right side which is sorted
            if (arr[m] < k && k <= arr[r]) {
                // Change left index value to search right side
                l = m + 1;

            // if K belongs to left side which is not sorted
            } else {
                // Change right side index value to search left side
                r = m - 1;
            }
        }
    }
    return -1;
}

// [9,1,2,3,4,5]
// [7,8,9,10,11,1]
// [5,6,7,1,2]
// [1,2,3,4,5]
function findMinFromSortedRotatedArray(arr) {
    var left = 0;
    var right = arr.length - 1; //5
    var middle;

    while (left <= right) {
        middle = Math.floor((left + right)/2); //2 -> 4

        // Leftmost element is smaller than rightmost element: Sorted and not rotated
        if (arr[left] < arr[right]) {
            return left;
        }

        // middle element is bigger than the one on the right side. meaning right side element is pivot.
        if (arr[middle] > arr[middle + 1]) {
            return middle + 1;
        }

        // middle element is smaller than the one on the left side. meaning middle element is pivot.
        if (arr[middle - 1] > arr[middle]) {
            return middle;
        }

        // Left side is sorted,
        // - Find pivot point from right side
        if (arr[left] < arr[middle]) {
            left = middle + 1;

        // Right side is sorted
        // - Find pivot point from left side
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

// [7,8,9,1,2,3]
// [6,7,8, / 9,/ 1, / 2,3]
function rotatedBinarySearch (arr, k) {
    var left = 0;
    var right = arr.length - 1;
    var middle;

    while (left <= right) {
        middle = Math.floor((right + left)/2);

        // If K is at middle
        if (arr[middle] === k) {
            return middle;
        }

        // Right side is sorted
        if (arr[right] > arr[middle]) {
            // K belongs to right side which is sorted
            if (arr[middle] < k && k <= arr[right]) {
                left = middle + 1;

            // K does not belong to right side - meaning K belongs to left side which is not sorted
            } else {
                right = middle - 1;
            }

        // Left side is sorted
        } else {
            // K belongs to left side which is sorted
            if (arr[left] <= k && k < arr[middle]) {
                right = middle - 1;

            // K belongs to right side which is not sorted
            } else {
                left = middle + 1;
            }
        }
    }

    return -1;
}

// Find Fibonnaci up to K
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
function findFibonacci (k) {
    var result = [0];
    var fib = 1;

    if (k < 0) {
        return [];
    }

    if (k === 0) {
        return result;
    }

    if (k === 1) {
        return [0,1,1];
    }

    while (fib <= k) {
        result.push(fib);
        fib = result[result.length - 2] + result[result.length - 1];
    }

    return result;
}

// "aaabbc" -> "3a2b1c"
function RunLength(str) {

  // code goes here
  var result = "";
  var counter = 1;

  // if empty string
  if (str.length < 1) {
    return "";
  }

  // if single letter string
  if (str.length === 1) {
    return 1 + str;
  }

  for (var i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      i++;
      result += " ";
    }

    // if current letter is same as prev letter, increment counter.
    if (str[i] === str[i + 1]) {
      counter++;
    }
    // if current letter is different from prev, append to result and reset counter to 1.
    // if last letter
    if ( (i === str.length - 1) || (str[i] !== str[i + 1]) ) {
      result += (counter + str[i]);
      counter = 1;
    }
  }

  return result;
}


// Getting a power set of an array - CAN BE USED FOR SUBSET SUM QUESTION
// 1,2,3
// 1
// 1,2
// 1,3
// 1,2,3
// 2
// 2.3
// 3
function powerSet (arr) {
    var result = [[]];

    var f = function (prefix, numbers) {
        numbers.forEach(function (num, i) {
            result.push(prefix.concat([num]));
            f(prefix.concat([num]), numbers.slice(i+1));
        });
    };

    f([], arr);

    return result;
}


// Second largest number
// [3,4,5]
// [5,4,3,6]
function findSecondLargestNumber (arr) {
    var largest;
    var second;

    arr.forEach(function (num) {
        if (!largest) {
            largest = num;
        } else {
            if (largest <= num) {
                second = largest;
                largest = num;
            } else if (!second || second < num) {
                second = num;
            }
        }
    });

    return second;
}

// Find duplicates from an array
// [2,2,5,6,5]
function findDuplicate (arr) {
    var map = {};
    var result = [];

    arr.forEach(function (num) { // 2
        if (map[num]) {
            result.push(num);
            // result = [2]
            // result = [5]
        } else {
            map[num] = true;
            // map[2] = true
            // map[5] = true
            // map[6] = true
        }
    });

    return result; // [2,5]
}

// Find matching brackets
// '{{}[()()]()[]}' - true
// '{([)][]}' - false
function findMatchingBrackets (str) {
    // Create a map of brackets
    var brackets = {
        '{': '}',
        '(': ')',
        '[': ']'
    };
    var result = true;
    var stack = []; // {,(,[,

    // Each letter can be either a closing or an opening bracket.
    Array.prototype.forEach.call(str, function (letter) {
        // if opening, push to Stack
        if (brackets[letter]) {
            stack.push(letter);

        // if closing, pop from stack
        //    if matching, move onto next letter
        //    if not matching, return false
        } else if (brackets[stack.pop()] !== letter) {
            result = false;
        }
    });

    return result;
}

// Count pairs from an array of nums where diff is K.
// [1,2,3,4,6,8,10,15] k = 5 -> [10,15], [3,8], [1,6] so return 3.

// n + (n-1) + (n-2) + ... + 3 + 2 + 1
// 1 + 2 + 3 + ... + (n - 2) + (n - 1) + n = n * (n + 1) / 2 => n^2

// Method 2
// 1) Initialize count as 0.
// 2) Insert all distinct elements of arr[] in a hash map.  While inserting,
//    ignore an element if already present in the hash map. -> C*n
// 3) Do following for each element arr[i]. -> 3C*n
//    a) Look for arr[i] + k in the hash map, if found then increment count.
//    b) Look for arr[i] - k in the hash map, if found then increment count.
//    c) Remove arr[i] from hash table.
// Total Time Complexity = 4C*n -> O(n)
function countPairs (arr, k) {
    var count = 0;

    for(var i = 0; i < arr.length - 1; i++) {
        for(var j = i + 1; j < arr.length; j++) {
            if (arr[j] - arr[i] === k || arr[i] - arr[j] === k) {
                count++;
            }
        }
    }

    return count;
}


// change Calculator
// 68 -> 25,25,10,5 + 3
// 68 - (68 % 25 = 18) / 25
function changeCalculator (num) { // 53
    var result = {};

    [100,50,10,1].forEach(function (coin) { // 25, 10, 5, 1
        var remainder = num % coin; // 3, 3, 3, 0
        result[coin] = (num - remainder) / coin; // result[25] = (53 - 3) / 25 = 2, result[10] = (3 - 3) / 10 = 0, result[5] = (3 - 3) / 5 = 0, result[1] = (3 - 0) / 1 = 3
        num = remainder; // num = 3, 3, 3, 0
    });

    return result;
}


// BinaryConverter
function BinaryConverter(str) {
  // for each letter at i, result += 2 ^ str.length - 1 - i only if num is 1. pass if 0.
  var result = 0;

  for (var i = str.length - 1; i >= 0; i--) {
    if (parseInt(str[i]) === 1) {
        result += Math.pow(2, str.length - 1 - i);
    }
  }

  return result;
}


// Using the JavaScript language,
// have the function LetterCount(str) take the str parameter being passed
// and return the first word with the greatest number of repeated letters.
// For example: "Today, is the greatest day ever!" should return greatest
// because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's.
// If there are no words with repeating letters return -1. Words will be separated by spaces.
function LetterCount (str) {
    var result = {
        word: null,
        repetition: 0
    };

    str = str.split(' ');

    str.forEach(function (word) {
        var map = {};

        Array.prototype.forEach.call(word, function (letter) {
            if (map[letter]) {
                map[letter]++;

                if (map[letter] > result.repetition) {
                    result = {
                        word: word,
                        repetition: map[letter]
                    };
                }
            } else {
                map[letter] = 1;
            }
        });
    });

    return result.word ? result.word : -1;
}


// Using the JavaScript language, have the function Consecutive(arr) take the array of integers stored in arr
// and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.
// For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it
// a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements.
function Consecutive (arr) {
    arr = arr.sort(function (a,b) { return a-b;}); // n * log(n)
    return arr[arr.length - 1] - arr[0] - (arr.length - 1);
}


// Using the JavaScript language, have the function FormattedDivision(num1,num2) take both parameters being passed,
// divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place.
// For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789".
// The output must contain a number in the one's place even if it is a zero.
function FormattedDivision (num1, num2) {

}

// Power of Two
function PowersofTwo(num) {
  // 8 = 2 * 2 * 2
  // 8 / 2 / 2 / 2 = 1
  while (num > 1) {
      if (num % 2 !== 0) {
        num = 0;
      } else {
        num = num / 2;
      }
  }

  return num === 1 ? 'true' : 'false';
}

// entity
// - email
// - type
// - members
// Find email addresses
function getEmails (arr) {
    var result = []; // Hash table
    // For each entity,
    // if person, push email
    // if group, push members' emails
    arr.forEach(function (entity) {
        if (entity.type === 'PERSON') {
            result.push(entity.email);
        } else {
            entity.members.forEach(function (member) {
                result.push(entity.email);
            });
        }
    });

    return result;
}

// Greatest Common Divisor
// 2, 4
// 3, 6
// 4, 4
function findGCD (num1, num2) {
    var smaller = num1 > num2 ? num2 : num1; // 3
    var result = 1;

    if (num1 === num2) {
        return num1;
    }

    for(var i = 2; i <= smaller; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            result = i;
        }
    }

    return result;
}

// SwapCase
function SwapCase (str) {
    var result = '';

    Array.prototype.forEach.call(str, function (letter) {
        // Letter is lowercase
        if (letter.toUpperCase() !== letter) {
            result += letter.toUpperCase();
        // Letter is uppercase
        } else  if (letter.toLowerCase() !== letter) {
            result += letter.toLowerCase();
        } else {
            result += letter;
        }
    });

    return result;
}

// Form get vs post

// The main thing to keep in mind as a programmer is that defining your form to use the GET method does not protect against causing changes.
// You could use a GET request to do pretty much the same thing as a POST query. It's just that browsers are generally coded to expect that
// POST requests will be used for things that will cause changes – like placing an order, or writing to a database, etc .
// GET requests should be used for pure queries that don't affect anything on the server.
// So, one should always remember not to use GET requests for any action that would cause a change on the server – like ordering a big screen tv.

// CSS Box Model

// ALL Html elements are boxes.
// Content, padding, border, margin.

// What is promise in JS?

// Reverse a singly linked list

// First repeated char in a string

// Palindrome?

// How to prevent cross site attack

// Fav HTML5 or CSS3 feature

// traverse DOM to find an element with a class name

// What happens when URL is entered in a browser

// JS Bind
// var doSomething = function (arg1, arg2, ..) {
//      this = context
// }
// var func = doSomething.bind(context, arg1, arg2..);
// func();

Function.prototype.bind = function (context) {
    var func = this;
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        func.apply(context, args);
    };
};

// input = 'abbbbcddeef', 'abcabcd'
// output = 'acf', 'd'

function uniq (str) {
    var result = '';

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        var counter = 0;

        for (var j = 0; j < str.length; j++) {
            if (str[j] === char) {
                counter++;
            }
        }

        if (counter === 1) {
            result += char;
        }
    }

    return result;
}

function uniq (str) {
    var result = '';
    var map = {};

    for (var i = 0; i < str.length; i++) {
        if (!map[str[i]]) {
            map[str[i]] = 1;
        } else {
            map[str[i]]++;
        }
    }

    var chars = Object.keys(map);

    for (var j = 0; j < chars.length; j++) {
        if (map[chars[j]] === 1) {
            result += chars[j];
        }
    }

    return result;
}


"a p p l e p i e"
"apple pie"

"appleabcd"
""

"a pplepie"

"appleorangebanana"
"apple orange banana"

"apple ggg banana"

"abcdapple"

isWord(string) => T/F

// go through the given string,
// 0 - i -> see if this matches any valid word,
// i + 1 - n -> see if there is another match
// if there is an invalid match at any point, return nothing

function validWords(str) { // "applepie"
    var result = "";
    var start = 0;
    var end = 0;
    var i = end;
    var hasInvalidWord = false;
    
    function iterateStr() {
        for (; i < str.length; i++) {
            var tempWord = str.substring(start, i); // start = 0, i = 1
            if (isWord(tempWord)) { // true
                result += (tempWord + " "); // "apple pie"
                start = end + 1; // start = 5
            } else { // we found an invalid word
                hasInvalidWord = true;
            }
        }
    }
    
    iterateStr();
    
    while (hasInvalidWord && end < str.length) {
        start = 0;
        end++;
        i = end;
        result = "";
        hasInvalidWord = false;
        iterateStr();
    }
    
    return hasInvalidWord ? null : result; // "apple "
}

function myFunction(words) {
    if (words.length === 0) {
        return null;
    }
    
    if (words.length === 1) {
        return 0;
    }
    
    var startIndex = 0;
    var endIndex = words.length - 1; // 7
    var pivot;
    
    // pivot at 0
    if (words[startIndex] < words[startIndex - 1]) {
        return startIndex;
    }
    
    while (startIndex !== endIndex) {
        pivot = Math.floor((startIndex + endIndex)/2);
        // pivot on right
        if (words[endIndex] < words[pivot]) {
            startIndex = pivot + 1;
        // pivot on left
        } else {
            endIndex = pivot;
        }
        
        if (startIndex === endIndex) {
            return startIndex;
        }
    }
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction(['g','h','i','j','k','l','m','n','o','a','b'])); // 5



function myFunction(list) {
    var minSoFar;
    var maxProfit;
    
    if (list.length === 0) {
        return null;
    }
    
    if (list.length === 1) {
        return 0;
    }
    
    list.forEach(function (price, i) {
        if (i === 0) {
            minSoFar = price;
            maxProfit = 0;
        } else {
            if (price - minSoFar > maxProfit) {
                maxProfit = price - minSoFar;
            }
            if (price < minSoFar) {
                minSoFar = price;
            }
        }
    });
    
    return maxProfit;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([10,7,5,4,8,11,9,25]));


// 1, 7, 3, 4

// 1, 1, 7, 21
// 84, 12, 4, 1

function myFunction(nums) {
    var multiplied = [];
    var productSoFar = 1;
    
    for (var i = 0; i < nums.length; i++) {
        multiplied.push(productSoFar);
        productSoFar *= nums[i];
    }
    
    productSoFar = 1;
    
    for (i = nums.length - 1; i >= 0; i--) {
        multiplied[i] *= productSoFar;
        productSoFar *= nums[i];
    }

    return multiplied;
}


function highestProduct(nums) {
    var max = nums[0];
    var min;
    var middle;
    
    for (var i = 1; i < nums.length - 1; i++) {
        if (!middle) {
            if (max > nums[i]) {
                middle = nums[i];
            } else {
                middle = max;
                max = nums[i];
            }
        } else if (!min) {
            if (middle > nums[i]) {
                min = nums[i];
            } else {
                min = middle;
                middle = nums[i];
            }
        } else {
            if (min < nums[i]) {
                min = nums[i];
            }
            
            if (middle < nums[i]) {
                min = middle;
                middle = nums[i];
            }
            
            if (max < nums[i]) {
                middle = max;
                max = nums[i];
            }
        }
    }

    return max*middle*min;
}

console.log(highestProduct([5,26,4,13,7,8,12,1]));

// function getElementsByClassname(root, className) {}

// function getElementsByHierarchy(root, classHierarchy)
// "a > b > c"

// classname = '' - not happening
function getElementsByClassname(root, className) {
  var nodeList = [];
  
  var checkNodes = function (node) {
    if (node.classList.contains(className)) {
      nodeList.push(node);
    }
    
    Array.prototype.forEach.call(node.children, function (child) {
      checkNodes(child);
    });
  };
  
  checkNodes(root);
  
  return nodeList;
}

function getElementsByHierarchy(root, classHierarchy) {
  var nodeList = [];
  var classes = classHierarchy.split(' > '); // ["a", "b", "c"]
  var currentNodeList = {};
  var i = 0;

  currentNodeList[i] = getElementsByClassname(root, classes[i]); // a
  // currentNodeList[0] = nodes with classname 'a'

  // first find a, - multiple
  while (currentNodeList[i].length > 0) { // classname 'b'
    if (!currentNodeList[i+1]) {
        currentNodeList[i+1] = [];
    }

    currentNodeList[i].forEach(function (node) { // classname 'b'
      Array.prototype.forEach.call(node.children, function (node) { // children of 'c'
        currentNodeList[i+1].concat(getElementsByClassname(node, classes[i + 1])); // searching 'c'
      });
    });

    i++; // 1, 2

    if (i === classes.length - 1) { // 2 === 2
      return currentNodeList[i];
    }
  }

  return nodeList;
}

/*


.z
  .a
    .b
      .d
        .c

"a > b > c"

*/

// [1,2,3,1,0] -> [1,2,3,0]
function removeDuplicates (arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  var map = {};
  var result = [];

  arr.forEach(function (item) { // 1, 2, 3, 1, 0
    if (!map[item]) {
      map[item] = true; // map[1] = true, 2 = true, 3 = true, 0 = true
      result.push(item); // result.push(1), 2, 3, 0
    }
  });

  return result; // 1,2,3,0
}

// [0,1,2,3,1] -> [0,2,3,1]
function removeDuplicates (arr) {
  var map = {};
  var result = [];

  for (var i = arr.length - 1; i >= 0; i--) { // 1, 3, 2, 1, 0
    if (!map[arr[i]]) {
      map[arr[i]] = true; // map[1] = true, map[3] = true, map[2] = true, map[0] = true
      result.unshift(arr[i]); // [0,2,3,1]
    }
  }

  return result;
}


// Write a function that, given:

// an amount of money
// an array of coin denominations

// computes the number of ways to make amount of money with coins of the available denominations.

// Example:
// for amount = 4 (4¢) and denominations = [1,2,3] (1¢, 2¢ and 3¢),
// your program would output 4 — the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function getRandomNumber (start, end) {
    return Math.floor(Math.random() * end) + start;
}

for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log('j is: ', j);
        }, j * 1000);
    })(i);
}
