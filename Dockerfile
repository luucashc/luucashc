# Usa uma imagem do Nginx como base
FROM nginx:alpine

# Remove os arquivos padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do seu site para a pasta do Nginx
COPY ./public /usr/share/nginx/html

# Ajusta as permissões dos arquivos copiados
RUN chown -R nginx:nginx /usr/share/nginx/html

# Expõe a porta 80 para acesso externo
EXPOSE 80
