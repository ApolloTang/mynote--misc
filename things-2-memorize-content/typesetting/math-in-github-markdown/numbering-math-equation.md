# Numbering Equation in github's markdown



## Using `\tag` to number equations

You can use `\tag` to number equations in a math code sandbox:

```
$$
g = \int_a^b f(x)dx \\
a = b + c
\tag{44}
$$
```

*Result:*

$$
g = \int_a^b f(x)dx \\
a = b + c
\tag{44}
$$

In the above, only one `\tag{}` is allowed per code sandblock. 



## Multiple `\tag` in a math code sandbox

If you want to use multiple `\tag{}`, wrap them in `\begin{align}...\end{align}`:

```
$$
\begin{align}
  g &= \int_a^b f(x)dx \tag{3a} \\
  a &= b + c           \tag{3b}
\end{align}
$$
```

*Result:*

$$
\begin{align}
  g &= \int_a^b f(x)dx \tag{3a} \\
  a &= b + c           \tag{3b}
\end{align}
$$

:warning: **Note:** the above does not work in KaTeX, but will work in MathJax



## Referencing equations:

You can reference an equation using `\ref`:

```
$$
\begin{align}
  g &= \int_a^b f(x)dx      \label{eq4}\tag{4} \\
  a &= b + c                \label{eq2}\tag{2}
\end{align}
$$
See equation$(\ref{eq4})$ and equation$(\ref{eq2})$
```

*Result:*
$$
\begin{align}
  g &= \int_a^b f(x)dx \label{eq4}\tag{4} \\
  a &= b + c \label{eq2}\tag{2}
\end{align}
$$
See equation$(\ref{eq4})$ and equation$(\ref{eq2})$



`\ref` only works in in MathJax;  since github uses MathJax this should work but currently (2022.08.25) `\ref` is broken on github. see issue: https://github.com/shd101wyy/markdown-preview-enhanced/issues/251 



## Auto numbering



see issue: https://github.com/shd101wyy/markdown-preview-enhanced/issues/251 

