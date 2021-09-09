pipeline {
  agent any
  stages {
    stage('build') {
      parallel {
        stage('build') {
          environment {
            test = '121313'
          }
          steps {
            sh 'echo $test'
          }
        }

        stage('test') {
          environment {
            test = 'test2'
            mysecret = credentials('mysecret')
          }
          steps {
            sh '''echo $test
echo $mysecret'''
          }
        }

      }
    }

  }
  environment {
    test = 'test'
  }
}