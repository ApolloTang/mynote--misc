## Creating a python virtual environment

```
$ which python3
/Users/apollotang/.pyenv/shims/python3
```


```
$ mkdir my-python-enviroment && cd $_
$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ python3 -m pip install <package-name>
(venv) $ deactivate
```
Ref: [https://realpython.com/python-virtual-environments-a-primer/](https://realpython.com/python-virtual-environments-a-primer/)

## Installing packages in a python virtual environment from requirement.txt

```
$ python -m venv venv
$ . venv/bin/activate
(venv) $ pip install -r requirements.txt
```



## Naive way to create requirement.txt of the project

:warning: This is a naive way to create the `requirements.txt` file. 

```
(venv) $ pip freeze --local > requirements.txt
```

The `--local` flag mean you only want to generate dependencies installed in the project's virtual environment.

## Better way to create requirement.txt for the project

To Read:
https://stackoverflow.com/questions/31684375/automatically-create-requirements-txt



