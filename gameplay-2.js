module.exports = [
  {
      "decisionId": "location",
      "title": "Location",
      "description": "Select what type of environment you'd like to try to grown in",
      "videoLocation": "/blah/whatever.mp4",
      "imageLocation": null,
      "choices": [
          {
              "id": "shallow-sea",
              "title": "Shallow Sea",
              "description": "A shallow sea area near the coast",
              "helpText": "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
              "effects": [
                  {
                      "action": "set-game-state",
                      "property": "thumbnail-map",
                      "value": "sea",
                      "conditions": []
                  },
                  {
                      "action": "oneshot-point-multiplier",
                      "value": 1.2,
                      "conditions": []
                  },
                  {
                      "action": "weekly-point-multiplier",
                      "value": 1.1,
                      // Just an example
                      "conditions": [{
                          "type": "decision-result",
                          "decision": "location",
                          "allowedOptions": ["upland-river"]
                      }]
                  }
              ]

          },
          {
              "id": "upland-river",
              "title": "Upland River",
              "description": "A river atop the mountain",
              "helpText": "Blah Blah Blah",
              "effects": [
                  {
                      "action": "add-mistake-advice",
                      "text": "High water flow is not conducive to algal growth",
                      "conditions": []
                  },
                  {
                      "action": "oneshot-point-multiplier",
                      "value": 0,
                      "conditions": []
                  }
              ]
          }
      ],
      "isRandomEvent": false,
      "preconditions": [
          {
              "type": "cannot-happen-before",
              "week": 8
          }
      ]
  }
]