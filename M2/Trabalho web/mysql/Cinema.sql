
DROP DATABASE IF EXISTS `Cinema`;
CREATE DATABASE `Cinema`;

USE `Cinema`;

CREATE TABLE Pessoa (
    id int PRIMARY KEY,
    nome varchar(30) NOT NULL,
    nome_artistico varchar(50) NOT NULL,
    data_nascimento date NOT NULL,
    local_nascimento varchar(50) NOT NULL,
    data_morte date,
	local_morte VARCHAR(50)
);
CREATE TABLE Filme (
    filme_id int PRIMARY KEY,
    nome varchar(50),
    realizador_id int NOT NULL,
    genero varchar(50),
    ano date,
    pais varchar(50),
    FOREIGN KEY (realizador_id) REFERENCES Pessoa(id)
);
CREATE TABLE Filme_Pais (
    filme_id int,
    pais VARCHAR(50),
    PRIMARY KEY (filme_id, pais),
    FOREIGN KEY (filme_id) REFERENCES Filme(filme_id)
);
CREATE TABLE Funcao (
    id int PRIMARY KEY,
    nome varchar(50) NOT NULL
);
CREATE TABLE Papel (
    funcao_id int,
    pessoa_id int,
    filme_id int,
    PRIMARY KEY (funcao_id, pessoa_id, filme_id),
    FOREIGN KEY (funcao_id) REFERENCES Funcao(id),
    FOREIGN KEY (pessoa_id) REFERENCES Pessoa(id),
    FOREIGN KEY (filme_id) REFERENCES Filme(filme_id)
);
CREATE TABLE Bilheteira (
    filme_id INT,
    pais_exibicao VARCHAR(255) NOT NULL,
    receita_bilheteira FLOAT NOT NULL,
    PRIMARY KEY (filme_id, pais_exibicao),
    FOREIGN KEY (filme_id) REFERENCES Filme(filme_id)
);
CREATE TABLE Merchandising (
    filme_id int PRIMARY KEY,
    merchandising FLOAT NOT NULL,
    FOREIGN KEY (filme_id) REFERENCES Filme(filme_id)
);
CREATE TABLE Custo_Producao (
    filme_id int PRIMARY KEY,
    custo_producao FLOAT NOT NULL,
    FOREIGN KEY (filme_id) REFERENCES Filme(filme_id)
);

