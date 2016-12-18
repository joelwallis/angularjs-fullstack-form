#!/bin/bash

rm -fR build
mkdir -p build/assets
cp src/public/* build
cp node_modules/angular/angular.js node_modules/angular-route/angular-route.js build/assets
cat src/public/assets/*.module.js src/public/assets/*.config.js src/public/assets/*.controller.js src/public/assets/*.service.js > build/assets/app.js
