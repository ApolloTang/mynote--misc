# Get started with Jupyter



## Installing Jupyter see:

 [Project Jupyter | Installing Jupyter](https://jupyter.org/install) 



## Installing with pipenv (2024)

```
PIPENV_VENV_IN_PROJECT=1
pipenv install jupyter
pipenv run jupyter lab
```

In 2024, we should use **JupyterLab** instead of **jupyter notebook**, the  JupyterLab has more feature over the notebook.



## Add .gitignore:

```
cat << EOF >> .gitignore
.venv
venv
.ipynb_checkpoints
EOF
```

Note:

- `.ipynb_checkpoints` is a jupyter's log file for your edit [ref](https://stackoverflow.com/questions/46421663/what-are-jupyter-notebook-checkpoint-files-for)







## Previous note before 2024

### With venv

Type the following in  terminal:
```
mkdir myjupyter && cd $_
python -m venv venv
. venv/bin/activate
pip install jupyter
jupyter notebook
```

### With pipenv

Type the following in  terminal:
```
mkdir myjupyter && cd $_
PIPENV_VENV_IN_PROJECT=1
pipenv install jupyter
pipenv run jupyter notebook
```

