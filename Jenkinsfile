pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Example') {
            steps {
                sh 'node simple_server.js 8095 test package/src http://localhost:8080/package/res/ 8080 > /log 2>&1 &'
                sh 'cd /wind3_headless && ./wind.sh && grep -e "stack:Error" /log'
            }
        }
    }
}
