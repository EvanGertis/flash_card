## Any files in here will be publicly accessible from the server (images, html, js, etc)
## Instructions for starting local docker database
- ``` docker pull mysql/mysql-server ```
- ``` docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=test -e MYSQL_DATABASE=flash_card mysql:5.7 ```

## Instructions for staring the server
- ``` cd flash_card ```
- ``` node index.js ```

