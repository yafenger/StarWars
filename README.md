# StarWars
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Deployment Server
1. Website can be accessed at the following URL http://3.81.90.83  
2. bash command to login - `ssh -i "angularstarwars.pem" ubuntu@ec2-3-81-90-83.compute-1.amazonaws.com`
3. go to app folder `cd /var/www/StarWars/`
4. pull the latest updates `git pull`
5. build the dist file `sudo ng build --prod --build-optimizer`
6. restart nginx server `sudo service nginx restart`

# Github configure 
1. follow the guide
2. start the agent with `eval `ssh-agent -s`
3. add the key `ssh-add <key name>`
reference: https://help.github.com/en/articles/connecting-to-github-with-ssh
