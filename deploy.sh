#!/bin/bash

gcloud beta functions deploy metrics-connector \
  --stage-bucket staging.aquariaas-findingdory.appspot.com \
  --trigger-topic metrics \
  --entry-point helloPubSub
