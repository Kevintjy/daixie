rm -rf static
cd client
npm run build
cd ..
mv client/build/static .
mv client/build/index.html ./template
python3 server.py