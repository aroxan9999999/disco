import os
from flask import Flask, render_template, send_from_directory

root_dir = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, template_folder=os.path.join(root_dir, "templates"), static_folder=os.path.join(root_dir, "static"))

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()
