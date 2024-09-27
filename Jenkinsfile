pipeline {
    agent any
    environment {
        DIRECTORY_PATH = 'C:/Users/phuon/Downloads/Trimester 2.2024/SIT753 Professional Practice in IT/Week 6'
        TESTING_ENVIRONMENT = 'Test_Env'
        PRODUCTION_ENVIRONMENT = 'Prod_env'
        DOCKER_CREDENTIALS_ID = 'docker-hub-creds'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Start building...'
                  script {
                    // Build the Docker image
                    sh 'docker build -t my-node-app:latest .'
                   withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                    }
                    
                    // Push the Docker image to Docker Hub
                    sh 'docker push my-node-app:latest'
                      
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
                sh 'docker-compose up -d' 
            }
        }
        stage('Release') {
            steps {
                echo 'Releasing'
                sh 'octopus-cli deploy-release'
            }
        }
        stage('Monitoring and Alerting') {
            steps {
                echo 'Deploying to Production Environment '
            }
        }
    }
}
