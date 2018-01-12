pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Test') {
            steps {
                sh 'node simple_server.js 8095 test package/src http://localhost:8080/package/res/ 8080 &'
                sh 'cd /wind3_headless && ./wind.sh && grep -q -e "stack:Error" /log || true'
                sh 'cat /log'
            }
        }
    	stage('Deploy') {
    		steps {
    			echo "Deploy"
                echo currentBuild.result
    		}
    	}
    }
}
