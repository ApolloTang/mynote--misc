## Using tox

**tox** let  you test your project agaist multiple version of python. 

Demo with flask:

```
git clone https://github.com/pallets/flask
cd flask
python -m venv venv
. venv/bin/activate
```

After activation you simply install `tox` and run it:

``` 
python -m pip install tox
tox
```

Note that you don't have to install any dependency other then `tox` itself. 

The specification which version of python the project should be tested on is in `tox.ini`.

