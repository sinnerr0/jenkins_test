pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing' && exit 0
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}