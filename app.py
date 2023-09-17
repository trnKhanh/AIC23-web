from flask import Flask, render_template
import os


app = Flask(__name__)

@app.route("/")
def index():
    videoIds = [videoId.split(".")[0] for videoId in os.listdir("./static/videos")]
    return render_template("template.html", videoIds=videoIds)