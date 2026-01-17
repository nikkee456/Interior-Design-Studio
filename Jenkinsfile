pipeline {
    agent any

    environment {
        TERRAFORM_DIR = "terraform"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Terraform Security Scan (Trivy)') {
            agent {
                docker {
                    image 'aquasec/trivy:latest'
                    args '--entrypoint=""'
                }
            }
            steps {
                sh '''
                trivy version
                trivy config ${TERRAFORM_DIR} --exit-code 0
                '''
            }
        }

        stage('Terraform Init & Plan') {
            agent {
                docker {
                    image 'hashicorp/terraform:1.7'
                    args '--entrypoint=""'
                }
            }
            steps {
                dir("${TERRAFORM_DIR}") {
                    sh '''
                    terraform init -input=false
                    terraform plan || true
                    '''
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline finished!"
        }
    }
}
