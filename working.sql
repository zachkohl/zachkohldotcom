
-- cat working.sql | heroku pg:psql --app paccenter

--To enter PSQL: heroku pg:psql --app paccenter

--Enter the redis database: heroku redis:cli --app zachkohl

-- CREATE TABLE "session" (
--   "sid" varchar NOT NULL COLLATE "default",
-- 	"sess" json NOT NULL,
-- 	"expire" timestamp(6) NOT NULL
-- )
-- WITH (OIDS=FALSE);
-- ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;


-- CREATE TABLE users (
--  id serial PRIMARY KEY, 
--  username VARCHAR (255) UNIQUE NOT NULL,
--  email VARCHAR(255) UNIQUE NOT NULL,
--  emailvalidated BOOLEAN,
--  storedhash VARCHAR(255) NOT NULL,
--  role VARCHAR(255) NOT NULL,
--  category VARCHAR(255)
-- );


-- CREATE TABLE pages (
-- id serial primary key,
-- slug VARCHAR (255) UNIQUE NOT NULL,
-- content jsonb
-- );
-- INSERT INTO pages (slug,content) VALUES('/', '{"content1":"hello world"}');