var keys = document.querySelectorAll('button');
var operators = ['+', '-', '×', '÷', '%', '^', ];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var functions = ['2nd', '!', '^', '\u221A', '\(', '\u03C0', '\)', 'log', 'tan', '\u221B', 'sin', 'cos', 'Inv', 'arcsin', 'arctan', 'arccos'];
var second = false;
var inverse = false;
var decimalAdded = false;
var newEq = false;
for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    var input = document.querySelector('#output');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;
    if (btnVal == '=') {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];
      equation = equation.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      if (operators.indexOf(lastChar) > -1 || lastChar == '.') equation = equation.replace(/.$/, '');
      if (equation) var res = eval(equation);
      console.log(input.innerHTML + ' ' + '=' + ' ' + res);
      newEq = true;
      input.innerHTML = res;
    } else if (newEq == true) {
      if (btnVal != '' && btnVal != '.' && btnVal != 'log' && btnVal != '2nd' && btnVal != '\u221B' && btnVal != 'tan' && btnVal != '\u03C0' && btnVal != 'AC' && btnVal != 'CE' && btnVal != 'Hist.' && btnVal != '!' && btnVal != '^' && btnVal != '\u221A' && btnVal != '+' && btnVal != '-' && btnVal != '%' && btnVal != '×' && btnVal != '÷' && btnVal != 'Inv' && btnVal != 'asin' && btnVal != 'atan' && btnVal != 'acos') {
        input.innerHTML = btnVal;
        newEq = false;
      } else if (btnVal == 'AC') {
        input.innerHTML = '';
        newEq = false;
        decimalAdded = false;
      } else if (btnVal == 'CE') {
        input.innerHTML = inputVal.substr(0, inputVal.length - 1);
        newEq = false;
      } else if (btnVal == 'Hist.') {
        input.innerHTML = 'Check Console (f12)';
        decimalAdded = false;
      } else if (btnVal == '\u03C0') {
        input.innerHTML = Math.PI;
        newEq = false;
        decimalAdded = true;
      } else {
        inputVal += btnVal;
        newEq = false;
      }
    } else if (operators.indexOf(btnVal) > -1) {
      var lastChar = inputVal[inputVal.length - 1];
      if (inputVal != '' && operators.indexOf(lastChar) == -1) input.innerHTML += btnVal;
      else if (btnVal == '-') input.innerHTML += btnVal;
      decimalAdded = false;
    } else if (btnVal == '.') {
      if (!decimalAdded) {
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    } else if (btnVal == 'CE') {
      input.innerHTML = inputVal.substr(0, inputVal.length - 1);
    } else if (btnVal == 'AC') {
      input.innerHTML = "";
      decimalAdded = false;
    } else if (btnVal == '\u221A') {
      var eq = inputVal.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      var beforeSqrt = eval(eq);
      var res = Math.sqrt(beforeSqrt);
      var inputConsole = eval(eq);
      if (input.innerHTML == '') {
        inputConsole = 0;
        res = 0;
      } else if (beforeSqrt < 0) res = 'Error';
      console.log('\u221A' + inputConsole + ' ' + '=' + ' ' + res);
      input.innerHTML = res;
      newEq = true;
    } else if (btnVal == 'Hist.') {
      input.innerHTML = 'Check Console (f12)';
      newEq = true;
      decimalAdded = false;
    } else if (btnVal == '!') {
      var eq = inputVal.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      var beforeFac = eval(eq);
      var res = 1;
      var ans = 'Overflow ';
      var inputConsole = eval(eq);
      if (beforeFac > 0 && beforeFac < 171 && beforeFac % 1 == 0 && beforeFac != 'Infinity' && beforeFac != 'NaN' && beforeFac != 'undefined') {
        for (var i = beforeFac; i > 0; i--) {
          res *= i;
          ans = res;
        }
      } else if (beforeFac < 0) {
        var neg = beforeFac * -1;
        inputConsole = neg;
        for (var i = neg; i > 0; i--) {
          res *= i;
          ans = res * -1;
        }
      } else if (beforeFac > 170) ans = 'Overflow';
      else ans = 'Error ';
      if (input.innerHTML == '') inputConsole = 0;
      if (beforeFac >= 0) console.log(inputConsole + '!' + ' ' + '=' + ' ' + ans);
      else console.log('-' + '\(' + inputConsole + '\)' + '!' + ' ' + '=' + ' ' + ans);
      input.innerHTML = ans;
      newEq = true;
    } else if (btnVal == '2nd') {
      var log = document.getElementById('log');
      var tan = document.getElementById('tan');
      var cbrt = document.getElementById('CBRT');
      var sin = document.getElementById('sin');
      var inv = document.getElementById('inv');
      var cos = document.getElementById('cos');
      input.innerHTML += '';
      if (!second) {
        second = true;
        log.innerHTML = 'log';
        tan.innerHTML = 'tan';
        cbrt.innerHTML = '\u221B';
        cbrt.style.fontSize = '21pt';
        sin.innerHTML = 'sin';
        inv.innerHTML = 'Inv';
        cos.innerHTML = 'cos';
      } else {
        second = false;
        log.innerHTML = '!';
        tan.innerHTML = '\u03C0';
        cbrt.innerHTML = '\u221A';
        cbrt.style.fontSize = '18pt';
        sin.innerHTML = '\(';
        inv.innerHTML = '^';
        cos.innerHTML = '\)';
      }
    } else if (btnVal == '\u03C0') {
      var lastChar = inputVal[inputVal.length - 1];
      if (numbers.indexOf(lastChar) > -1 && inputVal != '') input.innerHTML += '×' + Math.PI;
      else input.innerHTML += Math.PI;
      decimalAdded = true;
    } else if (btnVal == 'log') {
      var eq = inputVal.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      var beforeLog = eval(eq);
      var res = Math.log10(beforeLog);
      var inputConsole = beforeLog;
      if (inputVal == '') {
        inputConsole = 0;
        res = '-Infinity';
      } else if (beforeLog < 0) res = 'Error';
      console.log('log10' + '\(' + inputConsole + '\)' + ' ' + '=' + ' ' + res);
      input.innerHTML = res;
      newEq = true;
    } else if (btnVal == 'tan') {
      var eq = inputVal.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      var beforeTan = eval(eq);
      var inputConsole = beforeTan;
      var res = Math.tan(beforeTan * (Math.PI / 180));
      if (inputVal == '') {
        inputConsole = 0;
        res = 0;
      } else if (beforeTan == '-Infinity') res = '-Infinity';
      else if (beforeTan == 'Infinity') res = 'Infinity';
      console.log('tan' + '\(' + inputConsole + '\)' + ' ' + '=' + ' ' + res);
      input.innerHTML = res;
      newEq = true;
    } else if (btnVal == '\u221B') {
      var eq = inputVal.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      var beforeCbrt = eval(eq);
      var res = Math.cbrt(beforeCbrt);
      var inputConsole = eval(eq);
      if (input.innerHTML == '') {
        inputConsole = 0;
        res = 0;
      } else if (beforeCbrt < 0) res = Math.cbrt(beforeCbrt * -1) * -1;
      console.log('\u221B' + inputConsole + ' ' + '=' + ' ' + res);
      input.innerHTML = res;
      newEq = true;
    } else if (btnVal == 'sin') {
      var eq = inputVal.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      var beforeSin = eval(eq);
      var inputConsole = beforeSin;
      var res = Math.sin(beforeSin * (Math.PI / 180));
      if (inputVal == '') {
        inputConsole = 0;
        res = 0;
      } else if (beforeSin == '-Infinity') res = '-Infinity';
      else if (beforeSin == 'Infinity') res = 'Infinity';
      console.log('sin' + '\(' + inputConsole + '\)' + ' ' + '=' + ' ' + res);
      input.innerHTML = res;
      newEq = true;
    } else if (btnVal == 'cos') {
      var eq = inputVal.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      var beforeCos = eval(eq);
      var inputConsole = beforeCos;
      var res = Math.cos(beforeCos * (Math.PI / 180));
      if (inputVal == '') {
        inputConsole = 0;
        res = 0;
      } else if (beforeCos == '-Infinity') res = '-Infinity';
      else if (beforeCos == 'Infinity') res = 'Infinity';
      console.log('cos' + '\(' + inputConsole + '\)' + ' ' + '=' + ' ' + res);
      input.innerHTML = res;
      newEq = true;
    } else if (btnVal == 'Inv') {
      if (second) {
        var tan = document.getElementById('tan');
        var sin = document.getElementById('sin');
        var cos = document.getElementById('cos');
        input.innerHTML += '';
        if (!inverse) {
          sin.innerHTML = 'asin';
          tan.innerHTML = 'atan';
          cos.innerHTML = 'acos';
          inverse = true;
        } else {
          sin.innerHTML = 'sin';
          tan.innerHTML = 'tan';
          cos.innerHTML = 'cos';
          inverse = false;
        }
      } else input.innerHTML += '';
    } else if (btnVal == 'atan') {
      var eq = inputVal.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      var beforeAtan = eval(eq);
      var inputConsole = beforeAtan;
      var res = Math.atan(beforeAtan) * (180 / Math.PI);
      if (inputVal == '') {
        inputConsole = 0;
        res = 0;
      } else if (beforeAtan == '-Infinity') res = '-Infinity';
      else if (beforeAtan == 'Infinity') res = 'Infinity';
      if (res >= 90 || res <= -90) res = 'Error';
      console.log('atan' + '\(' + inputConsole + '\)' + ' ' + '=' + ' ' + res);
      input.innerHTML = res;
      newEq = true;
    } else if (btnVal == 'asin') {
      var eq = inputVal.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      var beforeAsin = eval(eq);
      var inputConsole = beforeAsin;
      var res = Math.asin(beforeAsin) * (180 / Math.PI);
      if (inputVal == '') {
        inputConsole = 0;
        res = 0;
      }
      if (beforeAsin > 1 || beforeAsin < -1) res = 'Error';
      console.log('asin' + '\(' + inputConsole + '\)' + ' ' + '=' + ' ' + res);
      input.innerHTML = res;
      newEq = true;
    } else if (btnVal == 'acos') {
      var eq = inputVal.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      var beforeAcos = eval(eq);
      var inputConsole = beforeAcos;
      var res = Math.acos(beforeAcos) * (180 / Math.PI);
      if (inputVal == '') {
        inputConsole = 0;
        res = 0;
      }
      if (beforeAcos > 1 || beforeAcos < -1) res = 'Error';
      console.log('acos' + '\(' + inputConsole + '\)' + ' ' + '=' + ' ' + res);
      input.innerHTML = res;
      newEq = true;
    } else input.innerHTML += btnVal;
    e.preventDefault();
  }
}