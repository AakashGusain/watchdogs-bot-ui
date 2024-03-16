# Steps to run code locally
1. brew install firebase-cli
2. firebase login
3. firebase deploy

# Hosting watchdogs bot SPA on firebase
- Make changes locally and run the below command to run the server locally:
  `firebase emulators:start`
- Commit your changes and create a pull request. A temporary url will be generated on completion of triggered job on creating a pull request.
  ![ALT TEXT](src/assets/host.png)
- Merge your changes to main branch to deploy changes to [production environment](https://telegram-watchdog.web.app).
  
