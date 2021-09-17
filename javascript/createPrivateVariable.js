function makeCounter(counterName) {
  let count = 0;
  let name = counterName;

  let counterObj = {
    increment: function () {
      ++count;
      console.log("%s :  %d", name, count);
      return count;
    },
    decrement: function () {
      --count;
      console.log("%s :  %d", name, count);
      return count;
    },
  };

  return counterObj;
}

counter1 = makeCounter("counter1");
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();
