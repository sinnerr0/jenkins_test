pipeline {
    agent none
    stages {
        stage('Build') {
            agent any
            steps {
                echo "Build!!!"
            }
        }
        stage('Test') {
            agent { dockerfile true }
            steps {
                sh 'echo "Test!!!"'
            }
        }
        stage('Deploy') {
            agent any
            steps {
                sh 'echo "Deploy!!!"'
            }
        }
    }
}