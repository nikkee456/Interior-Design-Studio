pipeline {
    agent {
        docker {
            image 'hashicorp/terraform:1.7' // official Terraform image
            args '-u root:root' // optional, run as root
        }
    }

    environment {
        TERRAFORM_DIR = "terraform"
    }

    stages {
        stage('Terraform Security Scan') {
            steps {
                script {
                    sh 'curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh'
                    sh "./bin/trivy config ${TERRAFORM_DIR} --exit-code 1 || true"
                }
            }
        }

        stage('Terraform Plan') {
            steps {
                dir("${TERRAFORM_DIR}") {
                    sh 'terraform init'
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
