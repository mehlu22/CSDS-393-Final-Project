from flask import Flask, jsonify, request
from flask_cors import CORS
from utils import predict_city  # Import your custom function

app = Flask(__name__)
CORS(app)

# Global variable to store the cities determined by POST request
# Note: This is a simple approach for demonstration and not recommended for production
stored_cities = []

@app.route('/cities', methods=['GET', 'POST'])
def cities():
    global stored_cities  # Refer to the global variable

    if request.method == 'POST':
        data = request.json
        # Assume data contains the necessary features to predict cities
        features = list(data.values())
        # Use your custom function to determine cities based on features
        features = [1 if x == "Democrat" else 0 if x == 'Republican' else -1 if x == 'Neutral' else x for x in features]
        print(features, "Yes")

        stored_cities = predict_city(features)
        print(stored_cities)
        return jsonify(stored_cities), 200

    elif request.method == 'GET':
        # Return the cities stored from the last POST request
        if not stored_cities:
            return jsonify({"error": "No cities have been determined yet. Please make a POST request first."}), 400
        return jsonify(stored_cities)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
