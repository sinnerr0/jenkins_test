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
                echo "Test"
            }
        }
    	stage('Deploy') {
    		steps {
    			echo "Deploy"
    		}
    	}
    }
}
