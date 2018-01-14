pipeline {
    agent {
        dockerfile true
    }
    stages {
    	stage('Build') {
    		steps {
    			echo "Build"
    		}
    	}
        stage('Test') {
            steps {
            	echo "Cloud Server Start"
                sh 'cd /wind3 && node simple_server.js 8095 test package/src http://localhost:8080/package/res/ 8080 > /log 2>&1 &'
                echo "Headless Emulator Start"
                sh 'cd /wind3_headless && ./wind.sh || true'
                sh 'grep -q "stack:Error" /log
            }
        }
    	stage('Deploy') {
    		steps {
    			echo "Deploy"
    		}
    	}
    }
}
if grep -q PATTERN file.txt; then
    echo found
else
    echo not found
fi
