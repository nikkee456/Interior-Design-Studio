# Secure Security Group

resource "aws_security_group" "web_sg" {
  name        = "web-sg"
  description = "Secure security group for web server"

  ingress {
    description = "Allow SSH only from admin IP"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["127.0.0.1/32"]  # Replace with your public IP if needed
  }

  ingress {
    description = "Allow HTTP traffic"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"]
  }

  egress {
  from_port   = 443
  to_port     = 443
  protocol    = "tcp"
  cidr_blocks = ["10.0.0.0/16"]
}

}

# Secure EC2 Instance

resource "aws_instance" "web" {
  ami           = "ami-0a7cf821b91bcccbc"   # Amazon Linux 2 (Mumbai)
  instance_type = "t2.micro"
  security_groups = [aws_security_group.web_sg.name]


  # Enforce IMDSv2 (Security Fix)
  
  metadata_options {
    http_tokens = "required"
  }

  
  # Encrypt Root Volume (Security Fix)
  
  root_block_device {
    encrypted = true
  }

  tags = {
    Name = "devsecops-secure-instance"
  }
}
