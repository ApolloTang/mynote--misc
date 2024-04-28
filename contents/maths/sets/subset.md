# Subset



## All subsets of a set

Given, `A = {1,2,3,4}`

All the subsets of set A are:

``` 
{} (the empty set, also denote as Φ)

{1}, {2}, {3}, {4},

{1,2}, {1,3}, {1,4}, {2,3},{2,4}, {3,4},

{1,2,3}, {2,3,4}, {1,3,4}, {1,2,4}

{1,2,3,4}
```



Some important properties of subsets are: 

- If a set has “n” elements, then the number of subset is $2^n$
- An empty set, `Φ`, is a subset of any given set.
- Given a set, it is considered a subset of itself.
  - This is a special subset and we called it **improper subset**, and it has a special notation: `{1,2,3,4} ⊆ {1,2,3,4}`.



## Types of Subsets

There are two kinds of subsets: 

- proper subset
- Improper subsets

#### Proper subset (WIP)

​	if a set contains `n` elements, then 



## Some confusion on the $ \subset $ symbol:

Given a set  $A =\lbrace1,2,3\rbrace$​ ,  we know that one of its subset is set $A$ itself.  We sometime mistakenly describe this relation with wrong notation:

$$
\lbrace 1,2,3 \rbrace \subset A
$$

The above is a wrong usage of the symbol  $\subset$.  The symbol  $\subset$  is used to denote **proper** subset.  The correction notation is

$$
\lbrace 1,2,3 \rbrace \subseteq A
$$

The above reads:  *set $\lbrace 1,2,3 \rbrace$​ is an **improper** subset of $A$​*. **Improper subset** implies, the two set in the relationship are identical.  Thus, given two sets $A =\{1,2,3\}$​  and  $B =\{1,2,3\}$​,  since $A = B$  we can write: 

$$
A \subseteq B
$$

When we say *set $A$ is an **proper** subset of $B$*:
$$
A \subset B
$$
$A$ and $B$ are not identical, $A \neq B$. 

- [elementary set theory - What exactly is an improper subset? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/2370884/what-exactly-is-an-improper-subset) 

- [Subsets- Definition, Symbol, Proper and Improper Subset | Power Set](https://byjus.com/maths/subsets/)
-  [Set Theory Symbols (Sets Symbols and Examples)](https://byjus.com/maths/set-theory-symbols/) 
