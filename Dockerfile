# Usa uma imagem do Nginx como base
FROM nginx:alpine

# Remove os arquivos padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do seu site para a pasta do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80 para acesso externo
EXPOSE 80
