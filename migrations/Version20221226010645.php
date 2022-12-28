<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221226010645 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE request (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, staking_plan_id INT NOT NULL, amount INT NOT NULL, type VARCHAR(255) NOT NULL, status VARCHAR(255) NOT NULL, hash_tx VARCHAR(255) NOT NULL, duration INT NOT NULL, INDEX IDX_3B978F9FA76ED395 (user_id), INDEX IDX_3B978F9F9CD2082D (staking_plan_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE request ADD CONSTRAINT FK_3B978F9FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE request ADD CONSTRAINT FK_3B978F9F9CD2082D FOREIGN KEY (staking_plan_id) REFERENCES staking_plan (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE request DROP FOREIGN KEY FK_3B978F9FA76ED395');
        $this->addSql('ALTER TABLE request DROP FOREIGN KEY FK_3B978F9F9CD2082D');
        $this->addSql('DROP TABLE request');
    }
}
