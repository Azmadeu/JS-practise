var arrays = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func) {
    return func.name + " " + func(arr);
}

function inBetween(a, b) {
    return function inBetween(arr) {
        var result = [];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= a && arr[i] <= b) {
                result.push(arr[i]);
            }
        }
        return result;
    };
}

function inArray(array) {
    return function inArray(arr) {
        var result = [];

        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (arr[i] === array[j]) {
                    result.push(arr[i]);
                }
            }
        }
        return result;
    };
}

console.log(filter(arrays, inArray([1, 2, 3])));
console.log(filter(arrays, inBetween(3, 7)));

var calculator = {
    read: function () {
        // calculator.a = +prompt("Введите число");
        // calculator.b = +prompt("Введите число");
        calculator.a = 5;
        calculator.b = 5;
    },

    sum: function () {
        return calculator.a + calculator.b;
    },

    mul: function () {
        return calculator.a * calculator.b;
    }
};

calculator.read();
console.log("sum: " + calculator.sum());
console.log("mul: " + calculator.mul());

function Calculated() {
    this.read = function (a, b) {
        this.a = a;
        this.b = b;
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    }
}

let calculated = new Calculated();

calculated.read(5, 8);
console.log(calculated.sum());
console.log(calculated.mul());

function Accumulator(value) {
    this.read = function () {
        // value += +prompt("+");
        value += 5;
    };

    this.value = function () {
        return value;
    }
}

let accumulator = new Accumulator(5);

accumulator.read();
accumulator.read();
console.log("summ of all arguments: " + accumulator.value());

function Calculator() {
    var methods = {
        "-": function (a, b) {
            return a - b;
        },
        "+": function (a, b) {
            return a + b;
        }
    };

    this.calculate = function (string) {
        var str = string.split(' '),
            a = +str[0],
            op = str[1],
            b = +str[2];
        return methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        methods[name] = func;
    }
}

var calc = new Calculator;

console.log(calc.calculate("14 + 2"));
console.log(calc.calculate("5 - 2"));
calc.addMethod("*", function (a, b) {
    return a * b;
});
console.log(calc.calculate("10 * 9"));

var user = {};

Object.defineProperty(user, "fullName", {
    get: function () {
        return this.firstName + ' ' + this.surName;
    },

    set: function (value) {
        var split = value.split(' ');
        this.firstName = split[0],
            this.surName = split[1]
    }
});

user.fullName = "Василий Дятлов";
console.log("fullname: " + user.fullName);
user.surName = "Пупкин";
console.log("surname change: " + user.surName);
console.log("fullname: " + user.fullName);

function Article() {
    this.created = new Date();
    Article.count++;
    Article.last = this.created;

    Article.showStats = function () {
        return this.last + " Всего: " + Article.count;
    };
}

Article.count = 0;

console.log(new Article());
console.log(Article.showStats());
console.log(new Article());
console.log(Article.showStats());

function sumArgs() {
    var arr = [].slice.call(arguments);
    return arr.reduce(function (a, b) {
        return a + b;
    })
}

function mulArgs() {
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    })
}

console.log("call: " + sumArgs(1, 2, 3));
console.log("call: " + mulArgs(2, 5, 10));

function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}

console.log("func + args, max: " + applyAll(Math.max, 2, -2, 3));
console.log("func + args, min: " + applyAll(Math.min, 2, -2, 3));

// var user = {
//     login: 'Василий',
//     password: '12345',
//     loginDone: function (result) {
//         alert(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
//     },
//     checkPassword: function () {
//         ask("Ваш пароль?", this.password,
//             function () {
//                 user.loginDone(true);
//             },
//             function () {
//                 user.loginDone(false);
//             }
//         );
//     }
// };

function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: "Сергей",
    password: '12345',
    loginOk: function () {
        alert('Добро пожаловать!');
    },
    loginFail: function () {
        alert('Ошибка входа!');
    },
    checkPassword: function () {
        ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
    }
};


var serge = user;
user = null;
serge.checkPassword();

var fibonacci = function f(n) {
    return (n > 2) ? f(n - 1) + f(n - 2) : 1;
};

console.log(fibonacci(10));

