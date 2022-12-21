from os import close
from flask import Flask, jsonify, request
from flask_cors import CORS
import json




#start app
app = Flask(__name__)
CORS(app)

#custom endpoint
endpoint = '/api/v1/'

#helperfunctions


def readJSONFile(fileloc):
    file = open(fileloc)
    data = json.load(file)
    file.close()
    return data


#routes
@app.route('/')
def hello():
    return "Hello World!"

@app.route(endpoint + 'players/', methods=['GET'])
def getPlayerInfo():
    if request.method == 'GET':
        data = readJSONFile("./playerList.json")
        return jsonify(data['players'])

@app.route(endpoint + 'players/<id>', methods=['GET'])
def getPlayerInfoById(id):
    if request.method == 'GET':
        data = readJSONFile("./playerList.json")
        data = data['players']
        for player in data:
            if player['id'] == id:
                return jsonify(player)
        return jsonify(data)
#start app
if __name__ == '__main__':
    app.run(host='127.0.0.1',port='5000',debug=True)
