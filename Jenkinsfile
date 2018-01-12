pipeline {
    agent none
    stages {
        stage('Build') {
            agent { dockerfile true }
            steps {
                sh 'build.sh'
            }
        }
        stage('Test') {
            agent any
            steps {
                sh 'test.sh'
            }
        }
        stage('Deploy') {
            agent any
            steps {
                sh 'deploy.sh'
            }
        }
    }
}