Objednávkový systém

Projekt nyní celý kompletně přepisuji. Po registraci je nutno se zase přihlásit, poté tahám fakturační údaje pomocí simple_xml z aresu. Po potvrzení fakturačních udaju, přesměruje uživatele k objednávkovém systému, kde si může uživatel vytvořit, upravit a odstranit objednávku. Po potvrzení odešle potvrzovací email.

Pro instalaci je nutno postupovat.

# git clone https://github.com/b1g2h3/objednavkovy-system.git 
# cd objednavkovy-system cp .env.example .env php artisan key:generate composer install npm i npm run dev php artisan migrate php artisan passport:install a do env zadat klíč a č.user_id PASSPORT_CLIENT_ID a grant pro password PASSPORT_CLIENT_SECRET php artisan db:seed php artisan serve
