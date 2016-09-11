## How to deploy

### Locally
- harbor

### At ec2

- Pull the new version 

```bash
docker pull leocwolter/saturno
```

- Stop and remove the running container

```
docker stop saturno
docker rm saturno
```

- Run the container:

```bash
docker run --name saturno -p 8080:4000 -d leocwolter/saturno
```

##Dependencias
- node
- npm
- grunt-cli `npm install grunt-cli -g`
- babel-cli `npm install babel-cli -g`

###Rodar o projeto
Instalar dependencias do node: `npm install`

Rodar: `npm start`

Acesse: `http://localhost:4000`
