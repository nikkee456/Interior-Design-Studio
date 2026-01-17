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
7. (Optional) Infrastructure is deployed on AWS

---

## ☁️ Cloud Provider Used
- **Amazon Web Services (AWS)**
- Region: **Asia Pacific (Mumbai)**

---

## 🛠 Tools & Technologies
- Jenkins (CI/CD)
- Docker
- Terraform
- Trivy (Security Scanner)
- GitHub
- AWS EC2 & Security Groups

---

## 🔐 Before & After Security Report

### ❌ Initial (Failing) Security Scan
- Trivy detected a **CRITICAL vulnerability**
- Unrestricted egress traffic allowed (`0.0.0.0/0`)
- Security group violated AWS best practices

**Detected Vulnerability:**
