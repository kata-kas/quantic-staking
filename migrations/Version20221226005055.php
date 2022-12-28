<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221226005055 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE staking_plan (id INT AUTO_INCREMENT NOT NULL, currency_id INT NOT NULL, network_id INT NOT NULL, status VARCHAR(255) NOT NULL, duration LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', apr LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', INDEX IDX_C168AB9C38248176 (currency_id), INDEX IDX_C168AB9C34128B91 (network_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE staking_plan ADD CONSTRAINT FK_C168AB9C38248176 FOREIGN KEY (currency_id) REFERENCES currency (id)');
        $this->addSql('ALTER TABLE staking_plan ADD CONSTRAINT FK_C168AB9C34128B91 FOREIGN KEY (network_id) REFERENCES network (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE staking_plan DROP FOREIGN KEY FK_C168AB9C38248176');
        $this->addSql('ALTER TABLE staking_plan DROP FOREIGN KEY FK_C168AB9C34128B91');
        $this->addSql('DROP TABLE staking_plan');
    }
}
