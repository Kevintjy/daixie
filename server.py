from flask import Flask, request, jsonify, render_template, send_from_directory, Blueprint
import os.path
from database.models import *
from app import app
from database import db

db.create_all()

@app.route("/")
def my_index():
    return render_template("index.html")

@app.route('/<path:path>/')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return render_template("index.html")

@app.route("/register/register", methods=["POST"])
def register():
    """
    {"username" : "user1", "password": "123qwe", "type"=0}
    """
    data = request.json
    username = data["username"]
    password = data["password"]
    type = int(data["type"])
    user = User(username=username, password=password,type=type)
    db.session.add(user)
    try:
        db.session.commit()
    except:
        return jsonify("fail to add in db"), 500
    return jsonify("success"), 200

@app.route("/login", methods=["POST"])
def login_user():
    """
    {"username" : "user1", "password": "123qwe", "type":1}
    """
    data = request.json
    username = data["username"]
    password = data["password"]
    type = int(data["type"])

    if not User.query.filter_by(username=username, type=type).first():
        return jsonify({"result": 0})
    elif not User.query.filter_by(username=username, password=password, type=type).first():
        return jsonify({"result": 1})
    else:
        user = User.query.filter_by(username=username, password=password, type=type).first()
        if user.account_state == 0:
            return jsonify({"result": 2})
        else:
            return jsonify({"result": 3})


#
# @app.route("/send_post", method=["POST"])
# def send_post():
#     """
#     {"username" : "user1", "title": "some titles", \
#     "description": "some description", "deadline": DATE(not sure), \
#     "price: 300}
#     """
#     pass
#
#
# @app.route("accept_post", method=["POST"])
# def accept_post():
#     pass
#
# @app.route("get_all_posts", method=["GET"])
# def get_all_posts():
#     pass
#
# @app.route("edit_post", method=["PUT"])
# def edit_post():
#     pass
#
# @app.route("get_self_post", method=["PUT"])
# def get_self_post():
#     data = request.get_json()
#     if data["type"] == 0:
#         pass
#     else:
#         pass

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=os.environ.get('PORT', 5000))

