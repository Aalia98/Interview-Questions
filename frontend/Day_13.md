## Asynchronous Programming

# output based:

1. 0
async function fetchData() {
  console.log("Fetching Data...");
  return Promise.reject("Data Fetch Failed!");
}

async function example() {
  console.log("Start");
  const result = await fetchData().catch(error => console.error(error));
  console.log(result);
  console.log("End");
}

example();


output -> Start
Fetching Data...
undefined
End

Data Fetch Failed!

3. 5
async function example() {
  console.log("Start");
  await Promise.resolve();
  throw new Error("Custom Error");
  console.log("End");
}

example().catch(error => console.error(error.message));


output -> Start
Custom Error

5. (a) async function hello() { 5
        return "hello" 
 } 

 console.log(hello())

const dataPromise = getData();

dataPromise.then(res => console.log(res))

6. 0
async function fetchData() {
  console.log("Fetch Data Start");
  const result = await Promise.resolve("Data Fetched!");
  console.log("Fetch Data End");
  return result;
}

async function example() {
  console.log("Example Start");
  const result = await fetchData();
  console.log(result);
  console.log("Example End");
}

example();

output -> Example Start
Fetch Data Start
Fetch Data End
Data Fetched!
Example End

7. async function fetchData() {  0
  throw new Error("Data Fetch Failed!");
}

async function example() {
  console.log("Start");
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("End");
  }
}

example();

output -> Start
End

Data Fetch Failed!

8. async function example() { 0
  console.log("Start");
  const result = await Promise.all([
    Promise.resolve("Value 1"),
    Promise.reject("Error in Promise 2").catch(error => error),
    Promise.resolve("Value 3"),
  ]);
  console.log(result);
  console.log("End");
}

example();

9. Promise.reject('A')  - 0
  .catch(error => {
    console.error(error);
    return 'B';
  })
  .then(value => console.log(value))
  .finally(() => console.log('C'));
output -> B, C, A

10. Promise.resolve('A')
  .then(value => {
    console.log(value);
    return Promise.resolve('B');
  })
  .finally(() => console.log('C'))
  .then(value => console.log(value))
  .finally(() => console.log('D'));
output -> A,C,B,D

11. Promise.resolve('A') - 0
  .then(value => {
    console.log(value);
    return new Promise(resolve => setTimeout(() => resolve('B'), 1000));
  })
  .then(value => console.log(value))
  .finally(() => console.log('C'));
output -> A,B,C

JS interview 9: [0/55]

[0]
1. async function check(a,b) {
  const sum = await a===b;
  return sum;
}

console.log(check({}, {}))

[0]
2. const promise = new Promise(function(resolve, reject) {
  reject(Error(1));
});

promise.catch((err) => console.log(2))
promise.catch((err) => console.log(3))

[0]
3. const promise = new Promise(function(resolve, reject) {
    reject();
  });

  promise
  .then(() => console.log(1))
  .then(() => console.log(2))
  .then(() => console.log(3))
  .catch(() => console.log(4))
  .then(() => console.log(5))

[0]
4. const p = new Promise(function (resolve) {
    resolve(1)
    console.log(2);
});

p.then((data) => {
    console.log(data)
    return data + 1;
}).then((data) => {
    console.log(data)
});

setTimeout(() => console.log(4))
console.log(5);

[0]
5. function process() {
    return new Promise((resolve, reject) => {
        resolve(1)
        reject(2)
        resolve(3)
        console.log(4);
    });
}

function init() {
    process().then(data => console.log(data + 1))
    .catch(err => console.log(err))
}

init()

[0]
6. console.log(1);
setTimeout(() => console.log(2), 0)
setTimeout(() => console.log(3), 1)

let p = Promise.resolve()

for(let i=0;i<3;i++) {
    p.then(() => {
        setTimeout(() => {
            console.log(4);
            setTimeout(() => console.log(5), 0);
            p.then(() => console.log(6))
        }, 0)
        console.log(7);
    })
}

console.log(8);

[0]
7. console.log("start")

const promise = new Promise((resolve, reject) => {
    console.log(1);
})

promise.then(() => {
    console.log(2);
})

console.log("end");

[0]
8. console.log("start")

const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2)
    console.log(3);
})

promise.then(res => {
    console.log(res);
})

console.log("end");

[0]
9. const promise = new Promise(res => res(2));

promise.then(res => {
    console.log(res);
    return res * 2
}).then(res => {
    console.log(res);
    return res * 2
}).finally(res => {
    console.log(res);
    return res * 2
}).then(res => {
    console.log(res);
})

[0]
10. function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time, 'success' + time)
    });
}

Promise.race([delay(500), delay(100)]).then((data) => {
    console.log(data);
})

[0]
11. let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'p1')
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'p2')
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1200, 'p3')
})

let p4 = new Promise((resolve, reject) => {
    setTimeout(reject, 300, 'p4')
})

let p5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 800, 'p5')
})

let promise = Promise.all([p1.catch(function() {}),
    p2.catch(function() {}),
    p3.catch(function() {}),
    p4.catch(function() {}),
    p5.catch(function() {})])

promise.then(data => {
    data.forEach(res => console.log(res))
}).catch(error => console.log("error", error))