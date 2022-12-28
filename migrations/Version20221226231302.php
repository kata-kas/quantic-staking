<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221226231302 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE customer_details DROP FOREIGN KEY FK_6EFBAF34A76ED395');
        $this->addSql('DROP INDEX UNIQ_6EFBAF34A76ED395 ON customer_details');
        $this->addSql('ALTER TABLE customer_details DROP user_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE customer_details ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE customer_details ADD CONSTRAINT FK_6EFBAF34A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6EFBAF34A76ED395 ON customer_details (user_id)');
    }
}
