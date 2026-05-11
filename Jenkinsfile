pipeline {
    agent any

    environment {
        ACR_NAME = credentials('acr-name')
        ACR_LOGIN_SERVER = "${ACR_NAME}.azurecr.io"
        IMAGE_NAME = 'webapp'
        IMAGE_TAG = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '/usr/local/bin/npm install'
            }
        }

        stage('Lint Check') {
            steps {
                sh '/usr/local/bin/npm run lint'
            }
        }

        stage('Build Application') {
            steps {
                sh '/usr/local/bin/npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh "docker build -t ${ACR_LOGIN_SERVER}/${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Push to ACR') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'azure-sp',
                    usernameVariable: 'AZURE_CLIENT_ID',
                    passwordVariable: 'AZURE_CLIENT_SECRET'
                )]) {
                    sh """
                        az login --service-principal \
                          -u ${AZURE_CLIENT_ID} \
                          -p ${AZURE_CLIENT_SECRET} \
                          --tenant ${AZURE_TENANT_ID}
                        az acr login --name ${ACR_NAME}
                        docker push ${ACR_LOGIN_SERVER}/${IMAGE_NAME}:${IMAGE_TAG}
                    """
                }
            }
        }

        stage('Deploy with Terraform') {
            steps {
                sh """
                    cd terraform
                    terraform init
                    terraform apply -auto-approve \
                      -var="image_tag=${IMAGE_TAG}" \
                      -var="acr_name=${ACR_NAME}"
                """
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully. Application is deployed.'
        }
        failure {
            echo 'Pipeline failed. Check the logs above for details.'
        }
    }
}