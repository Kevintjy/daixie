import os.path

from flask_sqlalchemy import SQLAlchemy
from app import app

cur_dir = os.path.dirname(os.path.abspath(__file__ ))
db_path = os.path.join(cur_dir, "test.db")

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
