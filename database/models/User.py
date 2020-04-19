from database import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    type = db.Column(db.Integer) #0 for client, 1 for writer
    account_state = db.Column(db.Integer, default=0) # 0 for not approved, 1 for approved

    def __repr__(self):
        return '<User %r>' % self.username

