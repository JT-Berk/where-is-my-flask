import json
import collections
from flask import Flask, flash, redirect, render_template, request, session, abort
from datetime import datetime
from flaskr import app


@app.route('/')
@app.route('/home')
def home():
    return(render_template('home.html'))


# prevent cached responses
if app.config["DEBUG"]:
    @app.after_request
    def after_request(response):
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
        response.headers["Expires"] = 0
        response.headers["Pragma"] = "no-cache"
        return response
