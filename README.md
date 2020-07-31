#Objednávkový systém

Projekt nyní celý kompletně přepisuji. Po registraci je nutno se zase přihlásit, poté tahám fakturační údaje pomocí simple_xml z aresu. Po potvrzení fakturačních udaju, přesměruje uživatele k objednávkovém systému, kde si může uživatel vytvořit, upravit a odstranit objednávku. Po potvrzení odešle potvrzovací email.

Pro instalaci je nutno postupovat.
```
git clone https://github.com/b1g2h3/objednavkovy-system.git 
cd objednavkovy-system 
cp .env.example 
.env php artisan key:generate 
npm i npm run dev 
php artisan migrate 
php artisan passport:install 
PASSPORT_CLIENT_ID a grant pro password 
PASSPORT_CLIENT_SECRET 
php artisan db:seed 
php artisan serve
```
Nebo je možno použít dump z databáze db.sql a do env je nutno vložit passport client_id a secret
```
PASSPORT_CLIENT_ID = 2
PASSPORT_CLIENT_SECRET = YYMsoppRbNi5DScmQ9yRY4jPzI8JtSyqoYfaw4l1
```

Pro přihlášení lze použít 
uživatelské jméno kudlickatomas95@gmail.com nebo owner@owner.com
 a heslo password
 
