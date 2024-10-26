CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    item_description TEXT,
    special_ability VARCHAR(100)
);

INSERT INTO "items" (item_name, item_description, special_ability) VALUES ('test', 'test', 'test');
