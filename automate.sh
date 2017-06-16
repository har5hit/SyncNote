#!/bin/bash
echo "starting"

cd /home/sankalp/WebProjects/Angular\ 4/angular4_demo
ng build --prod

echo "caching"
npm run precache

echo "change directory"
cd /opt/lampp/htdocs/SyncNote  


echo "deleting public"

rm -r public

mkdir public 

echo "moving from here to public folder"

cp -v /home/sankalp/WebProjects/Angular\ 4/angular4_demo/dist/* /opt/lampp/htdocs/SyncNote/public

echo "Moved"

echo" Publishing"

firebase deploy

pwd