INSERT INTO Pessoa (id, nome, nome_artistico, data_nascimento, local_nascimento, data_morte, local_morte)
VALUES
(1, 'Steven Allan Spielberg', 'Steven Spielberg', '1946-12-18', 'Cincinnati, Ohio, USA', NULL, NULL),
(2, 'Christopher Edward Nolan', 'Christopher Nolan', '1970-07-30', 'London, England, UK', NULL, NULL),
(3, 'Leonardo Wilhelm DiCaprio', 'Leonardo DiCaprio', '1974-11-11', 'Los Angeles, California, USA', NULL, NULL),
(4, 'Kathrin Romary Beckinsale', 'Kate Beckinsale', '1973-07-26', 'London, England, UK', NULL, NULL),
(5, 'Timothy Walter Burton', 'Tim Burton', '1958-08-25', 'Burbank, California, USA', NULL, NULL),
(6, 'Margot Elise Robbie', 'Margot Robbie', '1990-07-02', 'Dalby, Queensland, Australia', NULL, NULL),
(7, 'Thomas Jeffrey Hanks', 'Tom Hanks', '1956-07-09', 'Concord, California, USA', NULL, NULL),
(8, 'Scarlett Ingrid Johansson', 'Scarlett Johansson', '1984-11-22', 'New York City, New York, USA', NULL, NULL),
(9, 'Keanu Charles Reeves', 'Keanu Reeves', '1964-09-02', 'Beirut, Lebanon', NULL, NULL),
(10, 'Anne Jacqueline Hathaway', 'Anne Hathaway', '1982-11-12', 'Brooklyn, New York, USA', NULL, NULL),
(11, 'James Francis Cameron', 'James Cameron', '1954-08-16', 'Kapuskasing, Ontario, Canada', NULL, NULL),
(12, 'Christian Charles Philip Bale', 'Christian Bale', '1974-01-30', 'Haverfordwest, Pembrokeshire, Wales, UK', NULL, NULL),
(13, 'Gal Gadot-Varsano', 'Gal Gadot', '1985-04-30', 'Petah Tikva, Israel', NULL, NULL),
(14, 'Bradley Charles Cooper', 'Bradley Cooper', '1975-01-05', 'Philadelphia, Pennsylvania, USA', NULL, NULL),
(15, 'Emma Charlotte Duerre Watson', 'Emma Watson', '1990-04-15', 'Paris, France', NULL, NULL),
(16, 'Jennifer Shrader Lawrence', 'Jennifer Lawrence', '1990-08-15', 'Indian Hills, Kentucky, USA', NULL, NULL),
(17, 'Matthew Paige Damon', 'Matt Damon', '1970-10-08', 'Cambridge, Massachusetts, USA', NULL, NULL),
(18, 'Benjamin G za Affleck', 'Ben Affleck', '1972-08-15', 'Berkeley, California, USA', NULL, NULL),
(19, 'Daniel Wroughton Craig', 'Daniel Craig', '1968-03-02', 'Chester, Cheshire, England, UK', NULL, NULL),
(20, 'Natalie Portman', 'Natalie Portman', '1981-06-09', 'Jerusalem, Israel', NULL, NULL),
(21, 'Alfred Joseph Hitchcock', 'Alfred Hitchcock', '1899-08-13', 'Leytonstone, London, England, UK', '1980-04-29', 'Bel Air, Los Angeles, California, USA'),
(22, 'Luis Bu uel Portol s', 'Luis Bu uel', '1900-02-22', 'Calanda, Teruel, Aragon, Spain', '1983-07-29', 'Mexico City, Mexico'),
(23, 'Fellini Federico', 'Federico Fellini', '1920-01-20', 'Rimini, Emilia-Romagna, Italy', '1993-10-31', 'Rome, Italy'),
(24, 'Manoel Oliveira', 'Manoel de Oliveira', '1908-12-11', 'Porto, Portugal', '2015-04-02', 'Porto, Portugal'),
(25, 'Jean-Luc Godard', 'Jean-Luc Godard', '1930-12-03', 'Paris, France', NULL, NULL),
(26, 'Agnes Varda', 'Agn s Varda', '1928-05-30', 'Ixelles, Belgium', '2019-03-29', 'Paris, France'),
(27, 'Joaquim Baptista de Almeida', 'Joaquim de Almeida', '1957-03-15', 'Lisbon, Portugal', NULL, NULL),
(28, 'Pedro Almod var Caballero', 'Pedro Almod var', '1949-09-25', 'Calzada de Calatrava, Ciudad Real, Spain', NULL, NULL),
(29, 'Pierre Niney', 'Pierre Niney', '1989-03-13', 'Boulogne-Billancourt, Hauts-de-Seine, France', NULL, NULL),
(30, 'Lea H l ne Clausonne', 'L a Seydoux', '1985-07-01', 'Paris, France', NULL, NULL),
(31, 'Antonio Banderas', 'Antonio Banderas', '1960-08-10', 'M laga, Andalusia, Spain', NULL, NULL),
(32, 'Marion Cotillard', 'Marion Cotillard', '1975-09-30', 'Paris, France', NULL, NULL),
(33, 'Ingrid Bergman', 'Ingrid Bergman', '1915-08-29', 'Stockholm, Sweden', '1982-08-29', 'London, England, UK'),
(34, 'Humphrey DeForest Bogart', 'Humphrey Bogart', '1899-12-25', 'New York City, New York, USA', '1957-01-14', 'Los Angeles, California, USA'),
(35, 'Vivien Leigh', 'Vivian Mary Hartley', '1913-11-05', 'Darjeeling, West Bengal, British India', '1967-07-08', 'Belgravia, London, England, UK'),
(36, 'Pedro Costa', 'Pedro Costa', '1959-03-03', 'Lisbon, Portugal', NULL, NULL),
(37, 'S nia Balac ', 'S nia Balac ', '1984-02-01', 'Portugal', NULL, NULL),
(38, 'Javier Bardem', 'Javier  ngel Encinas Bardem', '1969-03-01', 'Las Palmas de Gran Canaria, Spain', NULL, NULL),
(39, 'Audrey Justine Tautou', 'Audrey Tautou', '1976-08-09', 'Beaumont, Puy-de-D me, France', NULL, NULL),
(40, 'Daniel C sar Domingo', 'Daniel Br hl', '1978-06-16', 'Barcelona, Spain', NULL, NULL);

