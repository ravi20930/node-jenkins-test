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
            // sh 'pm2 start app.js --name my-app'
            sh 'nohup node app.js > /dev/null 2>&1 &'
        }
    }
  }
}
