<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221226231745 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D64946D303A0');
        $this->addSql('DROP INDEX UNIQ_8D93D64946D303A0 ON user');
        $this->addSql('ALTER TABLE user DROP customer_details_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD customer_details_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64946D303A0 FOREIGN KEY (customer_details_id) REFERENCES customer_details (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D64946D303A0 ON user (customer_details_id)');
    }
}
