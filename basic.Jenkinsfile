pipeline {
  agent any
  
  stages {
    stage('Build') {
        steps {
            sh 'npm install'
        }
    }
    
    stage('Deliver') {
        steps {
            sh 'pm2 start app.js --name my-app'
            sh 'exit'
            // input message: 'Finished using the web site? (Click "Proceed" to continue)'
            // sh 'chmod +x ./jenkins/scripts/kill.sh'
        }
    }
  }
}
