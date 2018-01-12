pipeline {
    agent none
    stages {
        stage('Build') {
            agent { dockerfile true }
            steps {
                echo "Build!!!"
            }
        }
        stage('Test') {
            steps {
                echo "Test!!!"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploy!!!"
            }
        }
    }
}