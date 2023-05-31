let t=1

console.log("Task"+t++)
let n=10
for (let i=1; i<=n; i++)
{
    console.log(i)
}

console.log("\nTask"+t++)
n=100
let sum=0;
for (let i=1; i<=n; i++)
{   
    sum+=i;
}
console.log(`sum=${sum}`)

console.log("\nTask"+t++)
n=10
let i=1
while (i<=n)
{
    console.log(i++)
}

console.log("\nTask"+t++)
n=50
for (i=1; i<=n; i++)
    if (i%2===0)
        console.log(i)

console.log("\nTask"+t++)
n=10
for (i=1; i<=n; i++)
{
    for (let j=1; j<=n; j++)
        console.log(`${i}*${j}=${i*j}`)
    console.log("")
}

console.log("\nTask"+t++)
n=7
fact=1;
for (i=1; i<=7; i++)
    fact*=i
console.log(fact)

console.log("\nTask"+t++)
n=10
let fib=[10];
fib[0]=1;
fib[1]=1;
for (i=2; i<n; i++)
{
    fib[i]=fib[i-1]+fib[i-2]
}
console.log(fib)

console.log("\nTask"+t++)
n=100
let j;
for (i=1; i<=n; i++)
{
    j=i-1;
    while (j>1)
    {
        if (i%j===0)
            break
        j--
    }
    if (j===1)
        console.log(i)
}

console.log("\nTask"+t++)
n=100
let m=[]
for (i=0; i<n; i++)
{
    m[i]=i+1
    if(m[i]%5===0)
        console.log(m[i])
}

console.log("\nTask"+t++)
n=10
sum=0
m=[1,2,3,4,5,6,7,8,9,10]
for (i=0; i<m.length; i++)
    sum+=m[i]
console.log(sum)