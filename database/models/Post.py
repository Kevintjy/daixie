from database import db
from datetime import datetime

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    post_time = db.Column(db.DateTime, nullable=False, default=datetime.now)
    accept_time = db.Column(db.Time, nullable=True, default=None)
    post_state = db.Column(db.Integer, default=0) #0 for send, 1 for writter accept, 2 for proccessing, 3 finish
    payment_status = db.Column(db.Integer, default=0) # 0 for not send money, 1 for not send money to writer(money accept), 2 for finish
    public = db.Column(db.Integer, default=0) #0 for not public, 1 for public
    title = db.Column(db.String(80), nullable=False)
    # descrition = db.Column(db.String(5000), nullable=False)
    # price = db.Column(db.Integer, nullable=False)
    # deadline = db.Column(db.Time, nullable=True)

    client_username = db.Column(db.String(80), db.ForeignKey('user.username'),
                            nullable=False)

    writer_username = db.Column(db.String(80), db.ForeignKey('user.username'),
                                nullable=True, default=None)

    client = db.relationship('User', foreign_keys=[client_username], backref=db.backref('send_posts', lazy=True))

    writter = db.relationship('User', foreign_keys=[writer_username], backref=db.backref('accept_posts', lazy=True))

    def __repr__(self):
        return '<Post %r>' % self.title
