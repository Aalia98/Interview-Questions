## Javascript interview 8: [2/55]

[12x5]
1. var obj1 = {
  value: 100,
  getValue: function() {
    console.log(this.value);

    for (let t = 0; t < 3; t++) {
      setTimeout(function() {
        console.log(this.value);
      }, 1000 * t);
    }
  }
};

obj1.getValue();

[0]
2. var obj2 = {
  value: 200,
  getValue: function() {
    console.log(this.value);

    for (var u = 0; u < 3; u++) {
      setTimeout(function() {
        console.log(this.value);
      }, 1000 * u);
    }
  }
};

obj2.getValue();

[0]
3. var obj3 = {
  value: 300,
  getValue: function() {
    console.log(this.value);

    for (let v = 0; v < 3; v++) {
      setTimeout(() => {
        console.log(this.value);
      }, 1000 * v);
    }
  }
};

obj3.getValue();

[2]
4. var obj4 = {
  value: 400,
  getValue: function() {
    console.log(this.value);

    for (var w = 0; w < 3; w++) {
      setTimeout(() => {
        console.log(this.value);
      }, 1000 * w);
    }
  }
};

obj4.getValue();

[0]
5. const l = 300;
{
  const l = 310;
  console.log(l);
}
console.log(l);

[5]
6. let k = 270;
{
  let k = 280;
  k = 290;
  console.log(k);
}
console.log(k);


[5]
7. const g = 250;
{
  const g = 260;
  console.log(g);
}
console.log(g);


[0]
8. function outer() {
  for (var u = 330; u < 333; u++) {
    (function() {
      var currentValue = u;
      setTimeout(function() {
        console.log(currentValue);
      }, 1000 * (currentValue - 330));
    })();
  }
}

outer();

[0]
9. const t = 310;

(function() {
  console.log(t);

  if (true) {
    const t = 320;
  }

  console.log(t);
})();

[0]
10. var i = 130;

function outer6() {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

outer6();
i = 140;

[0]
11. var c = 40;

(function() {
  console.log(c);
})();

c = 50;