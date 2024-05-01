# Subset



## Improper and proper subset 

Given a set $A = \lbrace 1,2,3,4 \rbrace$, the following are the subset of $A$: 

``` 
{} (the empty set, also denoted as Φ)

{1}, {2}, {3}, {4},

{1,2}, {1,3}, {1,4}, {2,3},{2,4}, {3,4},

{1,2,3}, {2,3,4}, {1,3,4}, {1,2,4}

{1,2,3,4}
```
If A set has $n$ elements, we say "the cardinal of $A$ is $n$" and we can write:

$$
n = |A|
$$

The number of possible subsets is always $2^n$ (reference of proof required).  

If we use the symbol $B$ to represent any of the possible subsets of $A$,  we can write:

$$
B \subseteq A
$$

The symbol $\subseteq$ is called the **improper subset**, and the above reads: "$B$ is an improper subset of set $A$." 

Given a set, there is always exactly one improper subset (in the example above $\lbrace 1,2,3,4 \rbrace$) whose number of elements is the same as that of $A$ itself:

$$
|B| = |A| = n
$$

In other word, $B$ and $A$ is identical:

$$
B = A
$$

All other subsets, where: 

$$
|B| < |A| 
$$

or $B$ and $A$ not identical:

$$
B \neq A
$$ 

is called the **proper subset**. The proper subset can be denoted with the $\subset$ notation: 

$$
B \subset A
$$

The above is read: "$B$ is a proper subset of $A$."

Given a set with $n$ elements, there are always $2^n$ - 1 proper subsets.
					
## References 

- [elementary set theory - What exactly is an improper subset? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/2370884/what-exactly-is-an-improper-subset) 

- [Subsets- Definition, Symbol, Proper and Improper Subset | Power Set](https://byjus.com/maths/subsets/)
-  [Set Theory Symbols (Sets Symbols and Examples)](https://byjus.com/maths/set-theory-symbols/) 
