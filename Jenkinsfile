pipeline {
  agent {
        docker {
            image 'node:6'
            args '-p 3000:3000 -p 5000:5000' 
        }
  }
  environment { 
        CC = 'clang'
        APP_NAME="devops-web-${ENVIRONMENT}"
        AZ_CR_NAME="atfxdevcr"
        IMAGE_REPO_ENDPOINT="${AZ_CR_NAME}.azurecr.io"
        IMAGE_TAG="${JOB_BASE_NAME}-$ENVIRONMENT-${env.BUILD_ID}"
  }
  stages {
    stage('Build') {
      when {
        branch 'uat'
      }
      steps {
        echo "IMAGE_TAG is : $IMAGE_TAG "
        echo "IMAGE_REPO_ENDPOINT is : $IMAGE_REPO_ENDPOINT"
        sh 'npm install'
        sh 'npm run build'
        docker.withRegistry($IMAGE_REPO_ENDPOINT, 'credentials-id') {

          def customImage = docker.build("$IMAGE_REPO_ENDPOINT:$IMAGE_TAG")

          /* Push the container to the custom Registry */
          customImage.push()
        }
        // sh "docker push $IMAGE_REPO_ENDPOINT:$IMAGE_TAG"
        // script{
        // 	defineVariables();

        //     echo "Starting Build #${env.BUILD_ID}, triggered by $BRANCH_NAME";

        //     if(env.runComposer=='true'){
        //         try {
	      //           sh 'composer install --no-dev --prefer-dist';
        //         } catch(exc){
        //             handleException('Composer install failed', exc);
        //         }
	      //   } else {
	      //   	echo 'skipped composer install';
	      //   }

	      //   if(env.runNpm=='true'){
	      //       try {
	      //   	    sh 'npm install';
        //         } catch(exc){
        //             handleException('npm install failed',exc);
        //         }
	      //   } else {
	      //   	echo 'skipped npm install';
	      //   }

        //     if(env.runBuild=='true'){
	      //       try {
        //             sh 'npm run sprites';
        //             if(BRANCH_NAME=='master'){
        //                 sh 'npm run build:prod';
        //             } else {
        //                 sh 'npm run build';
        //             }
        //         } catch(exc){
        //             handleException('Building the front failed',exc);
        //         }
        //     } else {
        //     	echo 'skipped npm sprites & build';
        //     }
        // }
      }
    }
    stage('Deploy') {
        steps {
            echo "Deploying $BRANCH_NAME branch"
            // script {
            // 	try{
	          //       echo "Deploying $BRANCH_NAME branch"
	          //       def creds = loadCreds("livraison_occitanie_${BRANCH_NAME}_credentials");
	          //       deployCode(creds);
	          //       finalizeDistantMigration(creds);
	          //   } catch(exc){
	          //   	  handleException("The $BRANCH_NAME branch deployment failed",exc);
            //   }
            // }
        }
    }
    stage('Integration tests') {
        steps {
            echo "Starting integration tests"
            // script {
            //     try {
            //         if(env.runCypress=='true'){
            //             def host = '';
            //             if(env.siteUrl){
            //                 host = env.siteUrl;
            //                 echo "Starting integration tests on $host"
            //                 sh "cypress run --env host=$host"
            //             } else {
            //                 echo 'No host defined to run cypress against';
            //             }
            //         } else {
            //             echo 'Skipped integration tests'
            //         }
	          //   } catch(exc){
	          //   	handleException("Cypress tests failed, which means you have a problem on your $BRANCH_NAME live environment",exc);
            //     }
            // }
        }
    }
    stage('notify'){
        steps {
            echo "Notify somebody"
            // script {
    			  //   notify(env.slackMsg,env.slackColor);
            // }
        }
    }
  }
}

