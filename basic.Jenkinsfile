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
            sh 'git pull origin master'
            sh 'pm2 ls'
            sh 'pm2 start app.js --name haha'
            sh 'sleep 10s'
            // input message: 'Finished using the web site? (Click "Proceed" to continue)'
            // sh 'chmod +x ./jenkins/scripts/kill.sh'
        }
    }
  }
    post {
    always {
      // Stop the Jenkins pipeline without stopping the Node.js application
      script {
        currentBuild.result = 'ABORTED'
      }
    }
  }
}