-- Inserir dados na tabela Filme

INSERT INTO Filme (filme_id, nome, realizador_id, genero, ano, pais)
VALUES
(1, 'Jurassic Park', 1, 'Adventure, Sci-Fi', '1993-06-11', 'USA'),
(2, 'Inception', 2, 'Action, Sci-Fi', '2010-07-16', 'USA'),
(3, 'Titanic', 11, 'Drama, Romance', '1997-12-19', 'USA'),
(4, 'The Dark Knight', 2, 'Action, Crime', '2008-07-18', 'USA'),
(5, 'Avatar', 11, 'Action, Adventure', '2009-12-18', 'USA'),
(6, 'Wonder Woman', 13, 'Action, Adventure', '2017-06-02', 'USA'),
(7, 'The Matrix', 9, 'Action, Sci-Fi', '1999-03-31', 'USA'),
(8, 'Interstellar', 2, 'Adventure, Drama', '2014-11-07', 'USA'),
(9, 'Mad Max: Fury Road', 5, 'Action, Adventure', '2015-05-15', 'Australia'),
(10, 'The Revenant', 2, 'Adventure, Drama', '2015-12-25', 'USA'),
(11, 'Psycho', 21, 'Horror, Thriller', '1960-06-16', 'USA'),
(12, 'Viridiana', 22, 'Drama', '1961-05-17', 'Spain'),
(13, 'La Dolce Vita', 23, 'Comedy, Drama', '1960-02-05', 'Italy'),
(14, 'Aniki B b ', 24, 'Drama', '1942-12-18', 'Portugal'),
(15, '  bout de souffle', 25, 'Crime, Drama', '1960-03-16', 'France'),
(16, 'Cl o de 5   7', 26, 'Comedy, Drama', '1962-04-11', 'France'),
(17, 'Capit es de Abril', 24, 'Drama, History', '2000-04-21', 'Portugal'),
(18, 'La Belle  poque', 29, 'Comedy, Drama', '2019-11-06', 'France'),
(19, 'Pain and Glory', 28, 'Drama', '2019-03-22', 'Spain'),
(20, 'The Others', 31, 'Horror, Mystery', '2001-08-02', 'Spain'),
(21, 'The Lobster', 24, 'Comedy, Drama', '2015-05-15', 'Ireland'),
(22, 'Am lie', 39, 'Comedy, Romance', '2001-04-25', 'France'),
(23, 'Elite Squad', 36, 'Action, Crime', '2007-10-12', 'Brazil'),
(24, 'Biutiful', 38, 'Drama', '2010-10-04', 'Mexico'),
(25, 'Inglourious Basterds', 18, 'Adventure, Drama', '2009-08-21', 'USA'),
(26, 'Frances Ha', 40, 'Comedy, Drama', '2012-09-01', 'USA'),
(27, 'The Shape of Water', 7, 'Drama, Fantasy', '2017-12-01', 'USA'),
(28, 'Roma', 22, 'Drama', '2018-08-30', 'Mexico'),
(29, 'Frost/Nixon', 11, 'Biography, Drama', '2008-12-05', 'USA'),
(30, 'O Auto da Compadecida', 27, 'Comedy, Drama', '2000-09-15', 'Brazil');

