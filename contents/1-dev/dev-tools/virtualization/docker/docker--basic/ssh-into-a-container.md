
# SSH into a container

File: `Dockerfile` 

```
FROM ubuntu:latest

# Install OpenSSH Server and other necessary packages
RUN apt-get update && \                      
    apt-get install -y openssh-server && \  
    rm -rf /var/lib/apt/lists/*            

# Create the necessary directories and files for SSH
RUN mkdir /run/sshd && \
    chown root:root /run/sshd && \
    chmod 0755 /run/sshd

# Set the root password (not recommended for production)
RUN echo 'root:yourpassword' | chpasswd

# Allow SSH root login (not recommended for production)
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# Expose the SSH port
EXPOSE 22

# Start SSH server in the foreground
CMD ["/usr/sbin/sshd", "-D"]     
```



Build the Docker image:

```bash
docker build -t ssh-lab .
```

Run the container, exposing port 22:

```bash
docker run -d -p 2222:22 --name ssh-lab-01 ssh-lab
```

SSH into the Container:

```bash
ssh root@localhost -p 2222
```





## :warning:  Important Note:

**Do not use this in production. This is only for learning SSH:**

**Security**: Be cautious when exposing SSH ports, especially on production systems. It’s generally better to use Docker exec for interactive sessions in development environments.

**Root Password**: Setting a root password directly in the Dockerfile is not recommended for production environments due to security concerns. For better security practices, consider setting up SSH keys or using Docker secrets.





## About the `/run/sshd` directory

When the directory `/run/sshd` (or sometimes `/var/run/sshd`) is absence you will get the following in the docker log: 

```
$ docker logs ssh-lab-01
Missing privilege separation directory: /run/sshd
```

indicates that the SSH server is unable to find the required directory for **privilege separation**. 

**Privilege separation** in the context of SSH (and many other network services) is a security measure designed to **minimize the risk of privilege escalation**. 

The previlege separation dividing the SSH server process into two parts:

1. **Privileged Part**: Handles tasks that require elevated permissions (e.g., reading sensitive files, binding to low-numbered ports).
2. **Unprivileged Part**: Handles most of the data transfer and user authentication tasks, running with reduced privileges.

The directory `/run/sshd` (or sometimes `/var/run/sshd`) is **used by the privileged part of the SSH server to store its state and temporary files** such as PID files or other temporary data. 

The directory must be owned by the root user and have appropriate permissions to ensure that only privileged processes can write to it.