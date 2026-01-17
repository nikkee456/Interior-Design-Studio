# AI-Driven DevSecOps Pipeline using Jenkins, Terraform & Trivy

## 📌 Project Overview
This project demonstrates an AI-driven DevSecOps pipeline that integrates security scanning into Infrastructure as Code (IaC) using Jenkins, Terraform, Docker, and Trivy.  
The pipeline detects cloud security misconfigurations early and highlights risks before infrastructure deployment.

An intentionally vulnerable Terraform configuration was used to validate the security scanning mechanism.

---

## 🏗 Architecture Explanation
1. Developer pushes Terraform code to GitHub
2. Jenkins pipeline triggers automatically
3. Jenkins pulls the source code
4. Trivy scans Terraform files for security misconfigurations
5. Jenkins reports vulnerabilities
6. Terraform initializes and plans infrastructure
7. Project is deployed on AWS

---

## ☁️ Cloud Provider

Cloud Platform: Amazon Web Services (AWS)
Service Used: EC2 (Elastic Compute Cloud)
Deployment Type: Public EC2 Instance

🌐 Live Application URL
👉 http://15.207.207.96/

---

## 🛠 Tools & Technologies
- Jenkins (CI/CD)
- Docker
- Terraform
- Trivy (Security Scanner)
- GitHub
- AWS EC2 & Security Groups

---

## 🔐 Security Implementation

Terraform misconfiguration scanning using Trivy
Security group egress restricted
Pipeline configured to fail on HIGH/CRITICAL issues
Final scan shows zero vulnerabilities
---

## 📊 Before & After Security Report

All required security reports, screenshots, and build outputs are included.

📁 Screenshots Location : /screenshots folder contains:

Jenkins pipeline failure (Trivy scan failed)
Trivy vulnerability report (console output)
Jenkins pipeline success after remediation
Clean Trivy security scan output
Application running on AWS public IP

✅ All screenshots and build outputs required for submission have been added to the screenshots folder.

---

## 🤖 AI Usage Log 
🔹 Exact AI Prompt Used

Analyze this Terraform configuration and identify security vulnerabilities.
Suggest best-practice remediations to make the infrastructure compliant with AWS security standards.

---

## 🧾 Jenkins Build Outputs

Full Jenkins console outputs (failure & success)
Trivy scan logs
Terraform init and plan logs
These outputs validate:
-> Detection of security issues
-> Successful remediation
-> Secure pipeline execution

---
## 📹 Video Demonstration

A 5–10 minute screen recording demonstrating:
Jenkins pipeline execution
Trivy security scan (fail → pass)
Terraform deployment
Application running on AWS public IP

🎥 Video Link: xyz
