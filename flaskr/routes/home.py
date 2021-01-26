import json
import collections
from flask import Flask, flash, redirect, render_template, request, session, abort
from datetime import datetime
from flaskr import app


@app.route('/')
@app.route('/home')
def home():
    return(render_template('home.html'))
