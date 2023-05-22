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
        // Start Node.js application on port 3000
        sh 'node app.js &'
        
        // Wait for the application to start (optional)
        sleep 10
      }
    }
  }
}
