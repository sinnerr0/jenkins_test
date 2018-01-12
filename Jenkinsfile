node {
    checkout scm

    def ubuntu = docker.build('32bit/ubuntu:16.04')

    ubuntu.inside {
        sh 'echo "Test!!!!!!!!##########"'
    }
}