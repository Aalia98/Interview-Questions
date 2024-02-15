frontend interview 7: 

[10x7]
1. Explain the difference between Promise.race and Promise.all. In what scenarios would you use one over the other?
2. How can you use Async Await in combination with Promise.all() to process multiple asynchronous tasks concurrently?
3. Can you explain the difference between parallelism and concurrency in the context of asynchronous programming?

function asyncTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 completed");
      resolve();
    }, 1000);
  });
}

function asyncTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 completed");
      resolve();
    }, 500);
  });
}

function asyncTask3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3 completed");
      resolve();
    }, 800);
  });
}
4. Chain these promises so that they execute in the order: Task 1, Task 2, Task 3.
5. Refactor the solution from above problem using the async/await syntax.
6. Execute all three tasks concurrently and log "All tasks completed" when all tasks are finished.

7. Create an asynchronous function asyncFilter that filters an array of values using an asynchronous predicate function. The result should be an array of values for which the predicate function resolves to true.