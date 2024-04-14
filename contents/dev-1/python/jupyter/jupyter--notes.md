# How to start a Jupyter project

## With venv

Type the following in  terminal:
```
mkdir myjupyter && cd $_
python -m venv venv
. venv/bin/activate
pip install jupyter
jupyter notebook
```

## With pipenv

Type the following in  terminal:
```
mkdir myjupyter && cd $_
PIPENV_VENV_IN_PROJECT=1
pipenv install jupyter
pipenv run jupyter notebook
```

## Add .gitignore:

```
cat << EOF >> .gitignore
.venv
venv
.ipynb_checkpoints
EOF
```
