from flask import Flask, request, jsonify

app = Flask(__name__)

# Route to handle JSON data
@app.route('/json', methods=['POST'])
def handle_json():
    data = request.json  # Access JSON data
    print('Received JSON data:', data)
    return jsonify(message='JSON data received', data=data)

# Route to handle URL-encoded data
@app.route('/urlencoded', methods=['POST'])
def handle_urlencoded():
    data = request.form  # Access URL-encoded data
    print('Received URL-encoded data:', data)
    return jsonify(message='URL-encoded data received', data=data)

# Route to handle raw text data
@app.route('/text', methods=['POST'])
def handle_text():
    data = request.data.decode('utf-8')  # Access raw text data
    print('Received raw text data:', data)
    return jsonify(message='Raw text data received', data=data)

if __name__ == '__main__':
    app.run(port=3000)