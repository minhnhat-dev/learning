- Link explain rotation pm2 log: https://stackoverflow.com/questions/74223106/what-does-the-pm2-default-logrotate-files-settings-mean
- 

21:30
1.6M	/home/ubuntu/.pm2/pm2.log
26M	/home/ubuntu/.pm2/logs
28M	/home/ubuntu/.pm2
28M	total

	/home/ubuntu/.pm2/pm2.log
27M	/home/ubuntu/.pm2/logs
22:15

/home/ubuntu/.pm2/pm2.log /home/ubuntu/.pm2/logs/*.log

/home/ubuntu/.pm2/pm2.log /home/ubuntu/.pm2/logs/*.log {
        su root root
        rotate 12
        hourly
        missingok
        notifempty
        compress
        delaycompress
        copytruncate
        create 0640 ubuntu ubuntu
}
HSCAN REDIS_SESSION 0 '*:29-10-2023'
CONFIG SET "slave-read-only" "no"