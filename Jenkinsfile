pipeline {
    agent none
    stages {
        stage('Build') {
            agent any
            steps {
                echo "Build"
            }
        }
        stage('Test') {
            agent { dockerfile true }
            steps {
                sh 'node simple_server.js 8095 test package/src http://localhost:8080/package/res/ 8080 > /log 2>&1 &'
                sh 'cd ../wind3_headless && ./wind.sh && grep -q -e "stack:Error" /log && exit 0'
            }
        }
        stage('Deploy') {
            agent any
            steps {
                sh 'echo "Deploy"'
            }
        }
    }
}