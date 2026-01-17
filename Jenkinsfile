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
                echo "Running Trivy Terraform security scan..."
                trivy version

                # Fail pipeline on CRITICAL or HIGH findings
                trivy config ${TERRAFORM_DIR} \
                  --severity CRITICAL,HIGH \
                  --exit-code 1
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
                    terraform plan
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully with no CRITICAL/HIGH vulnerabilities."
        }
        failure {
            echo "Pipeline failed due to security vulnerabilities."
        }
        always {
            echo "Pipeline finished!"
        }
    }
}
