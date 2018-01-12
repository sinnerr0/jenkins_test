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
                echo "Test!!!"
            }
        }
        stage('Deploy') {
            agent any
            steps {
                echo "Deploy!!!"
            }
        }
    }
}