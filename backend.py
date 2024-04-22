from flask import Flask, jsonify, request
from flask_cors import CORS
from utils import predict_city  # Import your custom function
from job_utils import find_job
from housing_utils import predict_top_localities

app = Flask(__name__)
CORS(app)

# Global variable to store the cities determined by POST request
# Note: This is a simple approach for demonstration and not recommended for production
stored_cities = []

#Feature1
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
    

#Feature 2
@app.route('/jobs', methods=['GET', 'POST'])
def jobs():

    if request.method == 'POST':
        data = request.json
        features = list(data.values())
        print(features)
        stored_company = find_job(features[0], features[1], features[2])
        print(stored_company)
        return jsonify(stored_company), 200

    elif request.method == 'GET':
        if not stored_company:
            return jsonify({"error": "No cities have been determined yet. Please make a POST request first."}), 400
        return jsonify(stored_company)
    


#Feature 3
@app.route('/neighborhoods', methods=['GET', 'POST'])
def neighborhoods():

    if request.method == 'POST':
        data = request.json
        print(data)
        features = [None, None]
        features[0] = data[0]
        features[1] = list(data[1].values())
        stored_neighborhoods = predict_top_localities(features[0], features[1])
        print(stored_neighborhoods)
        return jsonify(stored_neighborhoods), 200

    elif request.method == 'GET':
        if not stored_neighborhoods:
            return jsonify({"error": "No cities have been determined yet. Please make a POST request first."}), 400
        return jsonify(stored_neighborhoods)
    
if __name__ == '__main__':
    app.run(debug=True, port=5000)
