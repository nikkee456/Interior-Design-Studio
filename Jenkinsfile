pipeline {
    agent none

    environment {
        TERRAFORM_DIR = "terraform"
    }

    stages {

        stage('Terraform Security Scan') {
            agent {
                docker {
                    image 'aquasec/trivy:latest'
                    args '-u root:root'
                }
            }
            steps {
                sh """
                  trivy config ${TERRAFORM_DIR} --exit-code 0
                """
            }
        }

        stage('Terraform Init & Plan') {
            agent {
                docker {
                    image 'hashicorp/terraform:1.7'
                    args '-u root:root'
                }
            }
            steps {
                dir("${TERRAFORM_DIR}") {
                    sh '''
                      terraform version
                      terraform init
                      terraform plan
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
