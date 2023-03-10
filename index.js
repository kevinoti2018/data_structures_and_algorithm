// problem- given a no 'n' find the first 'n' elements of the fibonacci sequence
// def- fibonacci sequence is a sequence in which each no is the sum of two preceeding ones with the first two being 0 and 1
function fibonacci(n){
    // 0 and one are constants thus we create an array to them
    const fib = [0,1] ;
    for(let i= 2; i<=n;i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
// O(n)
// console.log(fibonacci(3))
// console.log(fibonacci(9))
// console.log(fibonacci(5))


// factorial
// give an integer 'n' find the factorial of that integer
// sol - factorial of a non-negative inter 'n' denoted n! ,  is the product of all positive integers less than or equal to 'n' , factorial of 0 is 1 
// factorial of 0 is 1 .

function factorial(n){
    let result = 1
    for(let i =2 ; i<=n; i++){
        result= result*i
    }
    return result
}

// console.log(factorial(0));
// console.log(factorial(4)); 
// console.log(factorial(7));

// prime number
// given natural number 'n' determine if the number is prime or not
// prime number is a natural number greater than 1 that is not a product of two smaller natural numbers /dvisible by 1 andd itself

function isPrime(n){
    if(n<2){
        return false
    }
    for (let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
        return true
    }
}
// O(n)
// console.log(isPrime(5));
// console.log(isPrime(4));
// console.log(isPrime(7));


// power of two
// given a positive ineger n determine whether number is power of 2 or not
// an ineger is a power of 2 if there exists an integer 'x' such tat 'n'==='2^x'

function  isPowerofTwo(n){
    if(n<1){
        return false
    }
    while (n>1) {
        if(n%2 !== 0){
            return false
        }
        n=n/2
    }
    return true
}
// O(log(n))
// console.log(isPowerofTwo(8));
// console.log(isPowerofTwo(6));



// Bitwise Power of two
// 1->1 2->10  3->100 4->1000
function isPowerofTwoBitwise(n){
    if(n<1){
        return false
    }
    return (n&(n-1))==0
}

// console.log(isPowerofTwoBitwise(8));

// Recursie fibonacci sequence
//  given a number 'n' , find the nth element of the fibonacci sequence

function recursiveFibonacci(n){
    if(n<2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}
// O(2^n)


// console.log(recursiveFibonacci(9));


// recusrive factorial
// given an integer n find the facorial of the integer
// n!=n*(n-1)!

function factorialRecursive(n){
    if(n==0){
        return 1
    }
    return n*factorialRecursive(n-1)
}

// console.log(factorialRecursive(0));

// O(n)



// Search algorithm
// linear  search
// given an array of n elements and a target of t find the value of tin the array. return -1 if element t is not found.
function linearSearch(arr, target){
    for(let i=0; i<= arr.length; i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
// console.log(linearSearch([5,7,3],3));
// console.log(linearSearch([4,5,9,77,90,3],77))
// O(n)


// binary search

function binarySearch(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length -1
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if(arr[middleIndex] == target){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex-1
        }else{
            leftIndex= middleIndex +1
        }
    }
    return -1
}
// O(logn)

console.log(binarySearch([3,4,5,9,77,90,],90))