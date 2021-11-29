import json
import collections
from flask import Flask, flash, redirect, render_template, request, session, abort
from datetime import datetime
from flaskr import app


@app.route('/login')
def login():
    return(render_template('login.html'))
