# Movies Moving

**Movies Moving** es una REST API que permite acceder a información de películas y series.

## Tecnologías Utilizadas

- **Sequelize**: se utilizó como ORM con sus respectivos modelos, migraciones y seeders.
- **Docker y Docker Compose**: se utilizó Docker para crear y administrar contenedores, en los cuales se ejecutó una base de datos MySQL y el servidor Redis.
- **AdminBro**: se utilizó como panel de administración.
- **Redis**: se utilizó como base de datos en cache, aumentando así la rapidez de las respuestas.
- **Terminus**: se utilizó la librería de Terminus para realizar un shutdown del servidor de forma segura y sin perder información.
- **Joi**: se utilizó para validar los JSONs en los body requests.

## Instalación y Uso

1. Clona el repositorio.
2. Ejecuta `docker-compose up -d` para iniciar los contenedores de MySQL y Redis.
3. Crea una base de datos en MySQL y configura las credenciales en el archivo `config/config.json`.
4. Ejecuta `npm install` para instalar las dependencias.
5. Ejecuta `npm run start` para iniciar el servidor.

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Crea un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/nombre-de-la-funcionalidad`).
3. Realiza los cambios necesarios y haz commit de los mismos (`git commit -am 'Añadida la funcionalidad X'`).
4. Haz push de la rama (`git push origin feature/nombre-de-la-funcionalidad`).
5. Crea un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
