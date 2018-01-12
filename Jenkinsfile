pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Example') {
            steps {
                node simple_server.js 8095 test package/src http://localhost:8080/package/res/ 8080 > /log 2>&1 &
                cd /wind3_headless && ./wind.sh && grep -q -e "stack:Error" /log && exit 0
            }
        }
    }
}
