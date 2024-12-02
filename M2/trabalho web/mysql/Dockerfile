#Preparar  acesso a base dados com os dados fornecidos no script Cinema.msql

#Usa a imagem mais recente do Mysql mysql:latest , depois usa o builder para referenciá-lo posteriormente
FROM mysql:latest as builder 

#Modifica o script de entrada padrao, desativa a execusao automatica do Mysql durante a construçao, isso garante que ele so funcione quando for chamado.
RUN ["sed", "-i", "s/exec \"$@\"/echo \"not running $@\"/", "/usr/local/bin/docker-entrypoint.sh"]

#Define a password do root
ENV MYSQL_ROOT_PASSWORD=12345678

#copia o arquivo mysql (cinema.sql) , para o diretorio padrao, esse é o diretorio usado pelo script de entrada do mysql para executar a base de dados
COPY Cinema.sql /docker-entrypoint-initdb.d/ 

RUN ["/usr/local/bin/docker-entrypoint.sh", "mysqld", "--datadir", "/initialized-db"]

#Usa novamente a imagem oficial do mysql como base da imagem final
FROM mysql:latest

#copia a base de dados inicializada no diretorio /initialized-db / para o local de padrao do MYsql /var/lib/mysql
COPY --from=builder /initialized-db /var/lib/mysql