pipeline {
    agent any

    environment {
        TERRAFORM_DIR = "terraform" // Path to your Terraform files
    }

    options {
        disableConcurrentBuilds() // Prevent multiple builds at the same time
        buildDiscarder(logRotator(numToKeepStr: '10')) // Keep last 10 build logs
    }

    stages {

        stage('Terraform Security Scan') {
            steps {
                script {
                    echo "Installing Trivy for Terraform security scan..."
                    sh 'curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh'

                    echo "Scanning Terraform files in ${TERRAFORM_DIR}..."
                    sh "trivy config ${TERRAFORM_DIR} --exit-code 1 || true"
                }
            }
        }

        stage('Terraform Plan') {
            steps {
                dir("${TERRAFORM_DIR}") {
                    echo "Initializing Terraform..."
                    sh 'terraform init'

                    echo "Generating Terraform plan..."
                    sh 'terraform plan'
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
