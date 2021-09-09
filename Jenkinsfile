pipeline {
  agent any
  stages {
    stage('build') {
      parallel {
        stage('build') {
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
    mytest = '123456'
  }
}