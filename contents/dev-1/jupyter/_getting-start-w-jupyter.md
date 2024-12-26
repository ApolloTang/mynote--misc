# Get started with Jupyter



## Installing Jupyter see:

 [Project Jupyter | Installing Jupyter](https://jupyter.org/install) 



## Installing with pipenv (2024)

```
# initialized pipenv 
export PIPENV_VENV_IN_PROJECT=1 
pipenv install --python 3.12

# activate pipenv envirnment, to install and run jupyter
pipenv shell
pipenv install jupyter
pipenv run jupyter lab
```

In 2024, we should use **JupyterLab** instead of **jupyter notebook**, the  JupyterLab has more feature over the notebook. [See this](https://stackoverflow.com/questions/50982686/what-is-the-difference-between-jupyter-notebook-and-jupyterlab)



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

- if you have create your project with pipenv,  it will create `.venv/.gitignore` to ignore the `.venv/` folder.

   



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

