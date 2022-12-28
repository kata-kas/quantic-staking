<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221228160015 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE staking_plan CHANGE duration duration LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', CHANGE apr apr LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', CHANGE networks networks LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE staking_plan CHANGE duration duration LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', CHANGE apr apr LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', CHANGE networks networks LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\'');
    }
}