INSERT INTO Filme_Pais (filme_id, pais)
VALUES
(1, 'USA'),
(1, 'Canada'),
(2, 'USA'),
(2, 'UK'),
(3, 'USA'),
(3, 'Canada'),
(3, 'UK'),
(4, 'USA'),
(4, 'Canada'),
(5, 'USA'),
(5, 'UK'),
(5, 'China'),
(6, 'USA'),
(6, 'Australia'),
(7, 'USA'),
(7, 'Canada'),
(8, 'USA'),
(8, 'UK'),
(9, 'Australia'),
(9, 'USA'),
(10, 'USA'),
(10, 'Canada'),
(11, 'USA'),
(12, 'Spain'),
(13, 'Italy'),
(14, 'Portugal'),
(15, 'France'),
(16, 'France'),
(17, 'Portugal'),
(18, 'France'),
(19, 'Spain'),
(20, 'Spain'),
(21, 'Ireland'),
(21, 'UK'),
(22, 'France'),
(23, 'Brazil'),
(24, 'Mexico'),
(25, 'USA'),
(26, 'USA'),
(27, 'USA'),
(28, 'Mexico'),
(29, 'USA'),
(30, 'Brazil');


INSERT INTO Funcao (id, nome)
VALUES
(1, 'Ator'),
(2, 'Atriz'),
(3, 'Realizador'),
(4, 'Produtor'),
(5, 'Diretor de Fotografia'),
(6, 'Editor'),
(7, 'Compositor'),
(8, 'Desenhista de Produ  o'),
(9, 'Figurinista'),
(10, 'Roteirista'),
(11, 'Coordenador de Dubl s'),
(12, 'Diretor de Arte'),
(13, 'Assistente de Dire  o'),
(14, 'Operador de C mera'),
(15, 'T cnico de Som'),
(16, 'Assistente de Produ  o'),
(17, 'Core grafo'),
(18, 'Maquiador'),
(19, 'Assistente de Figurino'),
(20, 'Produtor Executivo'),
(21, 'Assistente de Elenco'),
(22, 'Produtor Associado'),
(23, 'Co-Produtor'),
(24, 'Diretor de Segunda Unidade');

