#!/bin/bash

sudo apt install wget ruby -y postgresql -y libpq-dev -y ruby-dev -y ruby-bundler -y build-essential -y 
sudo wget https://aws-codedeploy-us-east-2.s3.amazonaws.com/latest/install
sudo chmod +x ./install
sudo ./install auto
sudo apt update
sudo apt upgrade -y
sudo apt install
sudo gem install bundler
sudo bundle install
sudo service codedeploy-agent start
sudo gem install bundler
echo "Install Dependecies"