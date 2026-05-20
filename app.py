from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():

    return render_template("index.html")

@app.route("/birthday", methods=["POST"])
def birthday():

    name = request.form.get("name")

    return render_template(
        "birthday.html",
        name=name
    )

if __name__ == "__main__":

    app.run(debug=True)