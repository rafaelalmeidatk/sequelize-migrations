#!/bin/bash
read -p "Enter database name: " database_name
read -p "Enter user: " database_user
mysqldump -u $database_user -p -d --compact $database_name|egrep -v "(^SET|^/\*\!)" > dump.sql