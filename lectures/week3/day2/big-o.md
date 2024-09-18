# Big O

## How do we rate algorithms?

We can't rely on the amount of time an algo takes. Too many differences in hardware and software.

We instead look at how many operations the algo performs

## Time and Space Complexity

Space Complexity

- How much space does the algorithm take up
- generally we tend to not focus on this except for situations where its important, such as embedded software
- not asked about in interviews that much

Time Complexity

- How many operations does the algo perform?
- now we can rate an algo regardless of hardware or software differences
- can expect to be asked about in interviews

## Big O Notation

Big O is a way to categorize your algorithms time or memory requirements based on input.

- Not meant to be an exact measurement
- Not tell you how many CPU Cycles it takes
- Will generalize the growth of your algorithms
- e.g. "Oh of N", algo will grow linearily based on input
- Another way to say it: "As you input grows, how fast does computation or memory grow?"

Why do we use it?

- Help make decisions about what data structures and algorithms we use.
- knowing how they perform can greatly help create the best possible program

Note:

- In the real world, memory growing is obviously not computationally free, but we generally don't think about that when thinking of Big O

### Example

```ts
// function takes a string and returns a number
// using typescript to simply show what the parameter and return value data types are
function sumCharCodes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }

  return sum;
}
```

What is the Big O for the above code example?

- What would happen if the string grew in size by 50%? the function would take 50% longer.
- this is linear so O(n)

**Simple trick for figuring out complexity**

- Look for loops

### Another Example

If the previous was O(n) what is this?

```ts
// function takes a string and returns a number
function sumCharCodes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }

  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }

  return sum;
}
```

What is the Big O for this function?

- Technically this is O(2n), but we drop constants

### Constants

Constants are dropped

- Big O is meant to describe the upper bound of an algo
- eventually with a big enough input, the constant becomes irrelevant
- practically constants are important, but theoretically they are not

Example of why constants are not theoretically not important:
| N | O(10N) | O(N ^ 2) |Notes|
|---|--------|---------|---|
| 1 | 10 | 1 | n^2 is smaller|
| 5 | 50 | 25 |n^2 is smaller|
| 10 | 100 | 100 | n^2 is the same size|
| 100 | 1,000 | 10,000 | n^2 is 10x bigger|
| 1000 | 10,000 | 1,000,000 | n^2 is 100x bigger|
| 10000 | 100,000 | 100,000,000 | n^2 is 1000x bigger|

Practical vs Theoretical Differences

- Just because N is faster than N^2, doesn't mean practically its always faster for smaller input
- we drop constants. O(100N) is faster than O(N^2), but with a small enough input O(N^2) may be faster

### What about this?

```ts
function sumCharCodes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i);
    // Capital E
    if (charCode === 69) {
      return sum;
    }

    sum += charCode;
  }

  return sum;
}
```

This algo is still O(n)

- Especially in interviews, we always think in worst case
- worst case in this scenario is that there is no E in the string or the E is at the end

### Common Complexities

[Big O Cheat Sheet](https://www.bigocheatsheet.com/)

- O(1) - constant time
- O(logn)- base 2 log
- O(n)
- O(nlogn)
- O(n^2)
- O(2^n) - effectively can't run on modern traditional computers
- O(n!) - effectively can't run on modern traditional computers

### Some Other examples of different complexities

#### O(N^2)

```ts
// function takes a string and returns a number
function sumCharCodes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      sum += n.charCodeAt(i);
    }
  }

  return sum;
}
```

### O(N^3)

```ts
// N^3 is like multiplying matrices
function sumCharCodes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      for (let k = 0; k < n.length; k++) {
        sum += n.charCodeAt(i);
      }
    }
  }

  return sum;
}
```

#### O(n log n)

- Quicksort (JS Stack)

#### O(log n)

- Binary Search Trees (Java/C# Stack)

---

## Three Important Points

1. Growth is with respect to the input
2. Constants are dropped
3. Worst case is _usually_ the way we measure
