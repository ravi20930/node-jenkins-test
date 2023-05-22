pipeline {
  agent any
  
  stages {
    stage('Build') {
        steps {
            checkout scm
            sh 'npm install'
        }
    }
    
    stage('Deliver') {
        steps {
            //run pm2 as root user and jenkins to sudo group also "jenkins ALL=(ALL) NOPASSWD: ALL" to sudoers file (sudo visudo)
            // also jenkins always clone/pull into its own workspace which is different from the host system folder
            // i am using jenkins to pull and just resatrt the node-app which was already running.
            // "/var/lib/jenkins/workspace/test" this is path to workspace, have used sudo pm2 start inside this folder
            // which is the latest workspace fro the project by jenkins.
            // basically we need to keep in mind about user and worksspaces and work accordingly.
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
