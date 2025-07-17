CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL,
  email TEXT UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    item_description TEXT,
    special_ability VARCHAR(100)
);

INSERT INTO users (username, email, password)
VALUES
  ('pixelwizard',  'pixelwizard@mailinator.com', '$2b$10$PIXELW1ZARDHASH0000000000000000000000000'),
  ('tech_druid',   'druid42@fakemail.net',       '$2b$10$DRU1D42HASH00000000000000000000000000000'),
  ('coderella',    'coderella@example.org',      '$2b$10$CODER3LLAHASH000000000000000000000000000'),
  ('quantumwolf',  'qwolf@devmail.io',           '$2b$10$QUANTUMW0LFHASH0000000000000000000000000'),
  ('nullhunter',   'nullhunter@voidmail.com',    '$2b$10$NULLHUNT3RHASH00000000000000000000000000'),
  ('javasprite',   'javasprite@inbox.test',      '$2b$10$JAVASPR1TEHASH00000000000000000000000000'),
  ('merlin_stack', 'mstack@devwizard.net',       '$2b$10$MERL1N5TACKHASH0000000000000000000000000'),
  ('bugzapper',    'bugzapper@mailbox.dev',      '$2b$10$BUGZAPP3RHASH000000000000000000000000000'),
  ('asyncsally',   'asyncsally@nodemail.org',    '$2b$10$ASYNC5ALLYHASH00000000000000000000000000'),
  ('dbnomad',      'dbnomad@fakeinbox.me',       '$2b$10$DBN0M4DHASH00000000000000000000000000000');


INSERT INTO "items" (item_name, item_description, special_ability) VALUES ('test', 'test', 'test');
