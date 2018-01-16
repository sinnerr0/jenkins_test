pipeline {
  agent {
    dockerfile true
  }
  stages {
    stage('Build') {
      steps {
        echo 'Build'
        sh 'tar czf build package.tar.gz package/'
      }
    }
    stage('Test') {
      steps {
        echo 'Cloud Server Start'
        sh 'cd /wind3 && node simple_server.js 8095 test package/src http://localhost:8080/package/res/ 8080 > /log 2>&1 &'
        echo 'Headless Emulator Start'
        sh 'cd /wind3_headless && ./wind.sh || true'
        sh 'cat /log'
        sh '! grep -q "stack:Error" /log'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploy'
        archiveArtifacts(artifacts: 'package.tar.gz', fingerprint: true)
      }
    }
  }
  triggers {
    pollSCM('* * * * *')
  }
}