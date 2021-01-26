from flask import Flask

app = Flask(__name__)

app.version = "1.0.0"
app.secret_key = "6969"

import flaskr.routes.home