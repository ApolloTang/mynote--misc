[https://dev.to/frostming/a-review-pipenv-vs-poetry-vs-pdm-39b4](https://dev.to/frostming/a-review-pipenv-vs-poetry-vs-pdm-39b4)


> Pipenv doesn't play well due to its design choice that it integrates with other third-party tools and libraries instead of building its own. Pipenv can only wrap, combine, and do a little improvement on those upstream libraries. Moreover, **Pipenv doesn't meet the goal of reproducible environment** as well. It can produce a determinsitic installation setup on the source system but it is not a good idea to deploy to a different system without a careful check.
>
> On contrast, Poetry and PDM are both doing great on performance and correctness, PDM is even better especially on the time cost and compatible dependency resolving.



[https://www.infoworld.com/article/3561758/how-to-manage-python-projects-with-pipenv.html](https://www.infoworld.com/article/3561758/how-to-manage-python-projects-with-pipenv.html)

> Note that unlike other Python project management tools ([such as Poetry](https://www.infoworld.com/article/3527850/better-python-project-management-with-poetry.html)), Pipenv does not manage the “scaffolding” of your project. That is, Pipenv does not create the internal structure of the project directory with mock tests, documentation stubs, etc., but focuses chiefly on package and environment management. This makes Pipenv a good choice if you just want a tool to focus on virtual environments and packages, and not an all-in-one solution.