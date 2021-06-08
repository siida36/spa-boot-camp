from flask import Flask, jsonify, make_response, request
from flask_cors import CORS

app = Flask(__name__, static_folder="./build/static", template_folder="./build")
CORS(app)  # Cross Origin Resource Sharing


@app.route("/", methods=["GET"])
def index():
    return "text parser:)"


@app.route("/wakati", methods=["GET", "POST"])
def parse():
    # print(request.get_json()) # -> {'post_text': 'テストテストテスト'}
    print(request)
    data = request.get_json()
    text = data["post_text"]

    res = text + "!"
    response = {"result": res}
    # print(response)
    return make_response(jsonify(response))


if __name__ == "__main__":
    app.debug = True
    app.run(host="127.0.0.1", port=5000)
