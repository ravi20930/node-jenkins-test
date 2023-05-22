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
            sh 'export BUILD_ID=dontKillMe'
            sh 'export JENKINS_NODE_COOKIE=dontKillMe'
            sh 'pm2 start app.js --name my-app'
            // input message: 'Finished using the web site? (Click "Proceed" to continue)'
            // sh 'chmod +x ./jenkins/scripts/kill.sh'
        }
    }
  }
}
