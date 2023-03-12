This repository aims to delve deeper into the study of DSA .
the topics covered include : 
* Algorithm-> math, sort , search, misc. algorithm, 
* Measuring performance ,
* time and space complexity
* big o notation

 prerequisites -> modern js
 
 Algorithm-set of well-defined instructions to solve a particular problem.
 characteristics :
 * have well defined inputs and outputs
 * each step should be clear and unambigous
 * it should be language independent

importance of learning algorithms 
learning algorithms translate to learning different techniques to efficiently solve problems : one problem can be solved in different ways using different algorithms with each comming with its own tradeoffs of performance

How to measure an algorithm/Analysis

- Generaly when we talk about performance we mostly refer to an abolute measure .
- However, the absolute time of an algorithm cannot be preicted as it depends on a number of factors:
    * programing language used to implement the alorithm
    * the computer program runs on
    * other programs running concurrently
    * quality of the operating system
- we evalute its performance in terms of its input size. is of two types:
    * time complexity- amount of time an algorithm takes to run as a function of input size
    * amount of memory taken by an algorithm to run, as a function of input size
by evaluating against input size , the analysis is not only machine independent butthe comparison is also more appropriate.


How we represent complexity
a. Asymptotic notations 
- Mathematical tools to represent time and space complexity:
* Big-O Notation (O-notation) - worst case complexity
* Omega notation -best case complexity
* Theta notation - average case complexity


O-notation (linear time complexity) -> (as input increases so does the time)
decribes complexity of an algorithm using algebraic terms
characteristics
* expresed in terms of input
* focused on the bigger picture without getting caught up in minute details.
O-notation time complexity

calculate for the one below

function summation(n){ //when n = 4
    let sum = 0;   //executes once
    for(let i = 1; i <= n; i++){
        sum+=1; // executes four times (n times)
}
return sum; // executes once
}

<!-- thus tme complexity is n+2 -->

<!-- involes counting the number of times a statement executes baed on the input size -->



calculate time complexity for the one below

function sum(n){
    return (n*(n+1))/2;
}

<!-- sol -->
time complexity 
O(1) -constant


in the case there are two nested loops, time complexity is quadratic O(n^2)

for(i=1;i<=n;>;i++){
    for (j=1; j<=i; j++){
    }
}

<!-- sol -->

O(n^2) - quadratic

in the case there are three nested loops, time complexity is cubic O(n^3)

for(i=1;i<=n;>;i++){
    for (j=1; j<=i; j++){
        for (k=1; k<=j; k++){
    }
    }
}

<!-- sol -->

O(n^3) - cubic


if input size reduces by half every iteration time complexity is logarithmic
O(logn)- logarithmic



Space complexity

when algorithm does not need extra memory or mem needed does not depend on input size, it complexity is constant  - O(1) eg: sorting algortihms which sort within the array without utilising additional arrays

O(n) - linear space complexity (extra space needed grows as the size grows)
O(logn)- logarithmic space complexity (extra space needed grows but not as the size grows)



Big-O time complexity of objects

an object is a collection of key value pairs
eg: const Person={
    firstName:'kevin',
    lastName:'otieno'
}

if you want to insert,access or remove a property time complexity is constant.
insert-O(1)
Remove - O(1)
access-O(1)

searching for properties is linear
search - O(n)

object.keys() - O(n)
object.values() - O(n)
object.entries() - O(n)


Array Big-O
arrays are ordered collection of values

insert/remove ate end -O(1)
insert/remove at begining -O(n) - becasue index has to be reset for every remaining element of the array
access - O(1)
search - O(n)
push/pop - O(1)
shift/unshift/concat/slice/splice - O(n)
forEach/map/filter/reduce - O(n)

Math Algorithm
* fibonacci sequence
* factorial of a no
* prime number
* power of two
* recursion


Fibbonaci sequence
problem- given a no 'n' find the first 'n' elements of the fibonacci sequence
def- fibonacci sequence is a sequence in which each no is the sum of two preceeding ones with the first two being 0 and 1
ie:fibonnaci(2) - [0,1]
   fibonnaci(3) - [0,1,1]
   fibonnaci(7) - [0,1,1,2,3,5,8]


// prime number
// given natural number 'n' determine if the number is prime or not
// prime number is a natural number greater than 1 that is not a product of two smaller natural numbers /dvisible by 1 andd itself

function isPrime(n){
    if(n<2){
        return false
    }
    for (let i=2; i<n; i++){
        if(n%i==0){
            return false
        }
        return true
    }
}

// O(n)
console.log(isPrime(5)); //true
console.log(isPrime(4)); false
console.log(isPrime(7)); true


Optimized primality test

integers larger than the square root do not need to be checked because wherever 'n=a*b' , one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'

eg  n = 24 a=4 b=6 squareroot = 4.89 a is less than or equal to root of n
 n = 35 a=5 b=7 squareroot = 5.91 a is less than or equal to root of n


 therfore optimizing the isprime code will be as follows

 function isPrime(n){
    if(n<2){
        return false
    }
    for (let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
        return true
    }
}

Big-O =O(sqrt(n))



// power of two
// given a positive ineger n determine whether number is power of 2 or not
// an ineger is a power of 2 if there exists an integer 'x' such tat 'n'==='2^x'

pseudocode 

let n =8
8/2 =4(remainder 0)
4/2 =2(remainder 0)
2/2 =1(remainder 0)
if rem is not 0 in any step 'n' is not power of 2
if remainder is 0 and n comes down to 1 eventually, n is a power of 2


// Bitwise Powr of tow
// 1->1 2->10  3->100 4->1000


<!-- recusrsion -->
problem solving technique where solution depends on a solution to smaller instances of the same problem
it is when a function calls itself 
<!-- points about recusrion -->

* every recursive solution needs to have a base case - a condition to terminate the recursion
* it might simplify solving a prolem but does not translate to a faster solution.



Search algorithm

linear search 
binary search

linear search
given an array of n elements and a target of t find the value of tin the array. return -1 if element t is not found.

start at first element of array and move towards the last
at each element, check if the element is equal to the target value
if element found return index of element.
if not return -1


binary search
given a sorted array of'n' elements and a target element 't' find the index of t i the array. return -1 if target element is not found

pseudocode

if the array is empty return -1
if the array has elements , find the middle element in the array.if target is equal to the middle element return its index
if target is less than the middle element, binary search left half of array
if target is greater tgan mid element, binary search right half of the array