pipeline {
    agent any
    environment {
        DIRECTORY_PATH = 'C:/Users/phuon/Downloads/Trimester 2.2024/SIT753 Professional Practice in IT/Week 6'
        TESTING_ENVIRONMENT = 'Test_Env'
        PRODUCTION_ENVIRONMENT = 'Prod_env'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Start building...'
                  script {
                    // Build the Docker image
                    bat 'docker build -t my-node-app:latest .'
                      
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                echo "integration tests"
                bat 'mvn test' 
            }
          
        }
        stage('Code Quality Analysis') {
            steps {
                echo 'perform code analysis'
                sh 'sonar-scanner'
            }
        }
         stage('Security Scan') {
            steps {
                echo 'conduct security scan'
            }
        }
        stage('Deploy') {
            steps {
                echo 'deploying'
                bat 'docker-compose up -d' 
            }
        }
        stage('Release') {
            steps {
                echo 'Releasing'
                bat 'octopus-cli deploy-release'
            }
        }
        stage('Monitoring and Alerting') {
            steps {
                echo 'Deploying to Production Environment '
            }
        }
    }
}
