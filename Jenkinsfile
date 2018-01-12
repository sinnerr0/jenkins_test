pipeline {
    agent none
    stages {
        stage('Build') {
            agent { dockerfile true }
            steps {
                build.sh
            }
        }
        stage('Test') {
            steps {
                test.sh
            }
        }
        stage('Deploy') {
            steps {
                deploy.sh
            }
        }
    }
}