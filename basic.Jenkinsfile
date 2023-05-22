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
            //run pm2 as root user and jenkins to sudo group also "jenkins ALL=(ALL) NOPASSWD: ALL" to sudoers file (sudo visudo)
            sh 'sudo git pull origin master'
            sh 'sudo pm2 ls'
            sh 'sudo pm2 restart node-app'
            sh 'sleep 10s'
            // input message: 'Finished using the web site? (Click "Proceed" to continue)'
            // sh 'chmod +x ./jenkins/scripts/kill.sh'
        }
    }
  }
}
