# AlgoCasts

This repository contains notes and exercises from the Udemy course
"[The Coding Interview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/)"
by Stephen Grider. I forked it from
[his repo](https://github.com/StephenGrider/algocasts) so that I can save my
solutions to the problems.

## Setup

`sudo npm i -g jest`

## Usage

```sh
jest reversestring --watch
```

# The Interview Process

Phase 1: Contact

Company evaluates:

- Your work experience
- Your side projects
- Information from any shared contacts

Phase 2: Interview

- Culture fit
- Can you code? - the make or break criteria
  - Take home assignment
  - Pair programming
  - Whiteboarding - tool of preference for many large companies and the area
    where you can most improve, through practice

When you begin practicing, it's more important that you see a lot of problems
and get familiar with the process for solving them than it is to get the right
answer. Watch the solution if you get too frustrated.

## reversestring

My first alternative solution was slightly different from Stephen's. Are writes
to the array (my approach) better or worse than allocating a new immutable
string on each iteration (his approach)? Profiling should be the ultimate guide
but, for programmer happiness, his approach of only using strings felt cleaner.

### Problem-specific Lessons

- The simplest solution requires knowing the standard library API to go from
  string to array to string
- `reduce` is an unexpected solution

### General Lessons

- Avoid the traditional for loop when you can because there are too many ways to
  make simple mistakes; `for...of` is easier.
- use the debugger statement and node inspect to troubleshoot
