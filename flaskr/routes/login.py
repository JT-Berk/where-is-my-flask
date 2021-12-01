import json
import collections
from flask import Flask, flash, redirect, render_template, request, session, abort
from datetime import datetime
from flaskr import app,mongo


@app.route('/login_home')
def login_home():
    return(render_template('login.html'))


@app.route('/login', methods=["GET"])
def login():
    try:
        email = request.args.get("email")
        password = request.args.get("password")

        coll = mongo.db.users

        if email and password:
            print("data found")

            query = {"email": email,
                     "password": password}

            result = coll.find_one(query)
            print(result)

            if result:
                print("logged in")


            else:
                print("prompt user to make an account")

    except Exception as e:
        print(f"Error at login(): {e}")

    return request.data
