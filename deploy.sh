#!/bin/bash

npm run build

sed -i '' 's/\/static/http:\/\/osgeayr1w.bkt.clouddn.com\/static/g' dist/index.html
