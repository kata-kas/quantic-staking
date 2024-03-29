<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221228160553 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE staking_plan ADD durations LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', DROP duration, DROP apr');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE staking_plan ADD apr LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', CHANGE durations duration LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\'');
    }
}
