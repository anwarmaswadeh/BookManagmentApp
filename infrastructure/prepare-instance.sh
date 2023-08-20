#!/bin/bash
set -e

sudo apt update
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

sudo apt install nodejs curl -y

git clone https://github.com/anwarmaswadeh/bookManagmentApp.git app
cd app && npm install
npm run build