INSERT INTO Papel (funcao_id, pessoa_id, filme_id)
VALUES
(3, 1, 1), -- Steven Spielberg, Realizador de Jurassic Park
(3, 2, 2), -- Christopher Nolan, Realizador de Inception
(3, 11, 3), -- James Cameron, Realizador de Titanic
(3, 2, 4), -- Christopher Nolan, Realizador de The Dark Knight
(3, 11, 5), -- James Cameron, Realizador de Avatar
(2, 13, 6), -- Gal Gadot, Atriz de Wonder Woman
(1, 9, 7), -- Keanu Reeves, Ator de The Matrix
(3, 2, 8), -- Christopher Nolan, Realizador de Interstellar
(1, 12, 9), -- Christian Bale, Ator de Mad Max: Fury Road
(1, 3, 10), -- Leonardo DiCaprio, Ator de The Revenant
(2, 4, 1), -- Kate Beckinsale, Atriz em Jurassic Park
(1, 3, 2), -- Leonardo DiCaprio, Ator em Inception
(1, 3, 3), -- Leonardo DiCaprio, Ator em Titanic
(1, 7, 4), -- Tom Hanks, Ator em The Dark Knight
(2, 6, 5), -- Margot Robbie, Atriz em Avatar
(1, 9, 6), -- Keanu Reeves, Ator em Wonder Woman
(2, 10, 7), -- Anne Hathaway, Atriz em The Matrix
(2, 8, 8), -- Scarlett Johansson, Atriz em Interstellar
(2, 15, 9), -- Emma Watson, Atriz em Mad Max: Fury Road
(2, 16, 10), -- Jennifer Lawrence, Atriz em The Revenant
(3, 21, 11), -- Alfred Hitchcock, Realizador de Psycho
(3, 22, 12), -- Luis Bu uel, Realizador de Viridiana
(3, 23, 13), -- Federico Fellini, Realizador de La Dolce Vita
(3, 24, 14), -- Manoel de Oliveira, Realizador de Aniki B b 
(3, 25, 15), -- Jean-Luc Godard, Realizador de   bout de souffle
(3, 26, 16), -- Agn s Varda, Realizador de Cl o de 5   7
(3, 24, 17), -- Manoel de Oliveira, Realizador de Capit es de Abril
(3, 29, 18), -- Pierre Niney, Realizador de La Belle  poque
(3, 28, 19), -- Pedro Almod var, Realizador de Pain and Glory
(3, 31, 20), -- Alejandro Amen bar, Realizador de The Others
(3, 24, 21), -- Yorgos Lanthimos, Realizador de The Lobster
(3, 39, 22), -- Jean-Pierre Jeunet, Realizador de Am lie
(3, 36, 23), -- Jos  Padilha, Realizador de Elite Squad
(3, 38, 24), -- Alejandro Gonz lez I  rritu, Realizador de Biutiful
(3, 18, 25), -- Quentin Tarantino, Realizador de Inglourious Basterds
(3, 40, 26), -- Noah Baumbach, Realizador de Frances Ha
(3, 7, 27), -- Guillermo del Toro, Realizador de The Shape of Water
(3, 22, 28), -- Alfonso Cuar n, Realizador de Roma
(3, 11, 29), -- Ron Howard, Realizador de Frost/Nixon
(3, 27, 30), -- Guel Arraes, Realizador de O Auto da Compadecida
(2, 30, 11), -- L a Seydoux, Atriz em Psycho
(1, 31, 12), -- Antonio Banderas, Ator em Viridiana
(2, 32, 13), -- Marion Cotillard, Atriz em La Dolce Vita
(1, 27, 14), -- Joaquim de Almeida, Ator em Aniki B b 
(1, 33, 15), -- Humphrey Bogart, Ator em   bout de souffle
(2, 35, 16), -- Vivien Leigh, Atriz em Cl o de 5   7
(1, 27, 17), -- Joaquim de Almeida, Ator em Capit es de Abril
(2, 30, 18), -- L a Seydoux, Atriz em La Belle  poque
(1, 38, 19), -- Javier Bardem, Ator em Pain and Glory
(2, 39, 20), -- Audrey Tautou, Atriz em The Others
(1, 40, 21), -- Daniel Br hl, Ator em The Lobster
(2, 30, 22), -- L a Seydoux, Atriz em Am lie
(1, 37, 23), -- Wagner Moura, Ator em Elite Squad
(1, 38, 24), -- Javier Bardem, Ator em Biutiful
(1, 25, 25), -- Christoph Waltz, Ator em Inglourious Basterds
(2, 16, 26), -- Jennifer Lawrence, Atriz em Frances Ha
(2, 6, 27), -- Sally Hawkins, Atriz em The Shape of Water
(2, 8, 28), -- Scarlett Johansson, Atriz em Roma
(1, 14, 29), -- Frank Langella, Ator em Frost/Nixon
(1, 27, 30); -- Matheus Nachtergaele, Ator em O Auto da Compadecida);


