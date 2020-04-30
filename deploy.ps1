ssh root@ali "rm -rf /var/www/www.ironz.cn"
scp -r .\build root@ali:/var/www/www.ironz.cn
ssh root@ali "chmod -R 755 /var/www/www.ironz.cn"