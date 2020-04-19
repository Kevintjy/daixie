from app import app
from flask import request, jsonify
from database import db
from database.models import *


@app.route("/register/register", methods=["POST"])
def register():
    """
    {"username" : "user1", "password": "123qwe", "type"=0}
    """
    data = request.json
    return jsonify(data), 200


# @app.route("/login", method=["POST"])
# def login_user():
#     """
#     {"username" : "user1", "password": "123qwe"}
#     """
#     pass
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
