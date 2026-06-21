-- ============================================
-- DATABASE SCHEMA — Flytify Brochure Generator
-- ============================================
--
-- WHY DO WE NEED A DATABASE?
-- When a user fills in the form on test.html
-- and clicks "Generate", we need to store their
-- information somewhere. A database lets us:
--
--   1. Keep a record of every brochure created
--   2. Let users come back to edit their brochure
--   3. See which templates are most popular
--
-- Without a database, the data would disappear
-- every time the page refreshes.
--
-- YOUR TASK:
--   The table below is INCOMPLETE. It has the
--   most important columns, but you need to add:
--
--     company_name    — the user's company
--     tagline         — their slogan
--     primary_color   — their brand colour
--     secondary_color — their second brand colour
--     custom_image_path — where their logo is saved
--
--   Look at the form fields in test.html and add
--   every field as a column. Then modify hint.php
--   (or your own generate.php) to insert into
--   all of these columns.
-- ============================================

CREATE TABLE submissions (
    -- Unique ID for each brochure (auto-generated)
    id INT AUTO_INCREMENT PRIMARY KEY,

    -- The person's full name (required)
    full_name VARCHAR(255) NOT NULL,

    -- Their email address
    email VARCHAR(255),

    -- Their phone number
    phone VARCHAR(50),

    -- ==========================================
    -- TODO: Add the missing columns here
    -- ==========================================
    -- Example:
    -- company_name VARCHAR(255),
    -- tagline VARCHAR(255),
    -- primary_color VARCHAR(7),
    -- secondary_color VARCHAR(7),
    -- custom_image_path VARCHAR(500),
    -- ==========================================

    -- When the brochure was created (auto-set)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- NEXT STEPS
-- ============================================
-- 1. Add all the columns listed in the TODO above
-- 2. Create the database in phpMyAdmin
-- 3. Import this file to create the table
-- 4. Update your generate.php to insert into
--    every column you added
-- ============================================
