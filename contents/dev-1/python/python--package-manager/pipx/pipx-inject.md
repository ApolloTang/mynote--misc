## Add (inject) package to virtual environment

The pipx inject command is used to add additional packages into an existing pipx environment. 

**Syntax:**

```
pipx inject <package_name> <dependencies>
```

- <**package_name**>: The name of the package already installed with pipx.

- <**dependencies**>: The additional packages you want to add to the environment.

**Example:**

You realize you need pandas and matplotlib in the same environment to use with jupyter. Instead of creating a new environment, you can inject these packages into the existing jupyter environment:

```
pipx inject jupyter pandas matplotlib
```

**Note:** 

pipx does not currently support removing individual injected packages without removing the entire environment.