INSERT INTO Bilheteira (filme_id, pais_exibicao, receita_bilheteira)
VALUES
(1, 'USA', 400000000.00),
(1, 'Canada', 50000000.00),
(1, 'UK', 100000000.00),
(1, 'Japan', 200000000.00),
(1, 'Germany', 100000000.00),
(1, 'France', 150000000.00),
(1, 'China', 200000000.00),
(2, 'USA', 300000000.00),
(2, 'Canada', 50000000.00),
(2, 'UK', 150000000.00),
(2, 'Japan', 100000000.00),
(2, 'Germany', 70000000.00),
(2, 'France', 100000000.00),
(2, 'China', 66000000.00),
(3, 'USA', 600000000.00),
(3, 'Canada', 100000000.00),
(3, 'UK', 200000000.00),
(3, 'Japan', 300000000.00),
(3, 'Germany', 200000000.00),
(3, 'France', 300000000.00),
(3, 'China', 200000000.00),
(4, 'USA', 400000000.00),
(4, 'Canada', 60000000.00),
(4, 'UK', 150000000.00),
(4, 'Japan', 80000000.00),
(4, 'Germany', 90000000.00),
(4, 'France', 120000000.00),
(4, 'China', 80000000.00),
(5, 'USA', 800000000.00),
(5, 'Canada', 100000000.00),
(5, 'UK', 200000000.00),
(5, 'Japan', 300000000.00),
(5, 'Germany', 250000000.00),
(5, 'France', 400000000.00),
(5, 'China', 600000000.00),
(6, 'USA', 300000000.00),
(6, 'Canada', 50000000.00),
(6, 'UK', 80000000.00),
(6, 'Japan', 60000000.00),
(6, 'Germany', 70000000.00),
(6, 'France', 60000000.00),
(6, 'China', 50000000.00),
(7, 'USA', 150000000.00),
(7, 'Canada', 20000000.00),
(7, 'UK', 50000000.00),
(7, 'Japan', 50000000.00),
(7, 'Germany', 40000000.00),
(7, 'France', 60000000.00),
(7, 'China', 40000000.00),
(8, 'USA', 250000000.00),
(8, 'Canada', 50000000.00),
(8, 'UK', 100000000.00),
(8, 'Japan', 70000000.00),
(8, 'Germany', 50000000.00),
(8, 'France', 90000000.00),
(8, 'China', 62000000.00),
(9, 'USA', 150000000.00),
(9, 'Canada', 20000000.00),
(9, 'UK', 50000000.00),
(9, 'Japan', 30000000.00),
(9, 'Germany', 40000000.00),
(9, 'France', 50000000.00),
(9, 'China', 34000000.00),
(10, 'USA', 200000000.00),
(10, 'Canada', 30000000.00),
(10, 'UK', 80000000.00),
(10, 'Japan', 60000000.00),
(10, 'Germany', 40000000.00),
(10, 'France', 50000000.00),
(10, 'China', 63000000.00),
(11, 'USA', 32000000.00),
(11, 'Canada', 5000000.00),
(11, 'UK', 7000000.00),
(11, 'Japan', 2000000.00),
(11, 'Germany', 6000000.00),
(12, 'Spain', 5000000.00),
(12, 'France', 2000000.00),
(12, 'Mexico', 1500000.00),
(12, 'Argentina', 1000000.00),
(12, 'Brazil', 800000.00),
(13, 'Italy', 18000000.00),
(13, 'France', 5000000.00),
(13, 'Germany', 3000000.00),
(13, 'Spain', 4000000.00),
(13, 'UK', 2500000.00),
(14, 'Portugal', 100000.00),
(14, 'Spain', 50000.00),
(14, 'Brazil', 20000.00),
(15, 'France', 300000.00),
(15, 'Belgium', 100000.00),
(15, 'Switzerland', 80000.00),
(15, 'Canada', 120000.00),
(15, 'Japan', 90000.00),
(16, 'France', 750000.00),
(16, 'UK', 400000.00),
(16, 'USA', 300000.00),
(16, 'Canada', 200000.00),
(16, 'Germany', 150000.00),
(17, 'Portugal', 3000000.00),
(17, 'Brazil', 1500000.00),
(17, 'Spain', 800000.00),
(17, 'France', 600000.00),
(17, 'USA', 700000.00),
(18, 'France', 12946347.00),
(18, 'Belgium', 1000000.00),
(18, 'Switzerland', 900000.00),
(18, 'Canada', 2000000.00),
(18, 'Japan', 1500000.00),
(19, 'Spain', 17000000.00),
(19, 'Argentina', 4000000.00),
(19, 'Mexico', 6000000.00),
(19, 'USA', 8000000.00),
(19, 'UK', 3000000.00),
(20, 'Spain', 97000000.00),
(20, 'USA', 60000000.00),
(20, 'Japan', 25000000.00),
(20, 'UK', 20000000.00),
(20, 'France', 15000000.00),
(21, 'Ireland', 12000000.00),
(21, 'UK', 6000000.00),
(21, 'USA', 9000000.00),
(21, 'Canada', 4000000.00),
(21, 'Japan', 5000000.00),
(22, 'France', 174200000.00),
(22, 'Belgium', 20000000.00),
(22, 'Switzerland', 18000000.00),
(22, 'Canada', 25000000.00),
(22, 'Japan', 22000000.00),
(23, 'Brazil', 9000000.00),
(23, 'Argentina', 3000000.00),
(23, 'Mexico', 4000000.00),
(23, 'Spain', 5000000.00),
(23, 'USA', 7000000.00),
(24, 'Mexico', 17000000.00),
(24, 'Spain', 10000000.00),
(24, 'Argentina', 5000000.00),
(24, 'USA', 6000000.00),
(24, 'Canada', 4000000.00),
(25, 'USA', 200000000.00),
(25, 'UK', 80000000.00),
(25, 'Germany', 70000000.00),
(25, 'France', 50000000.00),
(25, 'Japan', 60000000.00),
(26, 'USA', 11600000.00),
(26, 'Canada', 3000000.00),
(26, 'UK', 5000000.00),
(26, 'Japan', 2000000.00),
(26, 'France', 4000000.00),
(27, 'USA', 195243716.00),
(27, 'Canada', 50000000.00),
(27, 'UK', 60000000.00),
(27, 'Germany', 30000000.00),
(27, 'France', 25000000.00),
(28, 'Mexico', 5000000.00),
(28, 'USA', 2000000.00),
(28, 'Spain', 1500000.00),
(28, 'Argentina', 1000000.00),
(28, 'Brazil', 800000.00),
(29, 'USA', 27393127.00),
(29, 'UK', 12000000.00),
(29, 'Germany', 9000000.00),
(29, 'France', 8000000.00),
(29, 'Japan', 7000000.00),
(30, 'Brazil', 11000000.00),
(30, 'Portugal', 3000000.00),
(30, 'Spain', 2000000.00),
(30, 'France', 1500000.00),
(30, 'USA', 5000000.00);


