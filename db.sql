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

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_by TEXT CHECK (created_by IN ('admin', 'gpt')) NOT NULL
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL  -- e.g. Horror, Fantasy, Sci-Fi, Noir
);

CREATE TABLE characters (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  backstory TEXT,
  character_class TEXT, -- optional: e.g. rogue, mage, etc.
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE adventures (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  genre_id INTEGER REFERENCES genres(id),
  character_id INTEGER REFERENCES characters(id),
  title TEXT, -- optional user-provided or system-generated name
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  adventure_id INTEGER REFERENCES adventures(id) ON DELETE CASCADE,
  sender TEXT NOT NULL, -- 'user' or 'system' (ChatGPT)
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  adventure_id INTEGER REFERENCES adventures(id) ON DELETE CASCADE,
  item_id INTEGER REFERENCES items(id),
  quantity INTEGER DEFAULT 1,
  UNIQUE(adventure_id, item_id)  -- ensures no duplicates
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
