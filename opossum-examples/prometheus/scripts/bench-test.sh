#!/bin/bash

APPURL=$(oc get -o template route express-prometheus-minishift --template="http://{{.spec.host}}/api/greeting")

# 5 requests
# No concurrent requests
ab -n 5 -c 1 $APPURL
