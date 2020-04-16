# Climbing-Twister
Climbing twister game - Random climbing trainer

# Outline
Website using Node Js and express
Store data in Mongo DB

# Tools
- Node JS
- Express
- MongoDB
- Linux vpn
- Google Cloud

# Features
-Adaptable for phones

-Optional Account to save routes

# Run Dev mode
$ docker build ./ 
$ pwd
$ docker run -it -p 3000:3000 -v [put your path here]/frontend/src:/frontend/src [image id]

# Production Image
$ docker run -i -t -p 3000:3000 [image id]