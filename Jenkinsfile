pipeline {
    agent any

    environment {
        TERRAFORM_DIR = "terraform" // path to your terraform files
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/<your-username>/<repo-name>.git'
            }
        }

        stage('Terraform Security Scan') {
            steps {
                script {
                    // Install Trivy if not already in the container
                    sh 'curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh'
                    
                    // Scan Terraform directory for misconfigurations
                    sh "trivy config ${TERRAFORM_DIR} --exit-code 1 || true"
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
