pipeline {
  agent any
  
  stages {
    stage('Build') {
      steps {
        // Checkout source code from your version control system
        checkout scm
        
        // Install Node.js dependencies
        sh 'npm install'
      }
    }
    
    stage('Start Application') {
      steps {
        // Start Node.js application in the background
        script {
          // Start the application in a subshell
          sh 'nohup bash -c "node app.js > /dev/null 2>&1 & echo $! > app_pid.txt"'
          
          // Sleep for a few seconds to allow the application to start (optional)
          sleep 10
        }
      }
    }
  }
  
  post {
    always {
      // Read the application PID from the file
      script {
        def pid = readFile('app_pid.txt').trim()
        
        // Kill the Jenkins process group to avoid terminating the Node.js application
        sh "kill -- -${pid}"
      }
    }
  }
}
