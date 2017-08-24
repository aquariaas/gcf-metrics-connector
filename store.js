// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

// Your Google Cloud Platform project ID
const projectId = 'aquariaas-findingdory';

// Instantiates a client
const datastore = Datastore({
  projectId: projectId
});

// The kind for the new entity
const kind = 'metric';
// The name/ID for the new entity
const name = '5629499534213120';
// The Cloud Datastore key for the new entity
const taskKey = datastore.key([kind, name]);

// Prepares the new entity
const task = {
  key: taskKey,
  data: {
    ambient_humidity: 45,
    ambient_temp: 66,
    arduino_id: 4,
    temp: 78
  }
};

// Saves the entity
datastore.save(task)
  .then(() => {
    console.log(`Saved ${task.key.name}: ${task.data.temp}`);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
