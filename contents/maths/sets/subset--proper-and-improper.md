# Subset

This article is my attempt to clarify what an improper subset is.

## Improper and proper subset 

When we say set $A$ is a subset of set $B$, we mean every element in $A$ is also an element in $B$.

For example, given a set $B = \lbrace 1,2,3,4 \rbrace$, if say $A$ is a subset of $B$, then $A$ can be any of the following: 

``` 
{} 

{1}, {2}, {3}, {4},

{1,2}, {1,3}, {1,4}, {2,3},{2,4}, {3,4},

{1,2,3}, {2,3,4}, {1,3,4}, {1,2,4}

{1,2,3,4}
```

If a given set contains $n$ elements, then there are $2^n$ possible sets that can be the subset of $B$. 

Notice that the definition of a subset allows two identical sets to be subsets of each other. Thus, every set is a subset of itself. 

If we let the symbol $A_i$ be the subset identical to $B$:

$$
A_i = B,
$$

and the symbol $A_u$ the remaining $2^n - 1$ unidentical subsets of $B$: 

$$
A_u \neq B,
$$

we can write: 

$$
A = (A_i \cup A_u) \subseteq B.
$$

The relationship between $A_u$ and $B$ is written as:

$$
A_u \subset B.
$$

The symbol $\subset$ is called the **proper subset**, and the above is read: $A_u$ is a proper subset of $B$. The relationship between $A$ and $B$ written as:

$$
A \subseteq B
$$

The symbol $\subseteq$ is called the **improper subset**, and the above reads: $A$ is an improper subset of set $B$. 

It seems that when people say $X$ is a subset of $Y$, they mean $X$ is an improper subset of $Y$.
					
## References 

- [math-only-math.com/subset.html#google_vignette](https://www.math-only-math.com/subset.html#google_vignette)
- [quora.com/Is-every-set-a-superset-of-itself](https://www.quora.com/Is-every-set-a-superset-of-itself)
- [elementary set theory - What exactly is an improper subset? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/2370884/what-exactly-is-an-improper-subset) 

- [Subsets- Definition, Symbol, Proper and Improper Subset | Power Set](https://byjus.com/maths/subsets/)
-  [Set Theory Symbols (Sets Symbols and Examples)](https://byjus.com/maths/set-theory-symbols/) 