INSERT INTO Custo_Producao(filme_id, custo_producao)
VALUES

(1,  63000000.00),
(2,  160000000.00),
(3,  200000000.00),
(4,  185000000.00),
(5,  237000000.00),
(6,  149000000.00),
(7, 63000000.00),
(8,  165000000.00),
(9,  150000000.00),
(10,  135000000.00),
(11,  806947.00),
(12,  400000.00),
(13,  800000.00),
(14,  20000.00),
(15,  50000.00),
(16,  32000.00),
(17,  1000000.00),
(18,  9500000.00),
(19,  10500000.00),
(20,  17000000.00),
(21,  4000000.00),
(22,  10000000.00),
(23,  4000000.00),
(24, 5000000.00),
(25,  70000000.00),
(26,  3000000.00),
(27,  19500000.00),
(28,  15000000.00),
(29,  25000000.00),
(30,  700000.00);


INSERT INTO Merchandising (filme_id, merchandising)
VALUES
(1, 63000000.00 ), -- 'Jurassic Park'
(2, 160000000.00 ), -- 'Inception'
(3, 200000000.00 ), -- 'Titanic'
(4, 185000000.00 ), -- 'The Dark Knight'
(5, 237000000.00 ), -- 'Avatar'
(6, 149000000.00 ), -- 'Wonder Woman'
(7, 63000000.00 ), -- 'The Matrix'
(8, 165000000.00 ), -- 'Interstellar'
(9, 150000000.00 ), -- 'Mad Max: Fury Road'
(10, 135000000.00 ), -- 'The Revenant'
(11, 806947.00 ), -- 'Psycho'
(12, 400000.00 ), -- 'Viridiana'
(13, 800000.00 ), -- 'La Dolce Vita'
(14, 20000.00 ), -- 'Aniki B b '
(15, 50000.00 ), -- '  bout de souffle'
(16, 32000.00 ), -- 'Cl o de 5   7'
(17, 1000000.00 ), -- 'Capit es de Abril'
(18, 9500000.00 ), -- 'La Belle  poque'
(19, 10500000.00 ), -- 'Pain and Glory'
(20, 17000000.00 ), -- 'The Others'
(21, 4000000.00 ), -- 'The Lobster'
(22, 10000000.00 ), -- 'Am lie'
(23, 4000000.00 ), -- 'Elite Squad'
(24, 5000000.00 ), -- 'Biutiful'
(25, 70000000.00 ), -- 'Inglourious Basterds'
(26, 3000000.00 ), -- 'Frances Ha'
(27, 19500000.00 ), -- 'The Shape of Water'
(28, 15000000.00 ), -- 'Roma'
(29, 25000000.00), -- 'Frost/Nixon'
(30, 700000.00 ); -- 'O Auto da Compadecida'